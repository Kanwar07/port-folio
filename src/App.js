import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Contact from "./components/sections/Contact";
import Intro from "./components/sections/Intro";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

function App() {
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

export default App;
