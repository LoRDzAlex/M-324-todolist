import React from 'react';
import {render, waitFor, screen} from '@testing-library/react';
import Task from '../../Task/Task';

describe('Task Component', () => {
    test('renders Task ToDo heading', async () => {
        render(<Task/>);
        const heading = await screen.findByText(/ToDo List/i);
        expect(heading).toBeInTheDocument();
    });

    test('displays loading message initially', async () => {
        render(<Task/>);
        const loadingMessage = await screen.findByText(/Loading.../i);
        expect(loadingMessage).toBeInTheDocument();
    });

    test('displays error message on error', async () => {
        const errorMessage = 'Failed to fetch cars';
        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.reject(new Error(errorMessage))
        );

        render(<Task/>);
        const errorMessageElement = await screen.findByText(
            new RegExp(`Error: ${errorMessage}`, 'i')
        );

        expect(errorMessageElement).toBeInTheDocument();
    });

    test('displays tasks when loaded successfully', async () => {
        const cars = [
            {
                id: 1,
                taskdescription: 'test1'
            },
            {
                id: 2,
                taskdescription: 'test2'
            },
        ];
        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(cars),
            })
        );

        render(<Task/>);
        await waitFor(() => expect(screen.getByText(/Task 1/i)).toBeInTheDocument());
        expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
    });
});