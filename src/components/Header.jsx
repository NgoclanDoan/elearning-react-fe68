import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';

export default class Header extends Component {
	render() {
		return (
			<div>
				<h1>Header Component!!!</h1>
				<Button type='primary'>PRESS ME</Button>
				<DatePicker placeholder='select date' />
			</div>
		);
	}
}
