import logo from '../logo.svg';
import '../App.css';
import React, {useEffect, useState} from 'react';
import CarDelete from "./CarDelete";


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
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>
                        Car List
                    </h1>
                    {cars.map((car) => (
                        <table>
                            <tr key={car.id}>
                                <td>{"Car " + car.id || "nicht vorhanden"}</td>
                                <td>{car.CarName || "nicht vorhanden"}</td>
                                <td>{car.MaxSpeed || "nicht vorhanden"}</td>
                                <td>{car.ReleaseDate || "nicht vorhanden"}</td>
                                <td>{car.CarType || "nicht vorhanden"}</td>
                                <td><CarDelete car_id={car.id}></CarDelete></td>
                            </tr>
                        </table>))}
                </header>
            </div>
        );
    }
}
export default Car;