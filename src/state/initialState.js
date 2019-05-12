const getVehicles = () => {
	return [
		{
			id: 1,
			make: 'Volkswagen',
			model: 'Golf',
			fuelConsumption: {
				fuelType: 'Gasoline',
				city: 8.5,
				highway: 5.5,
				combined: 6.4,
				unit: 'L/100km',
			},
			isActive: true,
		},
		{
			id: 2,
			make: 'Toyota',
			model: 'Corolla',
			fuelConsumption: {
				fuelType: 'Diesel',
				city: 9,
				highway: 6,
				combined: 7.2,
				unit: 'L/100km',
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
