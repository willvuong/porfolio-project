import React from 'react'

import Intro from '../Intro'
import About from '../About'
import Projects from '../Projects'

const Home = ({ projectsData }) => {
  return (
    <div className="Home">
      <Intro />
      <About />
      <Projects projectsData={projectsData} />
    </div>
  )
}

export default Home