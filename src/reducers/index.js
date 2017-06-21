import * as ActionTypes from '../actions'
import { combineReducers } from 'redux'

function calculateParallelResistance(resistances) {
	return 1/resistances.map(r => 1/r).reduce((a, r) => a + r, 0)
}

let initialResistorsState = {
	byId: {
		'1': 10,
		'2': 10,
	},
	commonResistors: [10, 220, 1000],
}
initialResistorsState.parallelResistance = calculateParallelResistance(Object.values(initialResistorsState.byId))

const resistors = (state = initialResistorsState, action) => {

	switch(action.type) {

		case ActionTypes.SET_RESISTOR_VALUE: {
			const newState = {
				...state,
				byId: {
					...state.byId,
					[action.id]: action.value,
				},
			}
			newState.parallelResistance = calculateParallelResistance(Object.values(newState.byId))
			return newState
		}

		case ActionTypes.SET_COMMON_RESISTORS: {
			return state
		}

		case ActionTypes.SEEK_RESISTANCE: {
			const resistors = state.commonResistors
			const combinations = []
			// brute force, boo!
			for(let i=0; i<resistors.length; i++) {
				for(let j=i; j<resistors.length; j++) {
					const r1 = resistors[i]
					const r2 = resistors[j]
					const req = calculateParallelResistance([r1, r2])
					const err = Math.abs(req - action.targetResistance)
					combinations.push({ r1, r2, req, err })
				}
			}
			const bestFit = combinations.sort((a, b) => a.err - b.err)[0]
			const newState = {
				...state,
				byId: {
					...state.byId,
					1: bestFit.r1,
					2: bestFit.r2,
				}
			}
			newState.parallelResistance = calculateParallelResistance(Object.values(newState.byId))
			return newState
		}

		default: {
			return state
		}

	}
}

function setDlgValue(state, name, key, value) {
		const dlg = state.dialogs[name] || { isShown: false }
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

const dialogs = {
  seek: { isShown: false, parallelResistance: 100 }
}

const ui = (state = { dialogs }, action) => {

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
