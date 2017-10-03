import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';

const style = {
	margin: 0,
};

class TimerSelect extends React.Component{
	constructor() {
		super();
		this.state = ({value : 'a'})

	}

	handleChange(value) {
		this.setState({value: value})
	}

	render() {
		return(
			<div className="timerSelect">
				<Tabs value={this.state.value} onChange={this.handleChange.bind(this)}>
					<Tab label="Pomodoro" 	value="a"></Tab>
					<Tab label="Short Break" value="b"></Tab>
					<Tab label="Long Break" value="c"></Tab>
				</Tabs>
			</div>
		)
	}
}

module.exports = TimerSelect