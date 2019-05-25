export const getVehicle = () => {
	const localStorageState = localStorage.getItem('vehicle');
	const initialState = {
		fuelPrice: 1.625,
		fuelConsumption: 5.5,
	};

	return localStorageState
		? JSON.parse(localStorageState)
		: initialState;
};

export const getRoute = () => {
	const localStorageState = localStorage.getItem('route');
	const initialState = {
		distance: 400,
	};

	return localStorageState
		? JSON.parse(localStorageState)
		: initialState;
};

export const getPassengers = () => {
	const localStorageState = localStorage.getItem('passengers');
	const initialState = 1;

	return localStorageState
		? JSON.parse(localStorageState)
		: initialState;
};