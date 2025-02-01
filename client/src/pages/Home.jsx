import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from "../components/About"
import Gallary from "../components/Gallary";
import Sample from '../components/Sample';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallary />
      <Sample/>
    </>
  );
}

export default Home;
