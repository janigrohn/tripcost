export const getVehicle = () => {
	const localStorageState = localStorage.getItem('vehicle');
	const initialState = {
		fuelType: 'gasoline',
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

export const getPrices = () => {
	const localStorageState = localStorage.getItem('prices');
	const initialState = {
		gasoline: 1.641,
		diesel: 1.3
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