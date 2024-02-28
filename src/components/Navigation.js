// eslint-disable-next-line
import React, {useEffect, useState} from 'react';
import './Navigation.css';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
<nav className={`navigate ${menuOpen ? 'open' : ''}`} style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <div className='logo'>
        <h3 className="name">
          <a href="/">Nataliia Boiko</a>
        </h3>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <button className='hire'>
        <a href='mailto:nataliboiko.ua@gmail.com'>Hire me</a>
      </button>
    </nav>
  );
}

export default Navigation;
