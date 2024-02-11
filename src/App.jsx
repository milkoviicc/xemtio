import React, { useState } from 'react'

import Nav from '../src/components/Nav';
import Hero from './components/Hero';
import Usluge from './components/Usluge';
import Galerija from './components/Galerija';
import About from './components/About';
import Kontakt from './components/Kontakt';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Nav/>
      <Hero />
      <Usluge />
      <Galerija />
      <About />
      <Kontakt />
      <Footer/>
    </>
  )
}

export default App
