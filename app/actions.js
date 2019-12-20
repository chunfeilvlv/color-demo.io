export const changeR = (v) => {
	
	return {
		"type": "CHANGE_R",
		"value": v
	}
}
export const changeG = (v) => {
	return {
		"type": "CHANGE_G",
		"value": v
	}
}
export const changeB = (v) => {
	return {
		"type": "CHANGE_B",
		"value": v
	}
}
export const addColor = (c) => {

	return {
		"type": "ADD_COLOR",
		"color": c
	}
}
export const minusColor = (c) => {

	return {
		"type": "MINUS_COLOR",
		"color": c
	}
}
