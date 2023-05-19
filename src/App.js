import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/HeroSection/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
