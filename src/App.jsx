// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Menu from './components/Menu';

const App = () => {

  return (
    <div>
      <Navbar/>
      <main>
        <div id='home'>
          <Home/>
        </div>
        <div id='menu'>
          <Menu/>
        </div>
        <div id='contact'>
          <Contact/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App