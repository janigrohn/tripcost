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

		case 'updateRoute':
			return {
				...state,
				route: {
					...state.route,
					...action.route
				}
			};

		default:
			return state;
	}
};

export default reducer;
