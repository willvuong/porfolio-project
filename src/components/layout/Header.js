import React from 'react'

import Navigation from './Navigation'

const Header = () => {
  return (
    <header className="Header" id="header">
      <div className="website-logo-container">
        <a href="/"><img className="website-logo" src="website-logo.png" alt="WV" /></a>
      </div>
      <Navigation />
    </header>
  )
}

export default Header