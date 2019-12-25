import { handleActions } from 'redux-actions'
import * as types from './action-types'

const INITIAL_STATE = {
  count: 0
}

const addCounterReducer = (state, { payload: numberOfCount = 1 }) => ({ ...state, count: state.count + numberOfCount })
const removeCounterReducer = (state, { payload: numberOfCount = 1 }) => ({ ...state, count: state.count - numberOfCount })

export default handleActions({
  [types.ADD_COUNTER]: addCounterReducer,
  [types.REMOVE_COUNTER]: removeCounterReducer
}, INITIAL_STATE)
