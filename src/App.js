import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Cover from './components/cover/Cover';
import About from './components/about/About';
import Services from './components/services/Services';
import Works from './components/works/Works';
import News from './components/news/News';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Phrase from './components/phrase/Phrase';
import Promo from './components/promo/Promo';


function App() {
  return (
    <>
      <Navbar />
      <Cover />
      <About />
      <Works />
      <Services />
      <Phrase />
      <News />
      <Promo />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
