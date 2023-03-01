import React, { useState, useEffect } from "react";
import { fetchData } from "./utils/api.js";


export default function StarWarsVehicles() {
    const [vehicleList, setVehicleList] = useState([]);
    // const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [vehicleDetails, setVehicleDetails] = useState(null);

    useEffect(() => {
        const getStarVehicles = async () => {
            const response = await fetchData();
            setVehicleList(response[2].results);
        };
        getStarVehicles();
    }, []);
    
    // useEffect(() => {
    //     fetchData("https://swapi.dev/api/vehicles/").then((data) =>
    //         setVehicleList(data.results)
    //     );
    // }, []);

    // useEffect(() => {
    //     if (selectedVehicle) {
    //         fetchData(selectedVehicle.pilots)
    //             .then((pilot) => setVehicleDetails({ ...selectedVehicle, pilot }))
    //     }
    // }, [selectedVehicle]);

    function handleVehicleChange(event) {
        const id = event.target.value;
        const vehicle = vehicleList.find((c) => c.url.endsWith(`/${id}/`));
        setVehicleDetails(vehicle);
    }

    return (
        <div>
            <select
                className="form-control"
                id="vehicle-list"
                onChange={handleVehicleChange}
            >
                <option value="">Select a Vehicle</option>
                {vehicleList.map((vehicle) => (
                    <option key={vehicle.url} value={vehicle.url.split("/").slice(-2, -1)}>
                        {vehicle.name}
                    </option>
                ))}
            </select>
            <div id="vehicle-details">
                {vehicleDetails && (
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Name:</b> {vehicleDetails.name}
                        </li>
                        <li className="list-group-item">
                            <b>Model:</b> {vehicleDetails.model}
                        </li>
                        <li className="list-group-item">
                            <b>Vehicle Class:</b> {vehicleDetails.vehicle_class}
                        </li>
                        <li className="list-group-item">
                            <b>Crew:</b> {vehicleDetails.crew}
                        </li>
                        <li className="list-group-item">
                            <b>Cargo Capacity:</b> {vehicleDetails.cargo_capacity}
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}