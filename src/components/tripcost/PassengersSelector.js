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
	background: linear-gradient(to bottom, #fdbe30, #f79139);
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
		height: 3.3125rem;
		width: 3.3125rem;
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
`;


const PassengersSelectorFull = ({ passengers, toggleExpanded, dispatch, morphs }) => {
	const handleSliderChange = (value) => {
		dispatch({
			type: 'updatePassengers',
			passengers: value,
		});
	};

	return (
		<WrapperExpanded {...morphs.wrapper}>
			<Heading>
				<Title {...morphs.title}>
					<svg className="title-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z"/></svg>
					<span>People</span>
				</Title>
				<CloseButton onClick={toggleExpanded}>
					<svg className="closebtn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
				</CloseButton>
			</Heading>
			<ExpandedContent>
				<Row>
					<p>Passengers: {passengers}</p>
					<div className="passengers__slider rangeslider-wrapper">
						<Slider
							min={1}
							max={9}
							step={1}
							value={passengers}
							tooltip={false}
							onChange={handleSliderChange}
							labels={{
								1: '1',
								9: '9',
							}}
						/>
					</div>
				</Row>
			</ExpandedContent>
		</WrapperExpanded>
	);
}


const PassengersSelectorSmall = ({ passengers, toggleExpanded, morphs }) => {
	return (
		<Wrapper {...morphs.wrapper}>
			<HeadingButton onClick={toggleExpanded}>
				<Title {...morphs.title}>
					<svg className="title-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z"/></svg>
					<span>{passengers} {passengers > 1 ? 'persons' : 'person'}</span>
				</Title>
			</HeadingButton>
		</Wrapper>
	);
}


const PassengersSelector = ({ isExpanded, toggleExpanded }) => {
	const [{ passengers }, dispatch] = useStateValue();

	const morphs = useMorphKeys([
		'wrapper',
		'title'
	], {
		getMargins: true,
	});

	return (
		isExpanded
			? <PassengersSelectorFull passengers={passengers} toggleExpanded={toggleExpanded} dispatch={dispatch} morphs={morphs} />
			: <PassengersSelectorSmall passengers={passengers} toggleExpanded={toggleExpanded} morphs={morphs} />
	);
};


PassengersSelector.propTypes = {
	toggleExpanded: PropTypes.func.isRequired,
	isExpanded: PropTypes.bool.isRequired,
};


export default PassengersSelector;