import React, { useState } from 'react';
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
	const [lang] = useState(() => (
		localStorage.getItem('app-lang') || 'fi'
	));

	return (
		<AppContainer data-testid="app-container">
			<FuelCost lang={lang} />
		</AppContainer>
	);
};

export default App;
