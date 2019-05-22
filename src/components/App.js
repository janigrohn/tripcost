import React from 'react';
import styled from "styled-components";
import { StateProvider } from '../state/state';
import initialState from '../state/initialState';
import reducer from '../state/reducer';
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
		<StateProvider initialState={initialState} reducer={reducer}>
			<AppContainer>
				<TripCost />
			</AppContainer>
		</StateProvider>
	);
};

export default App;
