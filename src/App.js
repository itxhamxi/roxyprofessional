import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Navigation from './components/Nav.js'
import Jumbotron from './components/Jumbotron'
import SlideCourses from './components/SlideCourses'
import InfoArea from './components/InfoArea'
import Footer from './components/Footer'
function App() {
  return (
    <div className="app">
      <Navigation/>
      <Jumbotron/>
      <SlideCourses/>
      <InfoArea/>
      <Footer/>
    </div>
  );
}

export default App;
