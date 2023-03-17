import {render, fireEvent, screen} from '@testing-library/react';
import TaskCreate from "../../Task/TaskCreate";
import {Button, TextField} from "@mui/material";

describe('TaskCreate', () => {
    it('renders all input fields correctly', () => {
        render(<TaskCreate/>);
        expect(screen.getByLabelText(/Taskdescription/i)).toBeInTheDocument();
    });

    it('submits the correct data to the server when Create button is clicked', () => {
        global.fetch = jest.fn(() => Promise.resolve({json: () => ({success: true})}));
        render(<TaskCreate/>);
        const createButton = screen.getByRole('button', {name: 'Create'});
        fireEvent.change(screen.getByLabelText(/Taskdescription/i), {target: {value: 'TestTask'}});
        fireEvent.click(createButton);
        expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/task?taskdescription=TestTask', {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
    });
});