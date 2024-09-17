import React from 'react';
import Navbar from './component/Navbar';
import Header from './component/Header';
import { LandingCarousel } from './component/LandingCarousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <LandingCarousel />
    </div>
  );
}

export default App;
