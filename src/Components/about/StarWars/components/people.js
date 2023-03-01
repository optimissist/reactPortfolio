import React, { useState, useEffect } from "react";
import { fetchData } from "./utils/api.js"; 


export default function StarWarsPeople() {
    const [characterList, setCharacterList] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [characterDetails, setCharacterDetails] = useState(null);

    useEffect(() => {
        const getStarPeople = async () => {
            const response = await fetchData();
            setCharacterList(response[0].results);
        };
        getStarPeople();
    }, []);


    useEffect(() => {
        if (selectedCharacter) {
            const getPlanetData = async () => {
                const planetResponse = await fetch(selectedCharacter.homeworld);
                const planetData = await planetResponse.json();
                setCharacterDetails({
                    ...selectedCharacter,
                    planet: planetData
                });
            };
            getPlanetData();
        }
    }, [selectedCharacter]);


    // useEffect(() => {
    //     fetchData("https://swapi.dev/api/people/").then((data) =>
    //         setCharacterList(data.results)
    //     );
    // }, []);

    // useEffect(() => {
    //     if (selectedCharacter) {
    //         fetchData(selectedCharacter.homeworld).then((planet) =>
    //             setCharacterDetails({ ...selectedCharacter, planet })
    //         );
    //     }
    // }, [selectedCharacter]);

    function handleCharacterChange(event) {
        const id = event.target.value;
        const character = characterList.find((a) => a.url.endsWith(`/${id}/`));
        setSelectedCharacter(character);
    }

    return (
        <div>
            <select
                className="form-control"
                id="character-list"
                onChange={handleCharacterChange}
            >
                <option value="">Select a character</option>
                {characterList.map((character) => (
                    <option key={character.url} value={character.url.split("/").slice(-2, -1)}>
                        {character.name}
                    </option>
                ))}
            </select>
            <div id="character-details">
                {characterDetails && (
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Name:</b> {characterDetails.name}
                        </li>
                        <li className="list-group-item">
                            <b>Birth Year:</b> {characterDetails.birth_year}
                        </li>
                        <li className="list-group-item">
                            <b>Height:</b> {characterDetails.height} cm
                        </li>
                        <li className="list-group-item">
                            <b>Mass:</b> {characterDetails.mass} kg
                        </li>
                        <li className="list-group-item">
                            <b>Hair Color:</b> {characterDetails.hair_color}
                        </li>
                        <li className="list-group-item">
                            <b>Skin Color:</b> {characterDetails.skin_color}
                        </li>
                        <li className="list-group-item">
                            <b>Eye Color:</b> {characterDetails.eye_color}
                        </li>
                        <li className="list-group-item">
                            <b>Gender:</b> {characterDetails.gender}
                        </li>
                        <li className="list-group-item">
                            <b>Homeworld:</b> {characterDetails.planet.name} (Population:{" "}
                            {characterDetails.planet.population})
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}