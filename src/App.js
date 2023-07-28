import React from 'react';
import "@fontsource/poppins";
import {Routes, Route } from "react-router-dom";
import Homepage from '../src/Pages/Homepage';
import PageLBI from './Pages/PageLBI';
import PageMD from './Pages/PageMD';
import PagePD from './Pages/PagePD'
import Portfoliopage from './Pages/Portfoliopage';
import PageService from './Pages/PageService';
import AboutPage from './Pages/AboutPage';
import LogoListingPage from './Pages/LogoListingPage';
import ContactPage from './Pages/ContactPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/service-logoandbranding" element={<PageLBI />} />
      <Route path="/service-marketing" element={<PageMD />} />
      <Route path="/service-print" element={<PagePD />} />
      <Route path="/portfolio" element={<Portfoliopage />} />
      <Route path="/service" element={<PageService />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/logolisting" element={<LogoListingPage />} />
      <Route path="/contact" element= {<ContactPage />} />
    </Routes>
  );
}

export default App;