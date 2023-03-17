import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import TaskDelete from "../../Task/TaskDelete";
import {Button} from "@mui/material";

describe('TaskDelete', () => {
    it('calls handleDelete when delete button is clicked', async () => {
        global.fetch = jest.fn(() => Promise.resolve({json: () => ({success: true})}));
        render(<TaskDelete task_id={"1"}/>);

        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);

        await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/task?id=1', {
            method: 'DELETE',
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }));
    });
});