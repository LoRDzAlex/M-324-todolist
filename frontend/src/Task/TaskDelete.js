import * as React from 'react';


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
            <button onClick={() => {handleDelete(task_id); window.location.reload()}} autoFocus> Done </button>
        </div>
    );
}
export default TaskDelete;