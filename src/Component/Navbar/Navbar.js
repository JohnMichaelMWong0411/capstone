import './Navbar.css';

const Navbar = () => {
  return (
      <div id="Navbar" className="Navbar-container">
            <div class="logo">
                <img src="./logo.png" alt="logo"/>
            </div>
            <ul class="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                <div class="menu">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li class="services"><a href="#Services">Services</a>
                    <ul class="dropdown">
                      <li><a href="/">Logo & Brand Identity</a></li>
                      <li><a href="/">Print Design</a></li>
                      <li><a href="/">Marketing Design</a></li>
                    </ul>
                </li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#Contact">Contact</a></li>
                </div>
              </ul>
      </div>
  );
}
export default Navbar;