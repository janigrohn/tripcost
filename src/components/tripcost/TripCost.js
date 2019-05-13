import React, { useState } from 'react';
import VehicleInfo from './VehicleInfo';
import RouteSelector from './RouteSelector';
import PassengersSelector from './PassengersSelector';
import styled from "styled-components";

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${props => props.isActive ? 'rgba(255, 255, 255, 0.45)' : 'transparent'};
	pointer-events: ${props => props.isActive ? 'auto' : 'none'};
	transition: background-color 0.25s ease-in-out;
`;

const Placeholder = styled.div`
	display: ${props => props.inUse ? 'block' : 'none'};
	height: 120px;
	margin: 0.5rem 0;
	border-radius: 0.5rem;
	border: solid 1px rgba(0, 0, 0, 0.1);
`;

const TripCost = () => {
	const [expanded, setExpanded] = useState(null);

	const updateExpanded = (target) => {
		const newExpanded = expanded === target ? null : target;
		setExpanded(newExpanded);
	};

	const onOverlayClick = (e) => {
		if (expanded === null) return;
		updateExpanded(null);
		e.stopPropagation();
	}

	return (
		<>
			<Placeholder inUse={expanded === 'vehicleInfo'} />
			<VehicleInfo
				toggleExpanded={updateExpanded.bind(null, 'vehicleInfo')}
				isExpanded={expanded === 'vehicleInfo'}
			/>
			<Placeholder inUse={expanded === 'routeSelector'} />
			<RouteSelector
				toggleExpanded={updateExpanded.bind(null, 'routeSelector')}
				isExpanded={expanded === 'routeSelector'}
			/>
			<Placeholder inUse={expanded === 'passengersSelector'} />
			<PassengersSelector
				toggleExpanded={updateExpanded.bind(null, 'passengersSelector')}
				isExpanded={expanded === 'passengersSelector'}
			/>
			<Overlay isActive={expanded !== null} onClick={onOverlayClick} />
		</>
	);
};

export default TripCost;