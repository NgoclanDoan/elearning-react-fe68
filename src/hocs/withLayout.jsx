import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const withLayout = (WrappedComponent) => {
	return ({ component: Component, isPrivate, ...rest }) => {
		const currentUser = useSelector(
			(state) => state.authReducer.currentUser
		);

		const content = (
			<Route
				{...rest}
				render={(routeProps) => (
					<WrappedComponent>
						<Component {...routeProps} />
					</WrappedComponent>
				)}
			/>
		);

		// Protect private routes
		if (isPrivate) {
			if (currentUser) {
				return content;
			}
			alert('Please login!');
			return <Redirect to='/' />;
		}
		return content;
	};
};

export default withLayout;
