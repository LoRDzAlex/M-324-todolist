import logo from '../logo.svg';
import '../App.css';
import React, {useEffect, useState} from 'react';
import TaskDelete from "./TaskDelete";
import Appbar from "../Appbar";
import TaskCreate from "./TaskCreate";


export const Task = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(null);
    const [tasks, setTask] = useState(null);


    useEffect(() => {
        fetch("http://localhost:8080/task/", {
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
            <>
                <Appbar/>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1>
                            ToDo Liste
                        </h1>
                    </header>
                    <body className={"App-body"}>
                    <table className="Table">
                        <thead className="Table-header">
                        <tr>
                            <th>Task Number</th>
                            <th>Task Description</th>
                        </tr>
                        </thead>
                        {tasks.map((task) => (
                            <tbody className="Table-body">
                            <tr key={task.id}>
                                <td>{"Task " + task.id || "nicht vorhanden"}</td>
                                <td>{task.taskdescription || "nicht vorhanden"}</td>
                                <td><TaskDelete task_id={task.id}></TaskDelete></td>
                            </tr>
                            </tbody>))}
                    </table>
                    <TaskCreate></TaskCreate>
                    </body>
                </div>
            </>
        );
    }
}
export default Task;
