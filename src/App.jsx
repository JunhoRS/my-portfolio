import {React,useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []); 

  return (
    <main className="bg-gray-950">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
