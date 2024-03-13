import React from "react";
import './Projects.css';
import ProjectThumbnail from "./ProjectThumbnail";

function Projects() {
    return(
        <div className="projects">
            <h3 className="projects-title">My Projects</h3>   
            <div className="project-links">
             <ProjectThumbnail/>   
                </div>         
        </div>
    )
}


export default Projects;