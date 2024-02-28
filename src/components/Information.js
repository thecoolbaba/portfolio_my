import React from "react";
import './Information.css';

import htmlIcon from '../img/html.png';
import cssIcon from '../img/css.png';
import jsIcon from '../img/js.png';
import tsIcon from '../img/ts.png';
import reactIcon from '../img/react.png';
import pythonIcon from '../img/python.png';
import vsIcon from '../img/vs.png';
import pcIcon from '../img/pc.png';
import gitIcon from '../img/gh.png';
import psIcon from '../img/ps.png';

function Information() {
    return (
        <div className="information" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <div className="icons-container">
                <h3 className="skills-title">My Skills</h3>
                <div className="icons">
                    <img src={htmlIcon} alt="HTML" className="icon" />
                    <img src={cssIcon} alt="CSS" className="icon" />
                    <img src={jsIcon} alt="JavaScript" className="icon" />
                    <img src={tsIcon} alt="TypeScript" className="icon" />
                    <img src={reactIcon} alt="React" className="icon" />
                </div>
                <div className="icons">
                    <img src={pythonIcon} alt="Python" className="icon" />
                    <img src={vsIcon} alt="Visual Studio Code" className="icon" />
                    <img src={pcIcon} alt="PyCharm" className="icon" />
                    <img src={gitIcon} alt="GitHub" className="icon" />
                    <img src={psIcon} alt="Photoshop" className="icon" />
                </div>
            </div>
            <div className="information-text">
                <h3 className="about-title">About</h3>
                <p className="about-text">I am a junior web developer, inspired by the world of code and technology. My strengths include problem-solving abilities, organizational skills, and attention to detail. In my professional endeavors, I am a loyal team member for whom continuous learning is an indispensable part of success. Alongside frontend development, I am actively studying Python. Excellent communication and a commitment to improvement are my key qualities.</p>
            </div>
        </div>
    );
}

export default Information;
