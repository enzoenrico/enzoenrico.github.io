//imports for website

import React from 'react';
import './App.css';
import Header from './components/Header';
import Info from './components/Info';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Projects id="project-import"/>
      <About />
      <Contact />
      <Footer />
    </div >
  );
}

export default App;
