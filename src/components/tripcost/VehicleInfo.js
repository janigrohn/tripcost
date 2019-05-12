import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from "styled-components";
import { useStateValue } from '../../state/state';
import { useMorphKeys } from 'react-morph';

const Wrapper = styled.div`
	height: 120px;
	margin: 0.5rem 0;
	border-radius: 0.25rem;
	background: linear-gradient(to bottom, #36d1dc, #5b86e5);
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), inset 0px 0px 15px 0px rgba(0,0,0,0.1);
`;

const WrapperExpanded = styled(Wrapper)`
	position: fixed;
	top: 50%;
	left: 0;
	right: 0;
	min-height: 50vh;
	margin: 0 5px;
	border-radius: 2rem;
	overflow-y: auto;
	transform: translateY(-50%);
	z-index: 3000;
`;

const headingStyles = css`
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
		margin-right: 0.8125rem;
	}
`;


const VehicleInfoFull = ({ vehicle, toggleExpanded, morphs }) => {
	return (
		<WrapperExpanded {...morphs.wrapper}>
			<Heading>
				<Title {...morphs.title}>
					<svg className="title-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 11v-3h1.247c.882 0 1.235.297 1.828.909.452.465 1.925 2.091 1.925 2.091h-5zm-1-3h-2.243c-.688 0-1.051.222-1.377.581-.316.348-.895.948-1.506 1.671 1.719.644 4.055.748 5.126.748v-3zm14 5.161c0-2.823-2.03-3.41-2.794-3.631-1.142-.331-1.654-.475-3.031-.794-.55-.545-2.052-2.036-2.389-2.376l-.089-.091c-.666-.679-1.421-1.269-3.172-1.269h-7.64c-.547 0-.791.456-.254.944-.534.462-1.944 1.706-2.34 2.108-1.384 1.402-2.291 2.48-2.291 4.603 0 2.461 1.361 4.258 3.179 4.332.41 1.169 1.512 2.013 2.821 2.013 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2 1.308 0 2.409-.843 2.82-2.01 1.934-.056 3.181-1.505 3.181-3.829zm-18 4.039c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm12 0c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm2.832-2.15c-.399-1.188-1.509-2.05-2.832-2.05-1.327 0-2.44.868-2.836 2.062h-6.328c-.396-1.194-1.509-2.062-2.836-2.062-1.319 0-2.426.857-2.829 2.04-.586-.114-1.171-1.037-1.171-2.385 0-1.335.47-1.938 1.714-3.199.725-.735 1.31-1.209 2.263-2.026.34-.291.774-.432 1.222-.43h5.173c1.22 0 1.577.385 2.116.892.419.393 2.682 2.665 2.682 2.665s2.303.554 3.48.895c.84.243 1.35.479 1.35 1.71 0 1.196-.396 1.826-1.168 1.888z"/></svg>
					<span>{vehicle.make} {vehicle.model}</span>
				</Title>
			</Heading>
			<p>Test</p>
			<p>Test asdasd </p>
			<p>Test asdasd </p>
		</WrapperExpanded>
	);
}


const VehicleInfoSmall = ({ vehicle, toggleExpanded, morphs }) => {
	return (
		<Wrapper {...morphs.wrapper}>
			<HeadingButton onClick={toggleExpanded}>
				<Title {...morphs.title}>
					<svg className="title-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 11v-3h1.247c.882 0 1.235.297 1.828.909.452.465 1.925 2.091 1.925 2.091h-5zm-1-3h-2.243c-.688 0-1.051.222-1.377.581-.316.348-.895.948-1.506 1.671 1.719.644 4.055.748 5.126.748v-3zm14 5.161c0-2.823-2.03-3.41-2.794-3.631-1.142-.331-1.654-.475-3.031-.794-.55-.545-2.052-2.036-2.389-2.376l-.089-.091c-.666-.679-1.421-1.269-3.172-1.269h-7.64c-.547 0-.791.456-.254.944-.534.462-1.944 1.706-2.34 2.108-1.384 1.402-2.291 2.48-2.291 4.603 0 2.461 1.361 4.258 3.179 4.332.41 1.169 1.512 2.013 2.821 2.013 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2 1.308 0 2.409-.843 2.82-2.01 1.934-.056 3.181-1.505 3.181-3.829zm-18 4.039c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm12 0c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm2.832-2.15c-.399-1.188-1.509-2.05-2.832-2.05-1.327 0-2.44.868-2.836 2.062h-6.328c-.396-1.194-1.509-2.062-2.836-2.062-1.319 0-2.426.857-2.829 2.04-.586-.114-1.171-1.037-1.171-2.385 0-1.335.47-1.938 1.714-3.199.725-.735 1.31-1.209 2.263-2.026.34-.291.774-.432 1.222-.43h5.173c1.22 0 1.577.385 2.116.892.419.393 2.682 2.665 2.682 2.665s2.303.554 3.48.895c.84.243 1.35.479 1.35 1.71 0 1.196-.396 1.826-1.168 1.888z"/></svg>
					<span>{vehicle.make} {vehicle.model}</span>
				</Title>
			</HeadingButton>
		</Wrapper>
	);
}


const VehicleInfo = ({ toggleExpanded, isExpanded }) => {
	const [{ vehicle }, dispatch] = useStateValue();

	const morphs = useMorphKeys([
		'wrapper',
		'title',
	], {
		getMargins: true,
	});


	return (
		isExpanded
			? <VehicleInfoFull vehicle={vehicle} toggleExpanded={toggleExpanded} morphs={morphs} />
			: <VehicleInfoSmall vehicle={vehicle} toggleExpanded={toggleExpanded} morphs={morphs} />
	);
};


VehicleInfo.propTypes = {
	toggleExpanded: PropTypes.func.isRequired,
	isExpanded: PropTypes.bool.isRequired,
};

export default VehicleInfo;