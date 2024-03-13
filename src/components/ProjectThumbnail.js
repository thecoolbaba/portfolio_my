import React from "react";
import './ProjectThumbnail.css';

import portfolioImage from '../img/portfolio_web.jpg';
import auroraImage from '../img/aurora_web.jpg';

function ProjectThumbnail() {
  return (
    <div className="project-thumbnail" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <div className="thumbnail-container">
        <img src={auroraImage} alt="Aurora" className="project-image" />
        <div className="aurora-buttons">
          <button className="github-button"><a href="https://github.com/thecoolbaba/aurora" className="github-link">GitHub</a></button>
          <button className="site-button"><a href="https://aurora-crewing.com/" className="site-link">Visit Site</a></button>
        </div>
      </div>
      
      <div className="thumbnail-container">
        <img src={portfolioImage} alt="Portfolio" className="project-image" />
        <div className="portfolio-buttons">
          <button className="portfolio-github-button"><a href="https://github.com/thecoolbaba/portfolio_my" className="github-link">GitHub</a></button>
        </div>
      </div>

      <div className="white-square-container">
        <div className="white-square">Your website here</div>
        <button className="email-button">Start a project</button>
      </div>
    </div>
  );
}

export default ProjectThumbnail;
