import React, { Component } from 'react';
import './Loader.css';

export default class Loader extends Component {
	render() {
		return (
			<div>
				<div className='loader'>
					<div className='loader__outer' />
					<div className='loader__middle' />
					<div className='loader__inner' />
				</div>
			</div>
		);
	}
}
