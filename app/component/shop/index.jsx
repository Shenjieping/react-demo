import React, {Component} from 'react';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0
		};
	}
	tick() {
		this.setState(precState => ({
			seconds: precState.seconds + 1
		}));
	}
	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		this.interval && clearInterval(this.interval);
	}
	render() {
		return (
			<div>
				这是商城
				Seconds: {this.state.seconds}
			</div>
		);
	}
}
export default Index;