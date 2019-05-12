import React, { useState } from 'react';
import VehicleInfo from './VehicleInfo';
import RouteSelector from './RouteSelector';
import styled from "styled-components";

const Placeholder = styled.div`
	display: ${props => props.inUse ? 'block' : 'none'};
	height: 120px;
	margin: 0.5rem 0;
`;

const TripCost = () => {
	const [expanded, setExpanded] = useState(null);

	const updateExpanded = (target) => {
		const newExpanded = expanded === target ? null : target;
		setExpanded(newExpanded);
	};

	return (
		<>
			<Placeholder inUse={expanded === 'vehicleInfo'} />
			<VehicleInfo
				toggleExpanded={updateExpanded.bind(null, 'vehicleInfo')}
				isExpanded={expanded === 'vehicleInfo'}
			/>
			<RouteSelector
				toggleExpanded={updateExpanded.bind(null, 'routeSelector')}
				isExpanded={expanded === 'routeSelector'}
			/>
		</>
	);
};

export default TripCost;