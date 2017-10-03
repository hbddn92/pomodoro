import React from 'react'
import AppBar from 'material-ui/AppBar';

const style = {
	marginBottom: "20px",
};

class PomodoroBar extends React.Component{
	constructor() {
		super()
	}
	render() {
		return(
			<AppBar style={style} title="POMODORO" iconClassNameRight="muidocs-icon-navigation-expand-more" />
		)
	}
}

module.exports = PomodoroBar