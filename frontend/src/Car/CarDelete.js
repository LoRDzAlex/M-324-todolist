import * as React from 'react';
import {Button} from "@mui/material";


export const CarDelete = ({car_id}) => {

    function handleDelete(id) {
        fetch(`http://localhost:8080/car?id=${car_id}`, {
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
            <Button onClick={() => {
                handleDelete(car_id);
                window.location.reload()
            }} autoFocus> Delete
            </Button>
        </div>
    );
}
export default CarDelete;