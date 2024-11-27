import React, { useState, memo } from 'react';
import './navbar.css';
import logo from '../../assets/nav-logo.svg';

const NavLinks = memo(({ className }) => (
  <ul className={className}>
    <li><a href="#accents">Accents</a></li>
    <li><a href="#objects">Objects</a></li>
    <li><a href="#lifestyle">Lifestyle</a></li>
  </ul>
));

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <>
      <nav className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          <span className="material-symbols-outlined">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <NavLinks className="nav-links desktop-menu" />
        <div className="nav-icons">
          <span className="material-symbols-outlined profile_icon">person</span>
          <span className="material-symbols-outlined">local_mall</span>
        </div>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <NavLinks />
      </div>
    </>
  );
};

export default memo(Navbar);
