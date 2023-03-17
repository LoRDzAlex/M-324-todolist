import * as React from 'react';
import {Button, TextField} from "@mui/material";
import {useState} from "react";

export const TaskCreate = () => {

    const [taskdescription, setTaskdescription] = useState('');

    function handleCreate(taskdescription) {
        fetch(`http://localhost:8080/task?taskdescription=${taskdescription}`, {
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
                    id="taskdescription"
                    label="Taskdescription"
                    variant="outlined"
                    error={taskdescription === ""}
                    helperText={taskdescription === "" ? 'please fill in empty field' : ''}
                    onChange={(e) => {
                        setTaskdescription(e.target.value);
                    }}
                    fullWidth
                    margin={"dense"}
                    required
                />
                <Button onClick={() => {
                    handleCreate(taskdescription);
                    window.location.reload();
                }}>Create</Button>
            </div>
        </>
    );
}
export default TaskCreate