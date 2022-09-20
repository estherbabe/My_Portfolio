import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Socials from "./components/Socials";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Socials />
    </div>
  );
}

export default App;
