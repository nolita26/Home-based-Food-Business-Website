// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PopFood from './components/PopFood';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {

  return (
    <div>
      <Navbar/>
      <main>
        <div id='home'>
          <Home/>
        </div>
        <div id='popfood'>
          <PopFood/>
        </div>
        <div id='menu'>
          <Menu/>
        </div>
        <div id='contact'>
          <Contact/>
        </div>
        <div id='login'>
          <Login/>
        </div>
        <div id='register'>
          <Register/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App