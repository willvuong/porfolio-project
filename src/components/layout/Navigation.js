import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul className="navigation-list">
        <li><a href="/#about">About</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><Link to="/resume">Resume</Link></li>
        <a href="#contact"><li id="contact-button">Contact</li></a>
      </ul>
    </nav>
  )
}

export default Navigation