import Home from 'pages/client/Home';
import Dashboard from 'pages/admin/Dashboard/Dashboard';

export const clientRoutes = [
	{
		path: '/',
		component: Home,
		exact: true,
		isPrivate: false,
	},
];

export const adminRoutes = [
	{
		path: '/admin',
		component: Dashboard,
		exact: true,
		isPrivate: true,
	},
];
