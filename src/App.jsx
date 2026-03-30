import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <header className="w-10/12 mx-auto">
        <Navbar />
      </header>

      <section className="w-10/12 mx-auto" id="home">
        <Home />
      </section>

      <section className="w-10/12 mx-auto" id="about">
        <About />
      </section>

      <section className="w-10/12 mx-auto" id="skills">
        <Skills />
      </section>

      <section className="w-10/12 mx-auto" id="projects">
        <Projects />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
