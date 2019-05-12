import React from 'react';
import { useStateValue } from '../state/state';
import TripCost from './tripcost/TripCost';

const Tabs = () => {
	const [{ activeTab }, dispatch] = useStateValue();

	return (
		activeTab === 'tripcost' && <TripCost />
	)
};

export default Tabs;