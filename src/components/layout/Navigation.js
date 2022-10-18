import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const toggleMenu = () => {
    document.querySelector(".toggle-menu").checked = false; 
  }

  return (
    <nav className="Navigation">
      <input type="checkbox" className="toggle-menu"></input>
      <div className="hamburger"></div>

      <ul className="navigation-list">
        {/* <li><a href="/#about">About</a></li>
        <li><a href="/#projects">Projects</a></li> */}
        <li><Link to="/resume" onClick={toggleMenu}>Resume</Link></li>
        <a href="#contact" onClick={toggleMenu}><li id="contact-button">Contact</li></a>
      </ul>
    </nav>
  )
}

export default Navigation