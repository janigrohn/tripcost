import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.div`
	padding: 0.25rem 0.25rem 0 0.25rem;
	margin-top: auto;
	margin-bottom: 1rem;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	font-size: 1.5rem;
	border-top: solid 2px rgba(0, 0, 0, 0.15);
`;

const Totals = ({ vehicle, route, passengers }) => {
	const getTotalPrice = () => (route.distance * vehicle.fuelConsumption / 100 * vehicle.fuelPrice).toFixed(2);
	const getPricePerPassenger = () => (getTotalPrice() / passengers).toFixed(2);
	const getPricePerKm = () => route.distance !== 0 ? (getTotalPrice() / route.distance).toFixed(2) : '0,00';
	const getNeededFuel = () => (route.distance * vehicle.fuelConsumption / 100).toFixed(1);

	return (
		<Wrapper data-testid="totals">
			<Row>
				<span>Total cost: </span>
				<span>{getTotalPrice().replace('.', ',')}€</span>
			</Row>
			<Row>
				<span>Cost / person: </span>
				<span>{getPricePerPassenger().replace('.', ',')}€</span>
			</Row>
			<Row>
				<span>Cost / km: </span>
				<span>{getPricePerKm().replace('.', ',')}€</span>
			</Row>
			<Row>
				<span>Fuel needed: </span>
				<span>{getNeededFuel().replace('.', ',')}L</span>
			</Row>
		</Wrapper>
	);
}

Totals.propTypes = {
	vehicle: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
	passengers: PropTypes.number.isRequired
}


export default Totals;
