import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Portfolio from './Component/Portfolio/Portfolio';
import Service from './Component/Service/Service';
import ServicePage from './Component/ServicePage/ServicePage';

function App() {
  return (
      <div>
          <Navbar />
          <Home/>
          <About />
          <Service/>
          <ServicePage />
          <Portfolio />
          <Contact />
      </div>
  );
}

export default App;

