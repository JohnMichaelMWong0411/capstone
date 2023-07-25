import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Service from './Components/Service/Service';

function App() {
  return (
      <div>
          <Navbar />
          <Home/>
          <About />
          <Service/>
          <Portfolio />
          <Contact />
      </div>
  );
}

export default App;

