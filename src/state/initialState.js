const getVehicle = () => ({
	fuelType: 'gasoline',
	fuelConsumption: 5.5,
});

const getRoute = () => ({
	distance: 400,
});

const getPrices = () => ({
	gasoline: 1.641,
	diesel: 1.3
});

const initialState = {
	vehicle: getVehicle(),
	route: getRoute(),
	prices: getPrices(),
	passengers: 1,
};

export default initialState;
