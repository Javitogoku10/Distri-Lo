
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import QuoteCalculator from './components/QuoteCalculator';
import Destinations from './components/Destinations';
import MissionCalendar from './components/MissionCalendar';
import SuccessMissions from './components/SuccessMissions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-[#fefae0] text-[#283618] selection:bg-[#bc6c25] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <QuoteCalculator />
        <Destinations />
        <MissionCalendar />
        <SuccessMissions />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
