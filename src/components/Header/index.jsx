import React, { useState } from 'react';

export default function Header() {
	const [show, setshow] = useState(false);
	return (
		<div className=' bg-white '>
			<h1>Header!!!</h1>
		</div>
	);
}
