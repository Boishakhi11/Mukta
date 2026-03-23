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
      <header className="w-11/12 mx-auto">
        <Navbar />
      </header>
      <section>
        <Home />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Skills />
      </section>

      <section>
        <Projects />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
