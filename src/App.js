// import './App.css';
// import About from './Component/About/About';
// import Contact from './Component/Contact/Contact';
// import Home from './Component/Home/Home';
// import Navbar from './Component/Navbar/Navbar';
// import Portfolio from './Component/Portfolio/Portfolio';
// import Service from './Component/Service/Service';
// import ServicePage from './Component/ServicePage/ServicePage';

// function App() {
//   return (
//       <div>
//           <Navbar />
//           <Home/>
//           <About />
//           <Service/>
//           <ServicePage />
//           <Portfolio />
//           <Contact />
//       </div>
//   );
// }

// export default App;

// import './App.css';

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

    </Routes>
  );
}

export default App;