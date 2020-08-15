import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FuelCost from '../../Components/FuelCost/FuelCost';

afterEach(cleanup);

const testTogglingFor = async (name) => {
	const { getByTestId, queryByTestId, queryAllByTestId } = render(<FuelCost />);
	const overlay = getByTestId('overlay');
	// Check initial state
	expect(overlay).toHaveStyle('pointer-events: none');
	expect(queryByTestId(`${name}-full`)).not.toBeInTheDocument();
	// Expand
	fireEvent.click(getByTestId(`${name}-expand`));
	expect(overlay).toHaveStyle('pointer-events: auto');
	expect(queryAllByTestId(`${name}-full`)).toHaveLength(2);
	expect(queryAllByTestId(`${name}-small`)).toHaveLength(1);
	// Wait for react morph animation to end
	await waitFor(() => {
		expect(queryAllByTestId(`${name}-full`)).toHaveLength(1);
	})
	// Close via close button
	fireEvent.click(getByTestId(`${name}-close`));
	expect(overlay).toHaveStyle('pointer-events: none');
	expect(queryAllByTestId(`${name}-full`)).toHaveLength(1);
	expect(queryAllByTestId(`${name}-small`)).toHaveLength(2);
	// Wait for react morph animation to end
	await waitFor(() => {
		expect(queryAllByTestId(`${name}-small`)).toHaveLength(1);
	})
	// Expand
	fireEvent.click(getByTestId(`${name}-expand`));
	expect(overlay).toHaveStyle('pointer-events: auto');
	expect(queryAllByTestId(`${name}-full`)).toHaveLength(2);
	expect(queryAllByTestId(`${name}-small`)).toHaveLength(1);
	await waitFor(() => {
		expect(queryAllByTestId(`${name}-full`)).toHaveLength(1);
	})
	// Close via overlay click
	fireEvent.click(overlay);
	expect(overlay).toHaveStyle('pointer-events: none');
	expect(queryAllByTestId(`${name}-full`)).toHaveLength(1);
	expect(queryAllByTestId(`${name}-small`)).toHaveLength(2);
	await waitFor(() => {
		expect(queryAllByTestId(`${name}-small`)).toHaveLength(1);
	});
};

it('matches snapshot', () => {
	const { container } = render(<FuelCost />);
	expect(container.firstChild).toMatchSnapshot();
});

it('expands and closes vehicleinfo correctly', () => {
	return testTogglingFor('vehicleinfo')
});

it('expands and closes routeselector correctly', () => {
	return testTogglingFor('routeselector')
});

it('expands and closes passengersselector correctly', () => {
	return testTogglingFor('passengersselector')
});