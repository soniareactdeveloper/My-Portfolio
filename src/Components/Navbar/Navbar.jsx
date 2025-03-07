import { NavLink } from "react-router";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="./images/navLogo.png" alt="Logo" className="logo-img" />
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <NavLink exact to="/" className="nav-item" activeClassName="active-link">Home</NavLink>
        <NavLink to="/about" className="nav-item" activeClassName="active-link">About</NavLink>
        <NavLink to="/blog" className="nav-item" activeClassName="active-link">Blog</NavLink>
        <NavLink to="/projects" className="nav-item" activeClassName="active-link">Projects</NavLink>
        <NavLink to="/services" className="nav-item" activeClassName="active-link">Services</NavLink>
        <NavLink to="/contact" className="nav-item" activeClassName="active-link">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
