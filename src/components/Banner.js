import React from "react";
import './Banner.css';

// eslint-disable-next-line no-unused-vars
import girlImage from '../img/girl.png';
import linkedinIcon from '../img/linkedin_2.png';
import githubIcon from '../img/github_1.png';

function Banner() {
    return (
        <div className="banner">
            <img src={girlImage} alt="girl_img" className="girl-img" />
            <div className="banner-text" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                <h3 className="greeting">Hello and Welcome!</h3>
                <div className="introduce">
                    <p>I’m a Web</p>
                    <p>Developer based in</p>
                    <p><span className="portugal">Portugal</span></p>
                </div>
                <p className="text_special">Let's make something special! </p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/natasha-boiko-696555268/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="Linkedin" />
                    </a>
                    <a href="https://github.com/thecoolbaba" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="Github" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Banner;
