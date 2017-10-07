import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
import { startPomodoro, stopPomodoro, resetPomodoro } from '../actions'

const style = {
  "margin": 12
}

class ControlButton extends React.Component {
	constructor() {
		super()
	}

	btClick() {
		this.props.dispatch(startPomodoro())
	}

	stopPomodoro() {
		this.props.dispatch(stopPomodoro())
	}

	resetPomodoro() {
		this.props.dispatch(resetPomodoro())
	}

	render() {
		return(
			<div className="ControlButton">
				<RaisedButton label="Start" onClick={this.btClick.bind(this)} primary={true} style={style} />
				<RaisedButton label="Stop" onClick={this.stopPomodoro.bind(this)} secondary={true} style={style} />
				<RaisedButton label="Reset" onClick={this.resetPomodoro.bind(this)} style={style} />
			</div>
		)
	}
}

module.exports = connect()(ControlButton)