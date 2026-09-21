import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Journey from './components/Journey.jsx';
import Process from './components/Process.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Projects />
        <Services />
        <Process />
        <Contact />
      </main>
    </>
  );
}
