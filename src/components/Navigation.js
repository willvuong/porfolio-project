import React from 'react'

const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul className="navigation-list">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="https://willvuong.netlify.app/">Resume</a></li>
        <a href="#contact"><li id="contact-button">Contact</li></a>
      </ul>
    </nav>
  )
}

export default Navigation