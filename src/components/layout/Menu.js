import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  const toggleMenu = () => {
    document.querySelector(".toggle-menu").checked = false;
    document.querySelector(".Menu").classList.toggle('menu-open');
    document.querySelector('body').classList.toggle('stop-scrolling');
  }

  return (
    <nav className="Menu">
      <div className="menu-section">
        <div className="menu-socials">
          <a href="https://www.linkedin.com/in/willlvuong">LinkedIn</a>
          <a href="https://github.com/willvuong">GitHub</a>
        </div>

        <div className="menu-contact">
          <a href="tel:647-708-5527"><i class="fa-solid fa-phone"></i> +1 (647)-708-5527</a>
          <a href="mailto:willvuong@hotmail.com"><i class="fa-solid fa-envelope"></i> willvuong@hotmail.com</a>
        </div>
      </div>

      <ul className="menu-links">
        <li><Link to="/resume" onClick={toggleMenu}>Resume</Link></li>
        <a href="#contact" onClick={toggleMenu}><li id="contact-button">Contact</li></a>
      </ul>
    </nav>
  )
}

export default Menu