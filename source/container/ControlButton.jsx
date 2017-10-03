import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  "margin": 12
}

class ControlButton extends React.Component {
	constructor() {
		super()
	}
	render() {
		return(
			<div className="ControlButton">
				<RaisedButton label="Start" primary={true} style={style} />
				<RaisedButton label="Stop" secondary={true} style={style} />
				<RaisedButton label="Reset"  style={style} />
			</div>
		)
	}
}

module.exports = ControlButton