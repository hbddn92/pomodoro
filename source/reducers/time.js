import {
  COUNTDOWN
} from '../actions'
const times = (state = {minutes: '25', seconds: '00'}, action) => {
  console.log('reducers times  %s', JSON.stringify(action.time))
  switch (action.type) {
  	case COUNTDOWN:
  		return action.time
    default:
      return state
  }
}

export default times