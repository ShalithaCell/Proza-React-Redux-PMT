 import React from 'react'

 const ProjectSummery = (project) => {
     return (
        <div className="card z-depth-0 project-summery">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.project.title}</span>
                <p>Posted by Shalitha</p>
                <p className="grey-text">29th January, 3pm</p>
            </div>
        </div>
     )
 }

 export default ProjectSummery