import nodemailer from "nodemailer";

const json = (statusCode, body) => ({
    statusCode,
    headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
    },
    body: JSON.stringify(body),
});

const escapeHtml = (value = "") =>
    String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const getEnv = (name) => process.env[name]?.trim();

const getProfileUrl = () => {
    const frontendUrl = getEnv("FRONTEND_URL") || getEnv("URL") || "http://localhost:5173";

    try {
        return new URL("/about-us", frontendUrl.endsWith("/") ? frontendUrl : `${frontendUrl}/`).toString();
    } catch {
        return "http://localhost:5173/about-us";
    }
};

const toBoolean = (value, fallback = false) => {
    if (value === undefined) return fallback;
    return String(value).toLowerCase() === "true";
};

const createHtmlEmail = ({name, email, message}) => {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
    const sentAt = new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Asia/Kolkata",
    });

    return `
        <div style="margin:0;padding:0;background:#f4f4f5;font-family:Manrope,Poppins,Arial,sans-serif;color:#18181b;">
            <div style="max-width:680px;margin:0 auto;padding:32px 18px;">
                <div style="border:1px solid rgba(124,77,255,0.18);background:#ffffff;border-radius:26px;overflow:hidden;box-shadow:0 24px 70px rgba(31,38,135,0.16);">
                    <div style="padding:28px 30px;background:linear-gradient(135deg,#2563eb,#c026d3,#facc15);color:#ffffff;">
                        <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:12px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;opacity:0.88;">Engineering Contact Signal</div>
                        <h1 style="font-family:'Space Grotesk',Poppins,Arial,sans-serif;margin:10px 0 0;font-size:28px;line-height:1.25;letter-spacing:-0.02em;">New portfolio message from ${safeName}</h1>
                    </div>
                    <div style="padding:28px 30px;">
                        <div style="display:grid;gap:14px;margin-bottom:24px;">
                            <div style="padding:16px 18px;border:1px solid #e4e4e7;background:#fafafa;border-radius:18px;">
                                <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:11px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;color:#71717a;">Sender Name</div>
                                <div style="font-family:'Space Grotesk',Poppins,Arial,sans-serif;margin-top:5px;font-size:16px;font-weight:700;">${safeName}</div>
                            </div>
                            <div style="padding:16px 18px;border:1px solid #e4e4e7;background:#fafafa;border-radius:18px;">
                                <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:11px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;color:#71717a;">Reply Channel</div>
                                <div style="font-family:'Space Grotesk',Poppins,Arial,sans-serif;margin-top:5px;font-size:16px;font-weight:700;">
                                    <a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none;">${safeEmail}</a>
                                </div>
                            </div>
                        </div>
                        <div style="padding:20px;border-left:4px solid #facc15;background:#f8fafc;border-radius:18px;">
                            <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:11px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;color:#71717a;margin-bottom:10px;">Project / Role Context</div>
                            <div style="font-size:15px;line-height:1.75;color:#3f3f46;">${safeMessage}</div>
                        </div>
                        <p style="font-family:'JetBrains Mono',Consolas,monospace;margin:24px 0 0;font-size:12px;color:#71717a;">Delivered by Manish.dev portfolio mail service on ${escapeHtml(sentAt)}.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const createVisitorHtmlEmail = ({name, message, profileUrl}) => {
    const safeName = escapeHtml(name);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
    const safeProfileUrl = escapeHtml(profileUrl);

    return `
        <div style="margin:0;padding:0;background:#f4f4f5;font-family:Manrope,Poppins,Arial,sans-serif;color:#18181b;">
            <div style="max-width:680px;margin:0 auto;padding:32px 18px;">
                <div style="border:1px solid rgba(124,77,255,0.18);background:#ffffff;border-radius:26px;overflow:hidden;box-shadow:0 24px 70px rgba(31,38,135,0.16);">
                    <div style="padding:30px;background:linear-gradient(135deg,#2563eb,#c026d3,#facc15);color:#ffffff;">
                        <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:12px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;opacity:0.9;">Message Received</div>
                        <h1 style="font-family:'Space Grotesk',Poppins,Arial,sans-serif;margin:10px 0 0;font-size:28px;line-height:1.25;letter-spacing:-0.02em;">Thanks for connecting, ${safeName}</h1>
                    </div>
                    <div style="padding:28px 30px;">
                        <p style="margin:0 0 16px;font-size:15px;line-height:1.75;color:#3f3f46;">
                            I received your message through my portfolio contact form. I&apos;ll review the context and reply to you as soon as possible.
                        </p>
                        <div style="padding:18px 20px;border-left:4px solid #facc15;background:#f8fafc;border-radius:18px;margin:22px 0;">
                            <div style="font-family:'JetBrains Mono',Consolas,monospace;font-size:11px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;color:#71717a;margin-bottom:10px;">Your Message</div>
                            <div style="font-size:15px;line-height:1.75;color:#3f3f46;">${safeMessage}</div>
                        </div>
                        <p style="margin:0 0 24px;font-size:15px;line-height:1.75;color:#3f3f46;">
                            Meanwhile, you can view my profile, projects, and backend work here:
                        </p>
                        <a href="${safeProfileUrl}" style="display:inline-block;border-radius:999px;background:linear-gradient(135deg,#7c4dff,#2563eb,#5c6bc0);padding:13px 22px;color:#ffffff;font-family:'Space Grotesk',Poppins,Arial,sans-serif;font-size:13px;font-weight:800;letter-spacing:0.12em;text-decoration:none;text-transform:uppercase;">
                            View Manish Profile
                        </a>
                        <p style="font-family:'JetBrains Mono',Consolas,monospace;margin:24px 0 0;font-size:12px;color:#71717a;">
                            Manish.dev portfolio | Spring Boot, React, MySQL, JPA
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const sendWithBrevoApi = async ({
    apiKey,
    senderEmail,
    senderName,
    recipientEmail,
    recipientName = "Manish Kumar",
    replyToEmail,
    replyToName,
    subject,
    htmlContent,
    textContent,
}) => {
    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
            accept: "application/json",
            "api-key": apiKey,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            sender: {
                name: senderName,
                email: senderEmail,
            },
            to: [
                {
                    email: recipientEmail,
                    name: recipientName,
                },
            ],
            replyTo: {
                email: replyToEmail,
                name: replyToName,
            },
            subject,
            htmlContent,
            textContent,
        }),
    });

    if (!brevoResponse.ok) {
        let brevoError = "Brevo API could not send the message.";
        try {
            const errorPayload = await brevoResponse.json();
            brevoError = errorPayload.message || brevoError;
        } catch {
            // Keep a generic message if Brevo returns non-JSON.
        }

        const error = new Error(brevoError);
        error.status = brevoResponse.status;
        throw error;
    }
};

const sendWithBrevoSmtp = async ({
    senderEmail,
    senderName,
    recipientEmail,
    recipientName = "Manish Kumar",
    replyToEmail,
    replyToName,
    subject,
    htmlContent,
    textContent,
}) => {
    const smtpHost = getEnv("MAIL_HOST") || getEnv("BREVO_SMTP_HOST");
    const smtpPort = Number(getEnv("MAIL_PORT") || getEnv("BREVO_SMTP_PORT") || 587);
    const smtpUser = getEnv("BREVO_USERNAME") || getEnv("MAIL_USERNAME") || getEnv("MAIL_USER");
    const smtpPass =
        getEnv("BREVO_PASSWORD") ||
        getEnv("MAIL_PASSWORD") ||
        (getEnv("BREVO_API_KEY")?.startsWith("xsmtpsib-") ? getEnv("BREVO_API_KEY") : undefined);

    if (!smtpHost || !smtpUser || !smtpPass) {
        throw new Error("Brevo SMTP configuration is missing.");
    }

    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: toBoolean(getEnv("MAIL_SMTP_SSL_ENABLE"), smtpPort === 465),
        requireTLS: toBoolean(getEnv("MAIL_SMTP_STARTTLS_REQUIRED"), smtpPort === 587),
        auth: {
            user: smtpUser,
            pass: smtpPass,
        },
    });

    await transporter.sendMail({
        from: `"${senderName}" <${senderEmail}>`,
        to: `"${recipientName}" <${recipientEmail}>`,
        replyTo: `"${replyToName}" <${replyToEmail}>`,
        subject,
        html: htmlContent,
        text: textContent,
    });
};

const sendBrevoEmail = async ({hasApiKey, apiKey, ...emailPayload}) => {
    if (hasApiKey) {
        await sendWithBrevoApi({
            apiKey,
            ...emailPayload,
        });
        return;
    }

    await sendWithBrevoSmtp(emailPayload);
};

export const handler = async (event) => {
    if (event.httpMethod === "OPTIONS") {
        return json(200, {ok: true});
    }

    if (event.httpMethod !== "POST") {
        return json(405, {ok: false, message: "Method not allowed."});
    }

    const brevoApiKey = getEnv("BREVO_API_KEY");
    const senderEmail = getEnv("BREVO_FROM_EMAIL") || getEnv("MAIL_FROM");
    const senderName = getEnv("BREVO_FROM_NAME") || getEnv("MAIL_FROM_NAME") || "Manish Kumar Portfolio";
    const recipientEmail =
        getEnv("CONTACT_TO_EMAIL") ||
        getEnv("BREVO_TO_EMAIL") ||
        getEnv("BREVO_FROM_EMAIL") ||
        getEnv("MAIL_FROM") ||
        "manishrajrnl@zohomail.in";
    const hasApiKey = brevoApiKey?.startsWith("xkeysib-");
    const hasSmtpCredentials =
        Boolean(getEnv("BREVO_USERNAME") || getEnv("MAIL_USERNAME") || getEnv("MAIL_USER")) &&
        Boolean(getEnv("BREVO_PASSWORD") || getEnv("MAIL_PASSWORD") || brevoApiKey?.startsWith("xsmtpsib-"));

    if ((!hasApiKey && !hasSmtpCredentials) || !senderEmail) {
        return json(500, {
            ok: false,
            message: "Email service is not configured yet. Please check Brevo API or SMTP environment variables.",
        });
    }

    let payload;
    try {
        payload = JSON.parse(event.body || "{}");
    } catch {
        return json(400, {ok: false, message: "Invalid request body."});
    }

    const name = String(payload.name || "").trim();
    const email = String(payload.email || "").trim();
    const message = String(payload.message || "").trim();
    const company = String(payload.company || "").trim();

    if (company) {
        return json(200, {ok: true, message: "Message sent successfully."});
    }

    if (name.length < 2) {
        return json(400, {ok: false, message: "Please enter your full name."});
    }

    if (!isValidEmail(email)) {
        return json(400, {ok: false, message: "Please enter a valid email address."});
    }

    if (message.length < 12) {
        return json(400, {ok: false, message: "Please write a little more context before sending."});
    }

    const profileUrl = getProfileUrl();
    const developerSubject = `Manish.dev Contact: ${name}`;
    const developerTextContent = [
        "New Manish.dev portfolio contact message",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
    ].join("\n");
    const developerHtmlContent = createHtmlEmail({name, email, message});
    const visitorSubject = "Thanks for contacting Manish Kumar";
    const visitorTextContent = [
        `Hi ${name},`,
        "",
        "Thanks for contacting me through my portfolio. I received your message and will review it soon.",
        "",
        "Your message:",
        message,
        "",
        `View my profile: ${profileUrl}`,
        "",
        "Manish Kumar",
        "Spring Boot | React | MySQL | JPA",
    ].join("\n");
    const visitorHtmlContent = createVisitorHtmlEmail({name, message, profileUrl});

    try {
        await sendBrevoEmail({
            hasApiKey,
            apiKey: brevoApiKey,
            senderEmail,
            senderName,
            recipientEmail,
            recipientName: "Manish Kumar",
            replyToEmail: email,
            replyToName: name,
            subject: developerSubject,
            htmlContent: developerHtmlContent,
            textContent: developerTextContent,
        });

        await sendBrevoEmail({
            hasApiKey,
            apiKey: brevoApiKey,
            senderEmail,
            senderName,
            recipientEmail: email,
            recipientName: name,
            replyToEmail: senderEmail,
            replyToName: senderName,
            subject: visitorSubject,
            htmlContent: visitorHtmlContent,
            textContent: visitorTextContent,
        });
    } catch (error) {
        const status = error.status || error.responseCode || error.code || "unknown";
        const channel = hasApiKey ? "api" : "smtp";

        console.error("Brevo email failed", {
            channel,
            status,
            message: error.message,
        });

        return json(502, {
            ok: false,
            message: "Email service is temporarily unavailable. Please try again in a few minutes.",
        });
    }

    return json(200, {
        ok: true,
        message: "Message sent successfully. A confirmation email has also been sent to you.",
    });
};
