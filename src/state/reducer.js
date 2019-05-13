const reducer = (state, action) => {
	switch (action.type) {
		case 'updateVehicle':
			const newState = {...state}
			const index = newState.vehicles.findIndex(vehicle => vehicle.id === action.id);
			newState.vehicles[index] = {
				...newState.vehicles[index],
				...action.vehicle,
				fuelConsumption: {
					...newState.vehicles[index].fuelConsumption,
					...action.vehicle.fuelConsumption,
				},
			};
			return newState;

		case 'updateRoute':
			return {
				...state,
				route: {
					...state.route,
					...action.route
				}
			};

		case 'updatePassengers':
			return {
				...state,
				passengers: action.passengers
			};

		default:
			return state;
	}
};

export default reducer;
