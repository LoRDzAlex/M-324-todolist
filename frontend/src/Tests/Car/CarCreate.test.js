import {render, fireEvent, screen} from '@testing-library/react';
import CarCreate from "../../Car/CarCreate";
import {Button, TextField} from "@mui/material";

describe('CarCreate', () => {
    it('renders all input fields correctly', () => {
        render(<CarCreate/>);
        expect(screen.getByLabelText(/Enter Car Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Enter MaxSpeed/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/ReleaseDate/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Enter Car Type/i)).toBeInTheDocument();
    });

    it('submits the correct data to the server when Create button is clicked', () => {
        global.fetch = jest.fn(() => Promise.resolve({json: () => ({success: true})}));
        render(<CarCreate/>);
        const createButton = screen.getByRole('button', {name: 'Create'});
        fireEvent.change(screen.getByLabelText(/Enter Car Name/i), {target: {value: 'Test Car'}});
        fireEvent.change(screen.getByLabelText(/Enter MaxSpeed/i), {target: {value: 200}});
        fireEvent.change(screen.getByLabelText(/ReleaseDate/i), {target: {value: '2022-03-17'}});
        fireEvent.change(screen.getByLabelText(/Enter Car Type/i), {target: {value: 'Sedan'}});
        fireEvent.click(createButton);
        expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/car?carName=Test Car&maxSpeed=200&releaseDate=2022-03-17&carType=Sedan', {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
    });
});