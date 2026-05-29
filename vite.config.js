import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

const readRequestBody = (request) =>
    new Promise((resolve, reject) => {
        let body = "";
        request.on("data", (chunk) => {
            body += chunk;
        });
        request.on("end", () => resolve(body));
        request.on("error", reject);
    });

const localNetlifyFunctions = (mode) => ({
    name: "local-netlify-functions",
    configureServer(server) {
        const env = loadEnv(mode, process.cwd(), "");

        Object.entries(env).forEach(([key, value]) => {
            process.env[key] = value;
        });

        server.middlewares.use("/.netlify/functions/send-contact-email", async (request, response) => {
            try {
                const body = await readRequestBody(request);
                const {handler} = await import("./netlify/functions/send-contact-email.js");
                const result = await handler({
                    httpMethod: request.method,
                    headers: request.headers,
                    body,
                });

                response.statusCode = result.statusCode || 200;
                Object.entries(result.headers || {}).forEach(([key, value]) => {
                    response.setHeader(key, value);
                });
                response.end(result.body || "");
            } catch (error) {
                console.error("Local contact function failed", error);
                response.statusCode = 500;
                response.setHeader("Content-Type", "application/json");
                response.end(JSON.stringify({
                    ok: false,
                    message: "Local email function failed. Check the dev server logs.",
                }));
            }
        });
    },
});

export default defineConfig(({mode}) => ({
    plugins: [react(), tailwindcss(), localNetlifyFunctions(mode)],
    base: '/', // 👈 important for Netlify subfolder deployment
}))
