import React from 'react';
import styled from "styled-components";
import { StateProvider } from '../state/state';
import initialState from '../state/initialState';
import reducer from '../state/reducer';
import Tabs from './Tabs';

const AppContainer = styled.div`
	position: relative;
	max-width: 640px;
	padding: 0 5px;
	margin: 0 auto;
`;

const App = () => {
	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			<AppContainer>
				<Tabs />
			</AppContainer>
		</StateProvider>
	);
};

export default App;
