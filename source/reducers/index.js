import { combineReducers } from 'redux'
import time from './time'
import packageTime from './packageTime'

const pomodoroApp = combineReducers({
  time,
  packageTime
})

export default pomodoroApp
