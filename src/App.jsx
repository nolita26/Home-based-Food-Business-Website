// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id='home'>
          <Home/>
        </div>
        {/* <div id='order'>
          <Menu/>
        </div> */}
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
