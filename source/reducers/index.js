import { combineReducers } from 'redux'
import time from './time'

const pomodoroApp = combineReducers({
  time,
})

export default pomodoroApp
