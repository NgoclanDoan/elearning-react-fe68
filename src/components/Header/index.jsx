import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	const [show, setshow] = useState(false);
	return (
		<div>
			<h1>Header component !!</h1>
		</div>
	);
}
