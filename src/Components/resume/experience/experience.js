import React from 'react';
import Manager from './manager.js';
import Senior from './senior.js';
import Specialist from './specialist.js';
import Coordinator from './coordinator.js';
import './experience.css';

export default function Experience() {
    
    return (
    <div className="experience">
        <p className="companyName"><a href="https://www.teambeachbody.com/" target="_blank" rel="noreferrer" id="tbb">Beachbody</a> — 2018 to present</p>

            <p className="merchManager">Merchandising Operations Manager • April 2022 to Present</p>
            <Manager />

            <p className="seniorSpecialist">Senior CMS Specialist • July 2021 to April 2022 </p>
            <Senior />

            <p className="operationsSpecialist">CMS Operations Specialist • August 2019 to July 2021</p>
            <Specialist />

            <p className="coordinator">CMS Web Content Coordinator • December 2018 to August 2019</p>
            <Coordinator />
    </div>
    )
}