const getVehicles = () => {
	return [
		{
			make: 'Volkswagen',
			model: 'Golf',
			fuelConsumption: {
				city: 8.5,
				highway: 5.5,
				combined: 6.4
			},
			isActive: true,
		},
		{
			make: 'Toyota',
			model: 'Corolla',
			fuelConsumption: {
				city: 9,
				highway: 6,
				combined: 7.2
			},
			isActive: false,
		},
	];
};

const getRoute = () => ({
	distance: 400,
	unit: 'km'
});

const initialState = {
	activeTab: 'tripcost',
	vehicles: getVehicles(),
	route: getRoute(),
};

export default initialState;
