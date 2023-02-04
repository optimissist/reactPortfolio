import React, {useState} from 'react';
import Manager from './manager.js';
import Senior from './senior.js';
import Specialist from './specialist.js';
import Coordinator from './coordinator.js';
import './experience.css';


export default function Experience() {
    const [manager, setManager] = useState(false);
    const [senior, setSenior] = useState(false);
    const [specialist, setSpecialist] = useState(false);
    const [coordinator, setCoordinator] = useState(false);
    
    return (
    <div className="experience">
        <p className="companyName"><a href="https://www.teambeachbody.com/" target="_blank" id="tbb">Beachbody</a> — 2018 to present</p>

            <p className="merchManager" onClick={() => setManager(!manager)}>Merchandising Operations Manager • April 2022 to Present</p>
            {manager ? <Manager /> : " "}

            <p className="seniorSpecialist" onClick={() => setSenior(!senior)}>Senior CMS Specialist • July 2021 to April 2022</p>
            {senior ? <Senior /> : " "}

            <p className="operationsSpecialist" onClick={() => setSpecialist(!specialist)}>CMS Operations Specialist • August 2019 to July 2021</p>
            {specialist ? <Specialist /> : " "}

            <p className="coordinator" onClick={() => setCoordinator(!coordinator)}>CMS Web Content Coordinator • December 2018 to August 2019</p>
            {coordinator ? <Coordinator /> : " "}

    </div>
    )
}