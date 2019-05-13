import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from "styled-components";
import { useStateValue } from '../../state/state';
import { useMorphKeys } from 'react-morph';
import Slider from 'react-rangeslider'

const Wrapper = styled.div`
	height: 120px;
	margin: 0.5rem 0;
	border-radius: 0.5rem;
	background: linear-gradient(to bottom, #36d1dc, #5b8ce5);
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), inset 0px 0px 15px 0px rgba(0,0,0,0.1);
`;

const WrapperExpanded = styled(Wrapper)`
	position: fixed;
	top: 50%;
	left: 0;
	right: 0;
	height: auto;
	margin: 0 5px;
	border-radius: 1.5rem;
	overflow-y: auto;
	transform: translateY(-50%);
	z-index: 3000;
`;

const headingStyles = css`
	position: relative;
	display: flex;
	align-items: center;
	height: 120px;
	width: 100%;
	padding: 1rem;
	margin: 0;
	border: none;
	background: transparent;
	text-align: left;
	outline: none !important;
`

const Heading = styled.div`
	${headingStyles}
	height: auto;
`;

const HeadingButton = styled.button`
	${headingStyles}
`;

const Title = styled.h2`
	display: flex;
	align-items: center;
	margin: 0;
	font-size: 1.8rem;

	.title-icon {
		height: 3.5rem;
		width: 3.5rem;
		margin-right: 0.875rem;
	}
`;

const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	padding: 1rem;
	margin: 0;
	border: none;
	background: transparent;
	outline: none !important;

	.closebtn-icon {
		width: 1.375rem;
    	height: 1.375rem;
		margin: auto;
	}
`;

const ExpandedContent = styled.div`
	padding: 0.25rem 1rem 1rem 1rem;
`;

const Row = styled.div`
	padding-bottom: 0.5rem;
	font-size: 1.5rem;

	&:not(:last-child) {
		padding-bottom: 1.5rem;
	}
`;

const RadioFieldSet = styled.div`
	display: flex;
	align-items: center;
`;

const RadioLabel = styled.label`
	position: relative;
	display: flex;
	align-items: center;
	margin-bottom: 0.25rem;

	&:not(:last-of-type) {
		margin-right: 2rem;
	}
`;

const RadioInput = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	width: 1px;
	height: 1px;
	opacity: 0;
	z-index: -1;
	pointer-events: none;
`;

const RadioIndicator = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	margin-top: -0.18em;
	margin-right: 0.5rem;
	border-radius: 1.5rem;
	background: #fafafa;

	${RadioInput}:checked ~ & {
		background: linear-gradient(to bottom right,#0883a0 0%,#055b69 100%);
	}
`;


class VehicleInfoFull extends React.Component {
	onConsumptionChange = (value) => {
		this.props.dispatch({
			type: 'updateVehicle',
			id: this.props.vehicle.id,
			vehicle: {
				fuelConsumption: { highway: value }
			}
		});
	}

	onFuelTypeChange = (e) => {
		this.props.dispatch({
			type: 'updateVehicle',
			id: this.props.vehicle.id,
			vehicle: {
				fuelConsumption: { fuelType: e.target.value }
			}
		});
	}

	componentDidMount() {
		this.forceUpdate();
	}

	render() {
		const { vehicle, toggleExpanded, morphs } = this.props;
		return (
			<WrapperExpanded {...morphs.wrapper}>
				<Heading>
					<Title {...morphs.title}>
						<svg className="title-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 11v-3h1.247c.882 0 1.235.297 1.828.909.452.465 1.925 2.091 1.925 2.091h-5zm-1-3h-2.243c-.688 0-1.051.222-1.377.581-.316.348-.895.948-1.506 1.671 1.719.644 4.055.748 5.126.748v-3zm14 5.161c0-2.823-2.03-3.41-2.794-3.631-1.142-.331-1.654-.475-3.031-.794-.55-.545-2.052-2.036-2.389-2.376l-.089-.091c-.666-.679-1.421-1.269-3.172-1.269h-7.64c-.547 0-.791.456-.254.944-.534.462-1.944 1.706-2.34 2.108-1.384 1.402-2.291 2.48-2.291 4.603 0 2.461 1.361 4.258 3.179 4.332.41 1.169 1.512 2.013 2.821 2.013 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2 1.308 0 2.409-.843 2.82-2.01 1.934-.056 3.181-1.505 3.181-3.829zm-18 4.039c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm12 0c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm2.832-2.15c-.399-1.188-1.509-2.05-2.832-2.05-1.327 0-2.44.868-2.836 2.062h-6.328c-.396-1.194-1.509-2.062-2.836-2.062-1.319 0-2.426.857-2.829 2.04-.586-.114-1.171-1.037-1.171-2.385 0-1.335.47-1.938 1.714-3.199.725-.735 1.31-1.209 2.263-2.026.34-.291.774-.432 1.222-.43h5.173c1.22 0 1.577.385 2.116.892.419.393 2.682 2.665 2.682 2.665s2.303.554 3.48.895c.84.243 1.35.479 1.35 1.71 0 1.196-.396 1.826-1.168 1.888z"/></svg>
						<span>Vehicle</span>
					</Title>
					<CloseButton onClick={toggleExpanded}>
						<svg className="closebtn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
					</CloseButton>
				</Heading>
				<ExpandedContent>
					<Row>
						<p>Fuel Type:</p>
						<RadioFieldSet>
							<RadioLabel>
								<RadioInput type="radio" name="fuel-type" value="Gasoline" onChange={this.onFuelTypeChange} checked={vehicle.fuelConsumption.fuelType === 'Gasoline'} />
								<RadioIndicator />
								<span>Gasoline</span>
							</RadioLabel>
							<RadioLabel>
								<RadioInput type="radio" name="fuel-type" value="Diesel" onChange={this.onFuelTypeChange} checked={vehicle.fuelConsumption.fuelType === 'Diesel'} />
								<RadioIndicator />
								<span>Diesel</span>
							</RadioLabel>
						</RadioFieldSet>
					</Row>
					<Row>
						<p>Consumption: {vehicle.fuelConsumption.highway.toFixed(1)}{vehicle.fuelConsumption.unit}</p>
						<div className="vehicle-info__slider rangeslider-wrapper">
							<Slider
								min={0}
								max={20}
								step={0.1}
								value={vehicle.fuelConsumption.highway}
								tooltip={false}
								onChange={this.onConsumptionChange}
								labels={{
									0: `0${vehicle.fuelConsumption.unit}`,
									20: `20${vehicle.fuelConsumption.unit}`,
								}}
							/>
						</div>
					</Row>
				</ExpandedContent>
			</WrapperExpanded>
		);
	}
}


const VehicleInfoSmall = ({ vehicle, toggleExpanded, morphs }) => {
	return (
		<Wrapper {...morphs.wrapper}>
			<HeadingButton onClick={toggleExpanded}>
				<Title {...morphs.title}>
					<svg className="title-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 11v-3h1.247c.882 0 1.235.297 1.828.909.452.465 1.925 2.091 1.925 2.091h-5zm-1-3h-2.243c-.688 0-1.051.222-1.377.581-.316.348-.895.948-1.506 1.671 1.719.644 4.055.748 5.126.748v-3zm14 5.161c0-2.823-2.03-3.41-2.794-3.631-1.142-.331-1.654-.475-3.031-.794-.55-.545-2.052-2.036-2.389-2.376l-.089-.091c-.666-.679-1.421-1.269-3.172-1.269h-7.64c-.547 0-.791.456-.254.944-.534.462-1.944 1.706-2.34 2.108-1.384 1.402-2.291 2.48-2.291 4.603 0 2.461 1.361 4.258 3.179 4.332.41 1.169 1.512 2.013 2.821 2.013 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2 1.308 0 2.409-.843 2.82-2.01 1.934-.056 3.181-1.505 3.181-3.829zm-18 4.039c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm12 0c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm2.832-2.15c-.399-1.188-1.509-2.05-2.832-2.05-1.327 0-2.44.868-2.836 2.062h-6.328c-.396-1.194-1.509-2.062-2.836-2.062-1.319 0-2.426.857-2.829 2.04-.586-.114-1.171-1.037-1.171-2.385 0-1.335.47-1.938 1.714-3.199.725-.735 1.31-1.209 2.263-2.026.34-.291.774-.432 1.222-.43h5.173c1.22 0 1.577.385 2.116.892.419.393 2.682 2.665 2.682 2.665s2.303.554 3.48.895c.84.243 1.35.479 1.35 1.71 0 1.196-.396 1.826-1.168 1.888z"/></svg>
					<span style={{ width: 'min-content' }}>{vehicle.fuelConsumption.fuelType} {vehicle.fuelConsumption.highway.toFixed(1)}{vehicle.fuelConsumption.unit}</span>
				</Title>
			</HeadingButton>
		</Wrapper>
	);
}


const VehicleInfo = ({ toggleExpanded, isExpanded }) => {
	const [{ vehicles }, dispatch] = useStateValue();

	const morphs = useMorphKeys([
		'wrapper',
		'title',
	], {
		getMargins: true,
	});

	const activeVehicle = vehicles.find(vehicle => vehicle.isActive);

	return (
		isExpanded
			? <VehicleInfoFull vehicle={activeVehicle} toggleExpanded={toggleExpanded} dispatch={dispatch} morphs={morphs} />
			: <VehicleInfoSmall vehicle={activeVehicle} toggleExpanded={toggleExpanded} morphs={morphs} />
	);
};


VehicleInfo.propTypes = {
	toggleExpanded: PropTypes.func.isRequired,
	isExpanded: PropTypes.bool.isRequired,
};

export default VehicleInfo;