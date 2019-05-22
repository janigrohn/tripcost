import React, { useState } from 'react';
import VehicleInfo from './VehicleInfo';
import RouteSelector from './RouteSelector';
import PassengersSelector from './PassengersSelector';
import Totals from './Totals';
import styled from "styled-components";
import { getPrices, getVehicle, getRoute, getPassengers } from '../../state/state';

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${props => props.isActive ? 'rgba(250, 250, 250, 0.45)' : 'transparent'};
	pointer-events: ${props => props.isActive ? 'auto' : 'none'};
	transition: background-color 0.25s ease-in-out;
`;

const Placeholder = styled.div`
	display: ${props => props.inUse ? 'block' : 'none'};
	height: 120px;
	margin: 0.5rem 0;
	border-radius: 0.5rem;
`;

const TripCost = () => {
	const [expanded, setExpanded] = useState(null);
	const [vehicle, setVehicle] = useState(getVehicle());
	const [route, setRoute] = useState(getRoute());
	const [passengers, setPassengers] = useState(getPassengers());
	const [prices, setPrices] = useState(getPrices());
	const states = { expanded, vehicle, route, passengers, prices };

	const updateExpanded = (target) => {
		const newExpanded = expanded === target ? null : target;
		setExpanded(newExpanded);
		if (expanded === null) return;
		localStorage.setItem(expanded, JSON.stringify(states[expanded]));
	};

	const onOverlayClick = (e) => {
		if (expanded === null) return;
		updateExpanded(null);
		e.stopPropagation();
	}

	return (
		<>
			<div>
				<Placeholder inUse={expanded === 'vehicle'} />
				<VehicleInfo
					toggleExpanded={updateExpanded.bind(null, 'vehicle')}
					isExpanded={expanded === 'vehicle'}
					vehicle={vehicle}
					setVehicle={setVehicle}
				/>
				<Placeholder inUse={expanded === 'route'} />
				<RouteSelector
					toggleExpanded={updateExpanded.bind(null, 'route')}
					isExpanded={expanded === 'route'}
					route={route}
					setRoute={setRoute}
				/>
				<Placeholder inUse={expanded === 'passengers'} />
				<PassengersSelector
					toggleExpanded={updateExpanded.bind(null, 'passengers')}
					isExpanded={expanded === 'passengers'}
					passengers={passengers}
					setPassengers={setPassengers}
				/>
			</div>
			<Totals
				vehicle={vehicle}
				route={route}
				passengers={passengers}
				prices={prices}
			/>
			<Overlay isActive={expanded !== null} onClick={onOverlayClick} />
		</>
	);
};

export default TripCost;