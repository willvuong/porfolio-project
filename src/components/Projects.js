import React from 'react'

import Project from './Project'

const Projects = ({ projectsData }) => {
  return (
    <section className="Projects" id="projects">
      <div className="content-section">
        <div className="content-section-heading-container">
          <h2 className="content-section-heading">projects</h2>
        </div>

        <div className="projects-container">
          {projectsData.length > 0 && projectsData.map((data) => (
            <Project key={data.id} projectsData={data} />
          ))}
        </div>
      </div>

    </section>
  )
}

export default Projects