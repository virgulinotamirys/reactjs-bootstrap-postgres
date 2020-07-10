import React, { Component } from 'react';
import Routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/main';
import Sobre from './pages/sobre';
import Login from './pages/login';

const App = () => (
  <div className="App">
      <Header />
      <Routes />
      <Footer />
  </div>
);


export default App;
