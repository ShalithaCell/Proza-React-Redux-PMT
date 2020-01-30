import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla molestias maxime eveniet illum aspernatur ipsum quidem tempora, saepe, magni maiores eaque numquam repellat porro consequuntur doloribus facere animi cum impedit.</p>
            </div>
            <div className="cart-action grey lighten-4 grey-text">
                <div>Posted by the Shalitha</div>
                <div>29th January, 3.34pm</div>
            </div>
        </div>
    )
}

export default ProjectDetails
