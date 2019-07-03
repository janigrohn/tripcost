import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import App from '../components/App';

afterEach(cleanup);

it('renders app without crashing', () => {
	const { getByTestId } = render(<App />);
	expect(getByTestId('app-container')).toBeInTheDocument();
});

