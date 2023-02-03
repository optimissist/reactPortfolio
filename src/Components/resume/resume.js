import React from 'react';
import './resume.css';
import Skills from './skills.js'
import Experience from './experience/experience.js'
import Education from './education.js'

export default function Resume() {
    return (
        <div className="resume">
            <Experience />
            <Skills />
            <Education />
        </div>
    )
    }