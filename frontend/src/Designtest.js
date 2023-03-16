import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {Checkbox, TableCell, TableHead, TableRow} from "@mui/material";


export const Designtest = () => {
    const [] = useState(null)

    function getInputValue(){
        let value = document.getElementById("inputId").value;
        handleCreate(value);
    }

    function handleCreate(value) {
        fetch(`http://localhost:8080/tasks?taskdescription=${value}`, {
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
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    ToDo Liste
                </h1>
                </header>
            <body className={'App-body'}>
            <table>
                <tr>
                    <td>Task 1</td>
                    <td>Test Test</td>
                    <td><button>Finito</button></td>
                </tr>
            </table>
            <input type={"text"} id={"inputId"}/>
            <button type="button" onClick={getInputValue}>Press</button>
            </body>
        </div>
    );
}
export default Designtest