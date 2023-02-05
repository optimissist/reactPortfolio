import React, {useState} from 'react';
import PortfolioItem1 from './portfolioItems/portfolioItem1.js';
import PortfolioItem2 from './portfolioItems/portfolioItem2.js';
import PortfolioItem3 from './portfolioItems/portfolioItem3.js';
import PortfolioItem4 from './portfolioItems/portfolioItem4.js';
import './portfolio.css';

export default function PortfolioContainer() {
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);
    const [item3, setItem3] = useState(false);
    const [item4, setItem4] = useState(false);


    return (
        <div className="portfolioContainer">
            <button class="portfolioButton"></button>
            <PortfolioItem1 />
            <PortfolioItem2 />
            <PortfolioItem3 />
            <PortfolioItem4 />
        </div>
    // <div class="projectlist">
    //     <button href="#" class="active list list1" id="list1" type="button" onclick="show('project1')"> Shop Page Redesign </button>
    //     <PortfolioItem1/>
    //     <button href="#" class="list list3" id="list3" type="button" onclick="show('project3')"> Shakeology Recipes</button>
    //     <button href="#" class="list list2" id="list2" type="button" onclick="show('project2')"> 645 Commitment </button>
    //     <button href="#" class="list list4" id="list4" type="button" onclick="show('project4')">Total Solution Pack Pop Up</button>
    // </div>

)
}