import React from 'react';
import Title from './Title';
import Work from './Work';
import About from './About';
import ContactMe from './ContactMe';

const Home = () => (
  <>
    <Title />
    <Work id="work" />
    <About id="about" />
    <ContactMe id="contact" />
  </>
);
export default Home;
