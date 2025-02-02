import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from "../components/About"
import Gallary from "../components/Gallary";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Sample from '../components/Sample';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallary />
      <Contact />
      <Footer />
      {/* <Sample/>  */}
    </>
  );
}

export default Home;
