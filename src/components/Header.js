import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header>
    <h1>Maths_Magician</h1>
    <nav>
      <ul>
        <li>
          <Link to="/" className="links">Home</Link>
        </li>
        |
        <li>
          <Link to="/calculate" className="links">Calculator</Link>
        </li>
        |
        <li>
          <Link to="/quote" className="links">Quotes</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
