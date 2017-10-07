import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TimerSelect from '../container/TimerSelect';
import PomodoroBar from '../container/PomodoroBar';
import Timer from '../container/Timer';
import ControlButton from '../container/ControlButton';

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<MuiThemeProvider>
				<PomodoroBar />
				<div className='pomodoro'>
					<TimerSelect />
					<Timer />
					<ControlButton />
				</div>

			</MuiThemeProvider>
		)
	}
}

module.exports = App