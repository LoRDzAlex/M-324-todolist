import React from 'react';
import {render, waitFor, screen} from '@testing-library/react';
import Car from '../../Car/Car';

describe('Car Component', () => {
    test('renders Car List heading', async () => {
        render(<Car/>);
        const heading = await screen.findByText(/Car List/i);
        expect(heading).toBeInTheDocument();
    });

    test('displays loading message initially', async () => {
        render(<Car/>);
        const loadingMessage = await screen.findByText(/Loading.../i);
        expect(loadingMessage).toBeInTheDocument();
    });

    test('displays error message on error', async () => {
        const errorMessage = 'Failed to fetch cars';
        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.reject(new Error(errorMessage))
        );

        render(<Car/>);
        const errorMessageElement = await screen.findByText(
            new RegExp(`Error: ${errorMessage}`, 'i')
        );

        expect(errorMessageElement).toBeInTheDocument();
    });

    test('displays cars when loaded successfully', async () => {
        const cars = [
            {
                id: 1,
                carName: 'Car A',
                maxSpeed: 120,
                releaseDate: '2021-01-01',
                carType: 'Sedan',
            },
            {
                id: 2,
                carName: 'Car B',
                maxSpeed: 150,
                releaseDate: '2021-02-01',
                carType: 'SUV',
            },
        ];
        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(cars),
            })
        );

        render(<Car/>);
        await waitFor(() => expect(screen.getByText(/Car A/i)).toBeInTheDocument());
        expect(screen.getByText(/Car B/i)).toBeInTheDocument();
    });
});