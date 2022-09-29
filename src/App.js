import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Services from "./Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Contact />
      <About />
    </div>
  );
}

export default App;
