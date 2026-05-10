import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WorkHistory from './components/WorkHistory';
import ExternalLinks from './components/ExternalLinks';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WorkHistory />
        <ExternalLinks />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;