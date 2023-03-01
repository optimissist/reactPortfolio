import React, {useState} from 'react';
import Manager from './manager.js';
import Senior from './senior.js';
import Specialist from './specialist.js';
import Coordinator from './coordinator.js';
import './experience.css';
import { GoArrowDown } from "react-icons/go";

export default function Experience() {
    const [manager, setManager] = useState(false);
    const [senior, setSenior] = useState(false);
    const [specialist, setSpecialist] = useState(false);
    const [coordinator, setCoordinator] = useState(false);
    
    return (
    <div className="experience">
        <p className="companyName"><a href="https://www.teambeachbody.com/" target="_blank" rel="noreferrer" id="tbb">Beachbody</a> — 2018 to present</p>

            <p className="merchManager" onClick={() => setManager(!manager)}>Merchandising Operations Manager • April 2022 to Present <GoArrowDown className={`downArrow ${manager && 'upArrow'}`} /></p>
            {manager ? <Manager /> : " "}

            <p className="seniorSpecialist" onClick={() => setSenior(!senior)}>Senior CMS Specialist • July 2021 to April 2022 <GoArrowDown className={`downArrow ${senior && 'upArrow'}`} /></p>
            {senior ? <Senior /> : " "}

            <p className="operationsSpecialist" onClick={() => setSpecialist(!specialist)}>CMS Operations Specialist • August 2019 to July 2021 <GoArrowDown className={`downArrow ${specialist && 'upArrow'}`} /></p>
            {specialist ? <Specialist /> : " "}

            <p className="coordinator" onClick={() => setCoordinator(!coordinator)}>CMS Web Content Coordinator • December 2018 to August 2019 <GoArrowDown className={`downArrow ${coordinator && 'upArrow'}`} /></p>
            {coordinator ? <Coordinator /> : " "}
    </div>
    )
}