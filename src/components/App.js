import React from 'react';
import styled from "styled-components";
import TripCost from './tripcost/TripCost';

const AppContainer = styled.div`
	position: relative;
	min-height: 100%;
	max-width: 640px;
	display: flex;
	flex-direction: column;
	padding: 0 5px;
	margin: 0 auto;
`;

const App = () => {
	return (
		<AppContainer>
			<TripCost />
		</AppContainer>
	);
};

export default App;
