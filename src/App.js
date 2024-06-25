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
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
