const getVehicle = () => {
	return {
		make: 'Volkswagen',
		model: 'Golf',
		fuelConsumption: {
			city: 8.5,
			highway: 5.5,
			combined: 6.4
		}
	};
};

const initialState = {
	vehicle: getVehicle(),
	activeTab: 'tripcost',
};

export default initialState;
