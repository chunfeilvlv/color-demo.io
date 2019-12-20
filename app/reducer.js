export default (state, action) => {
	if (state == undefined) {
		state = {
			"r": 0,
			"g": 0,
			"b": 0
		}
	}
	switch (action.type) {
		case 'CHANGE_R':
			return {...state, "r": action.value}	
			break;
		case 'CHANGE_G':
			return {...state, "g": action.value}
			break;
		case 'CHANGE_B':
			return {...state, "b": action.value}
			break;
		case 'ADD_COLOR':
			return {...state, [action.color]:  (state[action.color] + 20 > 255 ? 255 : state[action.color] + 20)}
			break;
		case 'MINUS_COLOR':
			return {...state, [action.color]: (state[action.color] - 20 < 20 ? 0 : state[action.color] - 20)}
			break;
	}
	return state
}