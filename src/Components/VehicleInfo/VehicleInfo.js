import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from "styled-components";
import { useMorphKeys } from 'react-morph';
import Slider from 'react-rangeslider'
import translations from '../../data/translations';

const Wrapper = styled.div`
	height: 120px;
	margin: 0.5rem 0;
	border-radius: 0.5rem;
	background: linear-gradient(to bottom, #36d1dc, #5b8ce5);
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), inset 0px 0px 15px 0px rgba(0,0,0,0.1);
`;

const WrapperExpanded = styled(Wrapper)`
	position: absolute;
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
	user-select: none;

	&:active {
		color: inherit;
	}
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
	letter-spacing: -0.5px;

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


const VehicleInfoFull = ({ vehicle, setVehicle, toggleExpanded, morphs, lang }) => {
	const onFuelConsumptionChange = (value) => {
		setVehicle({
			...vehicle,
			fuelConsumption: value
		});
	};

	const onFuelPriceChange = (value) => {
		setVehicle({
			...vehicle,
			fuelPrice: value
		});
	};

	return (
		<WrapperExpanded {...morphs.wrapper} data-testid="vehicleinfo-full">
			<Heading>
				<Title {...morphs.title}>
					<svg className="title-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 11v-3h1.247c.882 0 1.235.297 1.828.909.452.465 1.925 2.091 1.925 2.091h-5zm-1-3h-2.243c-.688 0-1.051.222-1.377.581-.316.348-.895.948-1.506 1.671 1.719.644 4.055.748 5.126.748v-3zm14 5.161c0-2.823-2.03-3.41-2.794-3.631-1.142-.331-1.654-.475-3.031-.794-.55-.545-2.052-2.036-2.389-2.376l-.089-.091c-.666-.679-1.421-1.269-3.172-1.269h-7.64c-.547 0-.791.456-.254.944-.534.462-1.944 1.706-2.34 2.108-1.384 1.402-2.291 2.48-2.291 4.603 0 2.461 1.361 4.258 3.179 4.332.41 1.169 1.512 2.013 2.821 2.013 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2 1.308 0 2.409-.843 2.82-2.01 1.934-.056 3.181-1.505 3.181-3.829zm-18 4.039c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm12 0c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm2.832-2.15c-.399-1.188-1.509-2.05-2.832-2.05-1.327 0-2.44.868-2.836 2.062h-6.328c-.396-1.194-1.509-2.062-2.836-2.062-1.319 0-2.426.857-2.829 2.04-.586-.114-1.171-1.037-1.171-2.385 0-1.335.47-1.938 1.714-3.199.725-.735 1.31-1.209 2.263-2.026.34-.291.774-.432 1.222-.43h5.173c1.22 0 1.577.385 2.116.892.419.393 2.682 2.665 2.682 2.665s2.303.554 3.48.895c.84.243 1.35.479 1.35 1.71 0 1.196-.396 1.826-1.168 1.888z"/></svg>
					<span>{translations.vehicle[lang]}</span>
				</Title>
				<CloseButton onClick={toggleExpanded} data-testid="vehicleinfo-close">
					<svg className="closebtn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
				</CloseButton>
			</Heading>
			<ExpandedContent>
				<Row>
					<p>
						<span style={{ display: 'block' }}>
							{translations.fuelConsumption[lang]}:
						</span>
						<span style={{ display: 'block' }}>
							{vehicle.fuelConsumption.toFixed(1)}
							{translations.abbreviations.litrePer100Kilometer[lang]}
						</span>
					</p>
					<div className="vehicle-info__slider rangeslider-wrapper">
						<Slider
							min={0}
							max={20}
							step={0.1}
							value={vehicle.fuelConsumption}
							tooltip={false}
							onChange={onFuelConsumptionChange}
							labels={{
								0: `0${translations.abbreviations.litrePer100Kilometer[lang]}`,
								20: `20${translations.abbreviations.litrePer100Kilometer[lang]}`,
							}}
						/>
					</div>
				</Row>
				<Row>
					<p>
						<span style={{ display: 'block' }}>
							{translations.fuelPrice[lang]}:
						</span>
						<span style={{ display: 'block' }}>
							{vehicle.fuelPrice.toFixed(2)}
							{translations.abbreviations.euroPerLitre[lang]}
						</span>
					</p>
					<div className="vehicle-info__slider rangeslider-wrapper">
						<Slider
							min={0.5}
							max={2.2}
							step={0.01}
							value={vehicle.fuelPrice}
							tooltip={false}
							onChange={onFuelPriceChange}
							labels={{
								0.5: `0,50${translations.abbreviations.euroPerLitre[lang]}`,
								2.2: `2,20${translations.abbreviations.euroPerLitre[lang]}`,
							}}
						/>
					</div>
				</Row>
			</ExpandedContent>
		</WrapperExpanded>
	);
}


const VehicleInfoSmall = ({ vehicle, toggleExpanded, morphs, lang }) => {
	return (
		<Wrapper {...morphs.wrapper} data-testid="vehicleinfo-small">
			<HeadingButton onClick={toggleExpanded} data-testid="vehicleinfo-expand">
				<Title {...morphs.title}>
					<svg className="title-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 11v-3h1.247c.882 0 1.235.297 1.828.909.452.465 1.925 2.091 1.925 2.091h-5zm-1-3h-2.243c-.688 0-1.051.222-1.377.581-.316.348-.895.948-1.506 1.671 1.719.644 4.055.748 5.126.748v-3zm14 5.161c0-2.823-2.03-3.41-2.794-3.631-1.142-.331-1.654-.475-3.031-.794-.55-.545-2.052-2.036-2.389-2.376l-.089-.091c-.666-.679-1.421-1.269-3.172-1.269h-7.64c-.547 0-.791.456-.254.944-.534.462-1.944 1.706-2.34 2.108-1.384 1.402-2.291 2.48-2.291 4.603 0 2.461 1.361 4.258 3.179 4.332.41 1.169 1.512 2.013 2.821 2.013 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2 1.308 0 2.409-.843 2.82-2.01 1.934-.056 3.181-1.505 3.181-3.829zm-18 4.039c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm12 0c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm2.832-2.15c-.399-1.188-1.509-2.05-2.832-2.05-1.327 0-2.44.868-2.836 2.062h-6.328c-.396-1.194-1.509-2.062-2.836-2.062-1.319 0-2.426.857-2.829 2.04-.586-.114-1.171-1.037-1.171-2.385 0-1.335.47-1.938 1.714-3.199.725-.735 1.31-1.209 2.263-2.026.34-.291.774-.432 1.222-.43h5.173c1.22 0 1.577.385 2.116.892.419.393 2.682 2.665 2.682 2.665s2.303.554 3.48.895c.84.243 1.35.479 1.35 1.71 0 1.196-.396 1.826-1.168 1.888z"/></svg>
					<span style={{ width: 'min-content' }}>
						<span style={{ display: 'block' }}>
							{vehicle.fuelConsumption.toFixed(1)}
							{translations.abbreviations.litrePer100Kilometer[lang]}
						</span>
						<span style={{ display: 'block' }}>
							{vehicle.fuelPrice.toFixed(2)}
							{translations.abbreviations.euroPerLitre[lang]}
						</span>
					</span>
				</Title>
			</HeadingButton>
		</Wrapper>
	);
}


const VehicleInfo = ({ vehicle, setVehicle, toggleExpanded, isExpanded, lang }) => {
	const morphs = useMorphKeys([
		'wrapper',
		'title',
	], {
		getMargins: true,
	});

	return (
		isExpanded
			? <VehicleInfoFull vehicle={vehicle} setVehicle={setVehicle} toggleExpanded={toggleExpanded} morphs={morphs} lang={lang} />
			: <VehicleInfoSmall vehicle={vehicle} toggleExpanded={toggleExpanded} morphs={morphs} lang={lang} />
	);
};


VehicleInfo.propTypes = {
	vehicle: PropTypes.object.isRequired,
	setVehicle: PropTypes.func.isRequired,
	toggleExpanded: PropTypes.func.isRequired,
	isExpanded: PropTypes.bool.isRequired,
};

export default VehicleInfo;