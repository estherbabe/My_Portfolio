import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Socials from "./components/Socials";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Socials />
    </div>
  );
}

export default App;
