import React, { useState } from 'react';
import VehicleInfo from './VehicleInfo';
import RouteSelector from './RouteSelector';
import styled from "styled-components";

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${props => props.isActive ? 'rgba(255, 255, 255, 0.4)' : 'transparent'};
	pointer-events: ${props => props.isActive ? 'auto' : 'none'};
	transition: background-color 0.25s ease-in-out;
`;

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
			<Overlay isActive={expanded !== null} onClick={expanded !== null ? updateExpanded.bind(null, null) : null} />
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