import {React,useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []); 

  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Hero />
      {/* You can add more components here */}
      <Navbar /> 

      Hello world!
    </main>
  )
}

export default App
