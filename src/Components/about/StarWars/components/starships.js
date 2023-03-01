import React, { useState, useEffect } from "react";
import { fetchData } from "./utils/api.js";

export default function StarWarsStarships() {
    const [starshipList, setStarshipList] = useState([]);
    // const [selectedStarship, setSelectedStarship] = useState(null);
    const [starshipDetails, setStarshipDetails] = useState(null);

    useEffect(() => {
        const getStarships = async () => {
            const response = await fetchData();
            setStarshipList(response[1].results);
        };
        getStarships();
    }, []);


    // useEffect(() => {
    //     fetchData("https://swapi.dev/api/starships/").then((data) => 
    //     setStarshipList(data.results))
    // }, []);
    

// console.log(fetchData());

//     useEffect(() => {
//         if (selectedStarship) {
//             fetchData(selectedStarship.pilots).then((people) => 
//                 setStarshipDetails({ ...selectedStarship, people }))
//         }
//     }, [selectedStarship]);
    
    // console.log(selectedStarship);


    function handleStarshipChange(event) {
        const id = String(event.target.value);
        const starship = starshipList.find((c) => c.url.endsWith(`/${id}/`));
        setStarshipDetails(starship);
    }

    return (
        <div>
            <select
                className="form-control"
                id="starship-list"
                onChange={handleStarshipChange}
            >
                <option value="">Select a starship</option>
                {starshipList.map((starship) => (
                    <option
                        key={starship.url}
                        value={starship.url.split("/").slice(-2, -1)}
                    >
                        {starship.name}
                    </option>
                ))}
            </select>
            <div id="starship-details">
                {starshipDetails && (
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Name:</b> {starshipDetails.name}
                        </li>
                        <li className="list-group-item">
                            <b>Model:</b> {starshipDetails.model}
                        </li>
                        <li className="list-group-item">
                            <b>Class:</b> {starshipDetails.starship_class}
                        </li>
                        <li className="list-group-item">
                            <b>Crew:</b> {starshipDetails.crew}
                        </li>
                        <li className="list-group-item">
                            <b>Hyperdrive Rating:</b> {starshipDetails.hyperdrive_rating}
                        </li>
                        {/* <li className="list-group-item">
                            <b>Pilots:</b> {starshipDetails.pilot.name}
                        </li> */}
                    </ul>
                )}
            </div>
        </div>
    );
}