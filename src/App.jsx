  import React, { useState, useEffect } from 'react'
  import Nav from '../src/components/Nav';
  import Hero from './components/Hero';
  import Usluge from './components/Usluge';
  import Galerija from './components/Galerija';
  import About from './components/About';
  import Kontakt from './components/Kontakt';
  import Footer from './components/Footer';
  import Spinner from './components/Spinner';
  function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
     setTimeout(() => {
        setLoading(false);
      }, 1500);
    }, []); 

    
    return (
      <>
      <Nav/>
      {loading ? (
        <div id="divvv" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative', zIndex:1000, width:'100%', minHeight:'97vh'}}>
          <Spinner/>
        </div>
      ) : (
        <div>
          <Hero />
          <Usluge />
          <Galerija />
          <About />
          <Kontakt />
          <Footer/>
        </div>
      )}
    </>
    )
  }

  export default App
