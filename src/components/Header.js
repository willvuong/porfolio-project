import React from 'react'

import Navigation from './Navigation'

const Header = () => {
  return (
    <header className="Header" id="header">
      <div className="website-logo-container">
        <img className="website-logo" src="website-logo.png" alt="WV" />
      </div>
      <Navigation />
    </header>
  )
}

export default Header