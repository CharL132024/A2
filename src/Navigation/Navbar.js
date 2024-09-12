import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
  
  <nav className="navbar">
    <div className="navbar-center">
      <ul className="nav-links">
        <li>
          <a href="/Team">Team</a>
        </li>
        <li>
          <a href="/Fixtures">Fixtures</a>
        </li>
        <li>
          <a href="/Membership">Membership</a>
        </li>
        <li>
          <a href="/Tickets">Tickets</a>
        </li>
        <li>
          <a href="/News">News</a>
        </li>
        <li>
          <a href="/Contactus">Contact Us</a>
        </li>
      </ul>
    </div>
  </nav>
  );
  };
export default Navbar;