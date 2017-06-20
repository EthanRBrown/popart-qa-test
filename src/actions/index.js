export const SHOW_DIALOG = 'SHOW_DIALOG'
export const HIDE_DIALOG = 'HIDE_DIALOG'
export const TOGGLE_DIALOG = 'HIDE_DIALOG'
export const SET_DIALOG_DATA = 'SET_DIALOG_DATA'

export const SET_COMMON_RESISTORS = 'SET_COMMON_RESISTORS'

export const SET_RESISTOR_VALUE = 'SET_RESISTOR_VALUE'

export const SEEK_RESISTANCE = 'SEEK_RESISTANCE'

export const showDialog = name => ({ type: SHOW_DIALOG, name })
export const hideDialog = name => ({ type: HIDE_DIALOG, name })
export const setDialogData = (key, value) => ({ type: SET_DIALOG_DATA, key, value })

export const setCommonResistors = data => ({ type: SET_COMMON_RESISTORS, data })

export const setResistorValue = (id, value) => ({ type: SET_RESISTOR_VALUE, id, value })

export const seekResistance = targetResistance => ({ type: SEEK_RESISTANCE, targetResistance })
