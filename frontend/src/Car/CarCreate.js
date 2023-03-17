import * as React from 'react';
import {Button, TextField} from "@mui/material";
import {useState} from "react";

export const CarCreate = () => {

    const [carName, setcarName] = useState('');
    const [maxSpeed, setmaxSpeed] = useState('');
    const [releaseDate, setreleaseDate] = useState('');
    const [carType, setcarType] = useState('');

    function handleCreate(carName, maxSpeed, releaseDate, carType) {
        fetch(`http://localhost:8080/car?carName=${carName}&maxSpeed=${maxSpeed}&releaseDate=${releaseDate}&carType=${carType}`, {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => {
            return res.json()
        })
        return console.log("Success")
    }

    return (
        <>
            <div>
                <TextField
                    id="carName"
                    label="Enter Car Name"
                    variant="outlined"
                    error={carName === ""}
                    helperText={carName === "" ? 'please fill in empty field' : ''}
                    onChange={(e) => {
                        setcarName(e.target.value);
                    }}
                    fullWidth
                    margin={"dense"}
                    required
                />
                <TextField
                    id="maxSpeed"
                    label="Enter MaxSpeed"
                    variant="outlined"
                    error={maxSpeed === ""}
                    helperText={maxSpeed === "" ? 'please fill in empty field' : ''}
                    onChange={(e) => {
                        setmaxSpeed(e.target.value);
                    }}
                    fullWidth
                    type={"number"}
                    margin={"dense"}
                    required
                />
                <TextField
                    id="releaseDate"
                    variant="outlined"
                    type="date"
                    label="ReleaseDate"
                    error={releaseDate === ""}
                    helperText={releaseDate === "" ? 'please fill in empty field' : ''}
                    onChange={(e) => {
                        setreleaseDate(e.target.value);
                    }}
                    fullWidth
                    margin={"dense"}
                    required
                />
                <TextField
                    id="carType"
                    label="Enter Car Type"
                    variant="outlined"
                    error={carType === ""}
                    helperText={carType === "" ? 'please fill in empty field' : ''}
                    onChange={(e) => {
                        setcarType(e.target.value);
                    }}
                    fullWidth
                    margin={"dense"}
                    required
                />
                <Button onClick={() => {
                    handleCreate(carName, maxSpeed, releaseDate, carType);
                    window.location.reload();
                }}>Create</Button>
            </div>
        </>
    );
}
export default CarCreate