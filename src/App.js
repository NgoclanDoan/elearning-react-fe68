import React, { Suspense } from 'react';
import AdminLayout from 'layouts/AdminLayout';
import ClientLayout from 'layouts/ClientLayout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { adminRoutes, clientRoutes } from 'routes';
import Loader from './components/Loader/Loader';
import AuthRoute from './hocs/AuthRoute';

//Lazy load - Code splitting
const Login = React.lazy(() => import('pages/shared/Auth/Login'));
const Signup = React.lazy(() => import('pages/shared/Auth/Signup'));
const PageNotFound = React.lazy(() => import('pages/shared/PageNotFound'));

function App() {
	const renderLayout = (routes, Layout) => {
		return routes.map((route, idx) => {
			const { path, component, exact, isPrivate } = route;
			return (
				<Layout
					key={idx}
					path={path}
					component={component}
					exact={exact}
					isPrivate={isPrivate}
				/>
			);
		});
	};
	return (
		<div className='app'>
			<Suspense fallback={<Loader />}>
				<Router>
					<Switch>
						{renderLayout(clientRoutes, ClientLayout)}
						{renderLayout(adminRoutes, AdminLayout)}
						<AuthRoute path='/login'>
							<Login />
						</AuthRoute>
						{/* <Route path='/login' component={Login} /> */}
						<Route path='/signup' component={Signup} />
						<Route path='*' component={PageNotFound} />
					</Switch>
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
