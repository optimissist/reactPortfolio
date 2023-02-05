import React, {useState} from 'react';
import './resume.css';
import Skills from './skills.js'
import Experience from './experience/experience.js'
import Education from './education.js'
import { GoChevronDown } from "react-icons/go";

export default function Resume() {
    const [experience, setExperience] = useState(false);
    const [skills, setSkills] = useState(false);
    const [education, setEducation] = useState(false);


    return (
        <div className="resume">
            <p className="resumeTitle">Resume</p>
            <p className="experienceTitle" onClick={() => setExperience(!experience)}><GoChevronDown className={`downChevron ${experience && 'upChevron'}`} />Experience</p>
                {experience ?  <Experience /> : ""}
            <p className="skillsTitle" onClick={() => setSkills(!skills)}><GoChevronDown className={`downChevron ${skills && 'upChevron'}`} />Skills</p>
                {skills ? <Skills /> : ""}
            <p className="educationTitle" onClick={() => setEducation(!education)}><GoChevronDown className={`downChevron ${education && 'upChevron'}`} />Education</p>
            {education ? <Education /> : ""}
        </div>
    )
    }