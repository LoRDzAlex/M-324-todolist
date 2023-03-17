import logo from '../logo.svg';
import '../App.css';
import React, {useEffect, useState} from 'react';
import CarDelete from "./CarDelete";
import Appbar from "../Appbar";
import CarCreate from "./CarCreate";


export const Car = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(null);
    const [cars, setCar] = useState(null);


    useEffect(() => {
        fetch("http://localhost:8080/car", {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCar(result);
                },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <Appbar/>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1>
                            Car List
                        </h1>
                    </header>
                    <body className="App-body">
                    <table className="Table">
                        <thead className="Table-header">
                        <th>Car Name</th>
                        <th>Max Speed</th>
                        <th>ReleaseDate</th>
                        <th>Car Type</th>
                        </thead>
                        {cars.map((car) => (
                            <tbody className="Table-body">
                            <tr key={car.id}>
                                <td>{car.carName || "nicht vorhanden"}</td>
                                <td>{car.maxSpeed || "nicht vorhanden"}</td>
                                <td>{car.releaseDate || "nicht vorhanden"}</td>
                                <td>{car.carType || "nicht vorhanden"}</td>
                                <td><CarDelete car_id={car.id}></CarDelete></td>
                            </tr>
                            </tbody>))}
                    </table>
                    <CarCreate></CarCreate>
                    </body>
                </div>
            </>
        );
    }
}
export default Car;