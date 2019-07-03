import React from 'react';
import styled from "styled-components";
import FuelCost from './FuelCost/FuelCost';

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
		<AppContainer data-testid="app-container">
			<FuelCost />
		</AppContainer>
	);
};

export default App;
