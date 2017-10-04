import {
  SELECT_PACKAGE
} from '../actions'
const times = (state = {}, action) => {
  console.log('reducerssssssssss  %s', action.value)
  switch (action.type) {
  	case 'BUTTON_CLICK':
  		return {
  			seconds: action.value
  		}
  	case SELECT_PACKAGE:
  		return action.time
    default:
      return state
  }
}

export default times