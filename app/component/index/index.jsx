import React, {Component} from 'react';
// import '../../public/css/index.pcss';
import '../../public/css/style.less';

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
			<div className='cont'>
				<div className='top'>这是头部</div>
				<div className='bottom'>
					Seconds: {this.state.seconds}
				</div>
				<div className='pngIcon'></div>
			</div>
		);
	}
}

export default Index;