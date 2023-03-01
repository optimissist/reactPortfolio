import React from "react";
import StarWarsPeople from './components/people.js';
import StarWarsStarships from './components/starships.js';
import StarWarsVehicles from './components/vehicles.js';
import "./starwars.css";

export default function StarWars() {

    return (
        <div className="starWars">
            <div className="starWarsContainer">
                <h2>Star Wars Characters</h2>
                <StarWarsPeople/>
            </div>
            <div className="starWarsContainer">
                <h2>Star Wars Starships</h2>
                <StarWarsStarships/>
            </div>
            <div className="starWarsContainer">
                <h2>Star Wars Vehicles</h2>
                <StarWarsVehicles />
            </div>
        </div>
    );
}


