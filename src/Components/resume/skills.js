import React, {useId} from 'react';
import { Tooltip } from 'react-tooltip'
import './skills.css';
import 'react-tooltip/dist/react-tooltip.css'

export default function Skills() {
    const skills = ["JavaScript", "React", "Git", "Redux", "jQuery", "HTML", "CSS3", "BCC", "WCS", "Endeca", "Contentful", "Wordpress"];

    const skillsId = useId();

    const skillsList = skills.map((skills) =>
        <li key={skills.toString()} className="skills" id={skillsId + skills}>{skills}</li>
    );

    return (
        <div className="skills">
        <ul className="skillsList">{skillsList}</ul>
            <Tooltip
                anchorId=":r1:HTML"
                place="bottom"
                content="HTML - 10 years"
            />
            <Tooltip
                anchorId=":r1:CSS3"
                place="bottom"
                content="CSS3 - 10 years"
            />
            <Tooltip
                anchorId=":r1:JavaScript"
                place="bottom"
                content="JavaScript - 2 years"
            />
            <Tooltip
                anchorId=":r1:jQuery"
                place="bottom"
                content="jQuery - 8 years"
            />
            <Tooltip
                anchorId=":r1:React"
                place="bottom"
                content="React - 1 year"
            />
            <Tooltip
                anchorId=":r1:Git"
                place="bottom"
                content="Git - 1 year"
            />
            <Tooltip
                anchorId=":r1:Redux"
                place="bottom"
                content="Redux - 1 year"
            />
            <Tooltip
                anchorId=":r1:BCC"
                place="bottom"
                content="BCC - 4 years"
            />
            <Tooltip
                anchorId=":r1:WCS"
                place="bottom"
                content="WCS - 4 years"
            />
            <Tooltip
                anchorId=":r1:Endeca"
                place="bottom"
                content="Endeca - 4 years"
            />
            <Tooltip
                anchorId=":r1:Contentful"
                place="bottom"
                content="Contentful - 2 years"
            />
            <Tooltip
                anchorId=":r1:Wordpress"
                place="bottom"
                content="Wordpress - 5 years"
            />
        </div>
    )
}