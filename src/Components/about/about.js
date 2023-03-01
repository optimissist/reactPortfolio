import React, {useState, useEffect} from 'react';
import GamePlay from './game/gamePlay/gamePlay.js';
import StarWars from './StarWars/starwars.js';
import './about.css';

export default function Home() {
    const [active, setActive] = useState(false);
    const homeItems = [
        { id: "1", component: <GamePlay />, title: "Rock, Paper, Scissors, Lizard, Spock" }, 
        { id: "2", component: <StarWars />, title: "Search the Star Wars Universe" },
    ]

    const homeIds = homeItems.map((item) => item.id);
    console.log(homeIds);

    useEffect(() => {
        if (active) {
            document.getElementById("homeButton").classList.add("active");
        } else {
            document.getElementById("homeButton").classList.remove("active");
        }
    }, [active]);

    const [component, setComponent] = useState();

    // const toggleClass = (item) => {
    //     setActive(!active)
    // }

    return (
        <div className="homeContainer">
            <div className="homeButtonContainer">
                <ul className="homeButtonUL">
                    {
                        homeItems.map((item, i) => {
                            return (
                                <li key={i} onClick={() => { setComponent(item.component) }} className={`homeButton ${setActive ? "" : "active"}`} id="homeButton">
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