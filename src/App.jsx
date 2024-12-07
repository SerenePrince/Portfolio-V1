import "./App.css";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Work></Work>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}

export default App;
