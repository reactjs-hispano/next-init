import { createAction } from 'redux-actions'
import * as types from './action-types'

export const addCounter = createAction(types.ADD_COUNTER)
export const removeCounter = createAction(types.REMOVE_COUNTER)
