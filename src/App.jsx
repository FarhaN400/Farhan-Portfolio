import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
