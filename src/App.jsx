import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import LogoBar from './components/LogoBar.jsx';
import Gallery from './components/Gallery.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Gallery />
        <Services />
        <Process />
        <Contact />
      </main>
    </>
  );
}
