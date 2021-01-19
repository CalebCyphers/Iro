import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
  <nav className="nav-bar">
    <NavLink to="/" className="nav-button">Home</NavLink>
    <NavLink to="/myquotes" className="nav-button">My Quotes</NavLink>
  </nav> );
}

export default NavBar;