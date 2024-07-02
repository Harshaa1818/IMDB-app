
import { NavLink } from 'react-router-dom';
import './style.css'

const Navbar = () => {
  return (
  <div className="Navbar-container">
    <div className="left-Nav">
        <h1>IMDB APP</h1>
    </div>
    <div className="right-Nav">
        <ul>
           <NavLink to="/" ><li>Home</li></NavLink>
           <NavLink to="/about" ><li>About</li></NavLink>
           <NavLink to="/contact" > <li>Contact</li></NavLink>
           <NavLink to="/Signin" ><li>SignIn</li></NavLink>
           <NavLink to="/moneymul" ><li>Moneymul</li></NavLink>
        </ul>
    </div>

  </div>
  )
};
export default Navbar;
