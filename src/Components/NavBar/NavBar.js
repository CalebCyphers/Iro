import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
  <nav>
    <NavLink to="/" className="nav-button">Home</NavLink>
    <NavLink to="/myquotes" className="nav-button">My Quotes</NavLink>
  </nav> );
}

export default NavBar;