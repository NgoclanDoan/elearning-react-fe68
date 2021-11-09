import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientLayout from 'layouts/ClientLayout';
import PageNotFound from 'pages/shared/PageNotFound';
import { adminRoutes, clientRoutes } from './routes';

function App() {
	const renderLayout = (routes, Layout) => {
		return routes.map((route) => {
			const { path, component, exact, isPrivate } = route;
			return (
				<Layout
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
			<Router>
				<Switch>
					{renderLayout(clientRoutes, ClientLayout)}
					{/* {renderLayout(adminRoutes, AdminLayout)} */}
					{/* <Route path='/login' componet={Login} /> */}
					<Route path='*' component={PageNotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
