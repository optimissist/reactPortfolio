import React, {useState} from 'react';
import './resume.css';
import Skills from './skills.js'
import Experience from './experience/experience.js'
import Education from './education.js'

export default function Resume() {
    const [experience, setExperience] = useState(false);
    const [skills, setSkills] = useState(false);
    const [eduation, setEducation] = useState(false);

    return (
        <div className="resume">
            <p className="experienceTitle" onClick={() => setExperience(!experience)}>Experience</p>
                {experience ?  <Experience /> : ""}
            <p className="skillsTitle" onClick={() => setSkills(!skills)} >Skills</p>
                {skills ? <Skills /> : ""}
            <p className="educationTitle" onClick={() => setEducation(!eduation)}>Education</p>
            {eduation ? <Education /> : ""}
        </div>
    )
    }