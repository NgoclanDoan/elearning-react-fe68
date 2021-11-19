import React, { Component } from 'react';
import './Loader.css';

export default class Loader extends Component {
	render() {
		return (
			<div>
				<div class='loader'>
					<div class='loader__outer'></div>
					<div class='loader__middle'></div>
					<div class='loader__inner'></div>
				</div>
			</div>
		);
	}
}
