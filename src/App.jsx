import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <Home />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
