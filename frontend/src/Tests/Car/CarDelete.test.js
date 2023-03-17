import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react';
import CarDelete from "../../Car/CarDelete";
import {Button} from "@mui/material";

describe('CarDelete', () => {
    it('calls handleDelete when delete button is clicked', async () => {
        global.fetch = jest.fn(() => Promise.resolve({json: () => ({success: true})}));
        const {getByText} = render(<CarDelete car_id={"1"}/>);

        const deleteButton = getByText('Delete');
        fireEvent.click(deleteButton);

        await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/car?id=1', {
            method: 'DELETE',
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }));
    });
});