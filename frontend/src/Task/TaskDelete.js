import * as React from 'react';
import {IconButton} from "@mui/material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export const TaskDelete = ({task_id}) => {

    function handleDelete(id) {
        fetch(`http://localhost:8080/task?id=${task_id}`, {
            method: 'DELETE',
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
        <div>
            <IconButton onClick={() => {
                handleDelete(task_id);
                window.location.reload()
            }} autoFocus>
                <TaskAltIcon color="success"/>
            </IconButton>
        </div>
    );
}
export default TaskDelete;