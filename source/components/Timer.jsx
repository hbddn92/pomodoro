import React from 'react'

const style = {
	"margin-bottom": "20px",
};

class Timer extends React.Component {
	constructor() {
		super()
	}
	render() {
		return(
			<div className="timer">{this.props.minutes} : {this.props.seconds}</div>
		)
	}
}

Timer.defaultProps = {
	seconds: '00',
	minutes: '00'
}

module.exports = Timer