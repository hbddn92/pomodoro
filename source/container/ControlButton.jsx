import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
import { btClick } from '../actions'

const style = {
  "margin": 12
}

class ControlButton extends React.Component {
	constructor() {
		super()
	}

	btClick() {
		this.props.dispatch(btClick(234))
	}

	render() {
		return(
			<div className="ControlButton">
				<RaisedButton label="Start" onClick={this.btClick.bind(this)} primary={true} style={style} />
				<RaisedButton label="Stop" secondary={true} style={style} />
				<RaisedButton label="Reset"  style={style} />
			</div>
		)
	}
}

module.exports = connect()(ControlButton)