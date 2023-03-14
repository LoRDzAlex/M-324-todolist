import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import TaskDelete from "./TaskDelete";


export const Apptest = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(null);
    const [tasks, setTask] = useState(null);


    useEffect(() => {
        fetch("http://localhost:8080/tasks", {
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
                    setTask(result);
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
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>
                        ToDo Liste
                    </h1>
                    {tasks.map((task) => (
            <table>
                <tr key={task.id}>
                    <td>{task.taskdescription || "nicht vorhanden"}</td>
                    <td> <TaskDelete taskdescription={task.taskdescription}></TaskDelete></td>
                </tr>
            </table>))}
                </header>
            </div>
        );
    }
}
export default Apptest;
