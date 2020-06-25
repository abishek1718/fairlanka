import React from 'react';
import logo from './images/mainlogo.png';
import './App.css';

import Carousel from './components/Carousel';
import Services from './components/Services';
import Products from './components/Products';
import ContactForm from './components/ContactForm';
import GoogleMap from './components/GoogleMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <div className='top-logo'><img src={logo} alt='logo' /></div>
      <Carousel/>
      <br />
      <Services />
      <br />
      <Products />
      <br />
      <ContactForm/>
      <br/>
      <GoogleMap/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
