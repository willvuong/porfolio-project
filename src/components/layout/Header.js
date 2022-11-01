import React from 'react'

import Menu from './Menu'

const Header = () => {
  const openMenu = () => {
    document.querySelector(".Menu").classList.toggle('menu-open');
    document.querySelector('body').classList.toggle('stop-scrolling');
  }

  return (
    <header className="Header" id="header">
      
      <nav className="navigation">
        <div className="website-logo-container">
          <a href="/"><img className="website-logo" src="website-logo.png" alt="WV" /></a>
        </div>

        <div className="menu-button">
          <input type="checkbox" className="toggle-menu" onClick={openMenu}></input>
          <div className="hamburger"></div>
        </div>
      </nav>

      <Menu />

    </header>
  )
}

export default Header