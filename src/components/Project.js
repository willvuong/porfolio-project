import React from 'react'

const Project = ({ projectsData }) => {
  return (
    <a className="Project" href={projectsData.link}>
        <img src={projectsData.img} alt="william-vuong-project"></img>
        
        <div className="project-details">
            <h4>{projectsData.name}</h4>
            <p>{projectsData.description}</p>
        </div>
    </a>
  )
}

export default Project