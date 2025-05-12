import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,           // You can keep or replace this line with Projects if needed
  StarsCanvas,
  Projects         // 👈 Add this line if you're using a separate Projects.jsx file
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        <section id="about">
          <About />
        </section>

        <section id="experiences">
          <Experience />
        </section>

        <Tech />

        {/* 👇 Section for Projects */}
        <section id="projects">
          <Projects /> {/* or <Works /> if that's what you're using */}
        </section>

        <Feedbacks />

        <section id="contact">
          <Contact />
        </section>

        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
