import Navbar from '../Component/Navbar/Navbar';
import Home from '../Component/Home/Home';
import About from '../Component/About/About';
import Service from '../Component/Service/Service';
import Portfolio from '../Component/Portfolio/Portfolio';
import Contact from '../Component/Contact/Contact';

function Homepage() {
  return (
      <div>
          <Navbar />
          <Home />
          <About />
          <Service/>
          <Portfolio />
          <Contact />
      </div>
  );
}
export default Homepage;