import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import withLayout from 'hocs/withLayout';

function ClientLayout(props) {
	return (
		<div>
			<Header />
			{props.children}
			<Footer />
		</div>
	);
}

export default withLayout(ClientLayout);
