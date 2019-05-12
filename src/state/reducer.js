const reducer = (state, action) => {
	switch (action.type) {
		case 'updateVehicle':
			return {
				...state,
				vehicle: {
					...state.vehicle,
					...action.vehicle
				}
			};

		default:
			return state;
	}
};

export default reducer;
