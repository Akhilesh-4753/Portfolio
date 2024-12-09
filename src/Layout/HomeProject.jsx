import React from 'react'
import { projectlist } from '../Utils/Projectdata'
import './HomeProject.css'

const HomeProject = () => {
  return (
    <div className='project-main'>
    <h1>Project</h1>
    <div className='project-container'> 
      {projectlist.map((project) => {
        return(
        <div className="project">
          <img src={project.image} alt="" />
          <h4>{project.project}</h4>
          <p>{project.description}</p>
        </div>
        )
    })}
    </div>
    </div>
  )
}

export default HomeProject;