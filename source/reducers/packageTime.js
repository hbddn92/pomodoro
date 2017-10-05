// state packageTime quan li trang thai package time: 1500, 300, 600 seconds

const packageTime = (state = 1500, action) => {
	console.log('update packageTime Reducer %s', JSON.stringify(action.value))
	switch (action.type) {
		case 'SELECT_PAGKAGE_TIME':
			return action.value
		default:
			return state
	}
}

export default packageTime

