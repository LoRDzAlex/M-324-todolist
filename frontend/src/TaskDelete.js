import * as React from 'react';


export const TaskDelete = ({taskdescription}) => {

    function handleDelete(taskdescription) {
        fetch(`http://localhost:8080/task?id=${taskdescription}`, {
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
        <div>
            <button onClick={() => {handleDelete(taskdescription); window.location.reload()}} autoFocus> Done </button>
        </div>
    );
}
export default TaskDelete;