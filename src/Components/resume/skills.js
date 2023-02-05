import React from 'react';
import './skills.css';

export default function Skills() {
    const skills = ["HTML", "CSS3", "JavaScript", "jQuery", "React", "Git", "Redux", "BCC", "WCS", "Endeca", "Contentful", "Wordpress", "Jira"];
    const skillsList = skills.map((skills) =>
        <li key={skills.toString()} className="skills">{skills}</li>
    );

    return (
        <div className="skills">
        <ul className="skillsList">{skillsList}</ul>
        </div>
    )
}