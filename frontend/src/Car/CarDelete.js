import * as React from 'react';


export const CarDelete = ({car_id}) => {

    function handleDelete(id) {
        fetch(`http://localhost:8080/car?id=${car_id}`, {
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
            <button onClick={() => {
                handleDelete(car_id);
                window.location.reload()
            }} autoFocus> Done
            </button>
        </div>
    );
}
export default CarDelete;