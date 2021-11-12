import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div>
				<h1>Header!!!</h1>

				<div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'>
					<div className='flex-shrink-0'>
						<img
							className='h-12 w-12'
							src='https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg'
							alt='ChitChat Logo'
						/>
					</div>
					<div>
						<div className='text-xl font-medium text-black'>
							ChitChat
						</div>
						<p className='text-gray-500'>You have a new message!</p>
					</div>
				</div>
			</div>
		);
	}
}
