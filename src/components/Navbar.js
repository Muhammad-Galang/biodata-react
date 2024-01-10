import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../assets/css/NavbarStyle.css';

function Navbar() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <animated.div style={props} className="logo">
          Logo
        </animated.div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Me</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;