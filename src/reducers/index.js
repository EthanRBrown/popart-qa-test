import * as ActionTypes from '../actions'
import { combineReducers } from 'redux'

function calculateResistance(resistors) {
	return 1/Object.values(resistors.byId).map(r => 1/r).reduce((a, r) => a + r, 0)
}

const resistors = (state = { resistance: NaN, byId: {}, commonResistors: [1000] }, action) => {

	switch(action.type) {

		case ActionTypes.SET_RESISTOR_VALUE: {
			const newState = {
				...state,
				byId: {
					...state.byId,
					[action.id]: action.value,
				},
			}
			newState.resistance = calculateResistance(newState)
		}

		case ActionTypes.SET_COMMON_RESISTORS: {
		}

		case ActionTypes.SEEK_RESISTANCE: {
		}

	}
}

function setDlgValue(state, name, key, value) {
		const dlg = state.dialogs[name]
		return {
			...state,
			dialogs: {
				...state.dialogs,
				[ame]: {
					...dlg,
					[key]: value,
				}
			},
		}
}

const ui = (state = { dialogs: {} }, action) => {

	switch(action.type) {
		case ActionTypes.SHOW_DIALOG: {
			setDlgValue(state, action.name, 'isShown', true)
		}
		case ActionTypes.HIDE_DIALOG: {
			setDlgValue(state, action.name, 'isShown', false)
		}
		case ActionTypes.TOGGLE_DIALOG: {
			setDlgValue(state, action.name, 'isShown', !state.dialogs[action.name].isShown)
		}
		case ActionTypes.SET_DIALOG_DATA: {
			setDlgValue(state, action.name, action.key, action.value)
		}
	}
}

export default combineReducers({ resistors, ui })
