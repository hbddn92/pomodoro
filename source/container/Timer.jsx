import React from 'react'
import {connect} from 'react-redux';

const style = {
	"margin-bottom": "20px",
};

const time = (state) => ({
  time: state.time
})

class Timer extends React.Component {
	constructor() {
		super()
	}
	render() {
		return(
			<div className="timer">{this.props.time.minutes} : {this.props.time.seconds}</div>
		)
	}
}

Timer.defaultProps = {
	time: {
		minutes: '00',
		seconds: '00'
	}
}

const Timers = connect(
  time,
)(Timer)

module.exports = Timers