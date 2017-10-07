import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import { selectPagkageTime, setInitalPackageTime } from '../actions'

const style = {
	margin: 0,
};

class TimerSelect extends React.Component{
	constructor() {
		super();
		this.state = ({value : '1500'})

	}

	handleChange(value) {
		// this.props.dispatch(countdown(parseInt(value)))
		this.props.dispatch(selectPagkageTime(parseInt(value)))
		this.props.dispatch(setInitalPackageTime(parseInt(value)))
		this.setState({value: value});
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