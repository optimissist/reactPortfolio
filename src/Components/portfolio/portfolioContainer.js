
import React, { useState, useEffect } from 'react';
import PortfolioItem1 from './portfolioItems/portfolioItem1.js';
import PortfolioItem2 from './portfolioItems/portfolioItem2.js';
import PortfolioItem3 from './portfolioItems/portfolioItem3.js';
import PortfolioItem4 from './portfolioItems/portfolioItem4.js';
import PortfolioItem5 from './portfolioItems/portfolioItem5.js';
import PortfolioItem6 from './portfolioItems/portfolioItem6.js';
import './portfolio.css';

export default function PortfolioContainer() {
    const [active, setActive] = useState(false);


    const portfolioItems = [
        { id: "5", component: <PortfolioItem5 />, title: "Ravenous Yelp App" },
        { id: "6", component: <PortfolioItem6 />, title: "Jamming - Spotify Client" },
        { id: "1", component: <PortfolioItem1 />, title: "Beachbody Shop Page" },
        { id: "2", component: <PortfolioItem2 />, title: "645 Commitment" },
        { id: "3", component: <PortfolioItem3 />, title: "Shakeology Recipe Tiles" },
        { id: "4", component: <PortfolioItem4 />, title: "Preferred Customer Pop Up" }
    ];

    const portfolioIds = portfolioItems.map((item) => item.id);

    console.log(portfolioIds);

    useEffect(() => {
        if (active) {
            document.getElementById("portfolioButton").classList.add("active");
        } else {
            document.getElementById("portfolioButton").classList.remove("active");
        }
    }, [active]);

    const [component, setComponent] = useState(portfolioItems[0].component);

    // const toggleClass = (item) => {
    //     // console.log(item);
    //     // for (let item = 0; item < portfolioItems.length; item++){
    //     setActive(!active)
    //     // }
    // }


    return (
        <div className="portfolioContainer">
            <div className="portfolioButtonContainer">
                <ul>
                    {
                        portfolioItems.map((item, i) => {
                            return (
                                <li key={i} onClick={() => { setComponent(item.component) }} className={`portfolioButton ${setActive ? "" : "active"}`} id="portfolioButton">
                                    {item.title}
                                </li>
                            )
                        }
                        )
                    }
                </ul>
            </div>
            <div>
                {component}
            </div>
        </div>
    )
}