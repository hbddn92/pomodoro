import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import { countdown } from '../actions'

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
		this.props.dispatch(countdown(parseInt(value)))
	}

	render() {
		return(
			<div className="timerSelect">
				<Tabs value={this.state.value} onChange={this.handleChange.bind(this)}>
					<Tab label="Pomodoro" 	value="1500"></Tab>
					<Tab label="Short Break" value="300"></Tab>
					<Tab label="Long Break" value="600"></Tab>
				</Tabs>
			</div>
		)
	}
}

TimerSelect = connect()(TimerSelect)

module.exports = TimerSelect