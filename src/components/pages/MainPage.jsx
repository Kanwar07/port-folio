import React from "react";
import Footer from "../footer/Footer";
import Contact from "../sections/Contact";
import Intro from "../sections/Intro";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import NavBar from "../navbar/NavBar";

function MainPage() {
  return (
    <div>
      <NavBar />
      <section id="about">
        <Intro />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default MainPage;
