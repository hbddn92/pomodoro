let countdownTime;
let count;
let stop = false;

// Async Action control Button: start, stop, reset
export const COUNTDOWN = 'COUNTDOWN'
function dispatchTime(time) {
	return {  type: COUNTDOWN,
			  time
		}
}

export function startPomodoro() {
	return function (dispatch, getState) {
		console.log('startPomodoro %s', getState())

		//check da stop hay chua
		if(!stop) {
			count = getState().packageTime;
		} else {
			stop = false
		}

		let minutes = Math.floor(count / 60);
		let seconds = Math.floor(count % 60);

		clearInterval(countdownTime);

		countdownTime = setInterval(function(){
			console.log('count')

			if (count > 59) {
				if (seconds < 10 && seconds >= 0) {
					seconds = "0" + seconds;
				}
				else if (seconds < 0) {
					minutes--;
					seconds = count % 60;
				}
				let time = {
					minutes: minutes,
					seconds: seconds
				}
				dispatch(dispatchTime(time))
				seconds--;
			}

			if (count < 60 && count >= 0) {
				let time = {
					minutes: 0,
					seconds: count
				}
				dispatch(dispatchTime(time))
				if (count === 0) {
					clearInterval(countdownTime);
				}
			} 
			count--;
			return;
		}, 1000);
	}
}

export function stopPomodoro() {
	return function(dispatch) {
		clearInterval(countdownTime)
		stop = true
	}
}

export function resetPomodoro() {
	return function(dispatch, getState) {
		clearInterval(countdownTime)

		count = getState().packageTime;
		let time = {
			minutes : Math.floor(count / 60),
			seconds : Math.floor(count % 60)
		}
		dispatch(dispatchTime(time))
	}
}

export function setInitalPackageTime(value) {
	return function(dispatch) {
		clearInterval(countdownTime);
		if(value > 0) {
			let time = {
				minutes : Math.floor(value / 60),
				seconds : Math.floor(value % 60)
			}
			dispatch(dispatchTime(time))
		}
	}
}



// Async action select package time

export const SELECT_PAGKAGE_TIME = 'SELECT_PAGKAGE_TIME'
function dispatchPagkageTime(packageTime) {
	return {  type: SELECT_PAGKAGE_TIME,
			  value: packageTime
		}
}

export function selectPagkageTime(packageTime) {
	return function(dispatch) {
		stop = false;
		dispatch(dispatchPagkageTime(packageTime))
	}
}
