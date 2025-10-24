
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#081b29] min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
