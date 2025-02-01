import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from "../components/About"
import Sample from '../components/Sample';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Sample/>
    </>
  );
}

export default Home;
