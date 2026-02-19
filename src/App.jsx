import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <Navbar />
      <Hero />
      <About />
      <Projects />

      {/* Experience + Contact side by side */}
      <section id="experience" className="py-20 relative">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Experience />
            <div id="contact">
              <Contact />
            </div>
          </div>
        </div>
      </section>

      {/* Education - independent section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Education />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
