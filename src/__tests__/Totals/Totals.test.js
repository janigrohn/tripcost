import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Totals from '../../Components/Totals/Totals';

afterEach(cleanup);

it('matches snapshot with zero totals fi', () => {
	const vehicle = {
		fuelPrice: 0,
		fuelConsumption: 0,
	};
	const route = {
		distance: 0,
	};
	const passengers = 1;

	const { container } = render(<Totals vehicle={vehicle} route={route} passengers={passengers} lang="fi" />);
	expect(container).toMatchSnapshot();
})

it('matches snapshot with zero totals en', () => {
	const vehicle = {
		fuelPrice: 0,
		fuelConsumption: 0,
	};
	const route = {
		distance: 0,
	};
	const passengers = 1;

	const { container } = render(<Totals vehicle={vehicle} route={route} passengers={passengers} lang="en" />);
	expect(container).toMatchSnapshot();
})

it('matches snapshot with calculated values fi', () => {
	const vehicle = {
		fuelPrice: 1.55,
		fuelConsumption: 6.1,
	};
	const route = {
		distance: 440,
	};
	const passengers = 9;

	const { container } = render(<Totals vehicle={vehicle} route={route} passengers={passengers} lang="fi" />);
	expect(container).toMatchSnapshot();
})

it('matches snapshot with calculated values en', () => {
	const vehicle = {
		fuelPrice: 1.55,
		fuelConsumption: 6.1,
	};
	const route = {
		distance: 440,
	};
	const passengers = 9;

	const { container } = render(<Totals vehicle={vehicle} route={route} passengers={passengers} lang="en" />);
	expect(container).toMatchSnapshot();
})