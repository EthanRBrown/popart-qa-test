import * as ActionTypes from '../actions'
import { combineReducers } from 'redux'

function calculateResistance(resistors) {
	return 1/Object.values(resistors.byId).map(r => 1/r).reduce((a, r) => a + r, 0)
}

const resistors = (state = { resistance: NaN, byId: { '1': 10, '2': 10 }, commonResistors: [10, 220, 1000] }, action) => {

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
			return newState
		}

		case ActionTypes.SET_COMMON_RESISTORS: {
			return state
		}

		case ActionTypes.SEEK_RESISTANCE: {
			return state
		}

		default: {
			return state
		}

	}
}

function setDlgValue(state, name, key, value) {
		const dlg = state.dialogs[name]
		return {
			...state,
			dialogs: {
				...state.dialogs,
				[name]: {
					...dlg,
					[key]: value,
				}
			},
		}
}

const ui = (state = { dialogs: {} }, action) => {

	switch(action.type) {
		case ActionTypes.SHOW_DIALOG: {
			return setDlgValue(state, action.name, 'isShown', true)
		}
		case ActionTypes.HIDE_DIALOG: {
			return setDlgValue(state, action.name, 'isShown', false)
		}
		case ActionTypes.TOGGLE_DIALOG: {
			return setDlgValue(state, action.name, 'isShown', !state.dialogs[action.name].isShown)
		}
		case ActionTypes.SET_DIALOG_DATA: {
			return setDlgValue(state, action.name, action.key, action.value)
		}
		default: {
			return state
		}
	}
}

export default combineReducers({ resistors, ui })
