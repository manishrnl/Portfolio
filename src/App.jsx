import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou.jsx";
import Resume from "./pages/Resume.jsx";
import Footer from "./components/Footer.jsx";


function App() {
    return (
        <Router>
            <NavBar/>
            <main className="app-shell">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about-us" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact-us" element={<Contact/>}/>
                    <Route path="/thank-you" element={<ThankYou/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                </Routes>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
