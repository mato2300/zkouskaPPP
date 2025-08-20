import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Documents from "./components/Documents";
import Gallery from "./components/Gallery";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Documents />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
