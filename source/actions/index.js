export const SELECT_PACKAGE = 'SELECT_PACKAGE'
function selectPackage(time) {
	return {  type: SELECT_PACKAGE,
			  time
		}
}

let countdownTime;

export function countdown(value) {
	console.log('hassssssssssss')
	return function (dispatch) {
		console.log('countdown')
		var count = value;
		var minutes = Math.floor(count / 60);
		var seconds = Math.floor(count % 60);

		clearInterval(countdownTime);

		countdownTime = setInterval(function(){
			console.log('set')

			if (count > 59) {
				if (seconds < 10 && seconds >= 0) {
					seconds = "0" + seconds;
				}
				else if (seconds < 0) {
					minutes--;
					seconds = count % 60;
				}
				// $("#bigtime").html(minutes + ":" + seconds + " remaining!");
				let time = {
					minutes: minutes,
					seconds: seconds
				}
				dispatch(selectPackage(time))
				seconds--;
			}

			if (count < 60 && count >= 0){
				let time = {
					minutes: 0,
					seconds: count
				}
				dispatch(selectPackage(time))

				if (count === 0) {
					clearInterval(countdown);
				}

			} 
			count--;
			return;
		}, 1000);
	}
}




export const btClick = (value) => ({
  type: 'BUTTON_CLICK',
  value
})