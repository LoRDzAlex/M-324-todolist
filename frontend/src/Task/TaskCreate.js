import * as React from 'react';

export const TaskCreate = ({taskdescription}) => {

    function handleCreate(taskdescription){
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
}