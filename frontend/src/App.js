import Home from './Home/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import VenderProfile from './Vender/VenderProfile';
import About from './About';
import Why from './Why';

function App() {
  navigator.geolocation.getCurrentPosition(
    (p) => {
      localStorage.setItem(
        'posList',
        JSON.stringify([p.coords.longitude, p.coords.latitude])
      );
    },
    () => console.log('falied to get current location')
  );

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor" element={<VenderProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/why" element={<Why />} />
      </Routes>
    </>
  );
}

export default App;
