import Home from 'pages/client/Home/Home';

import QuanLyNguoiDung from 'pages/admin/QuanLyNguoiDung/QuanLyNguoiDung';
import QuanLyKhoaHoc from 'pages/admin/QuanLyKhoaHoc/QuanLyKhoaHoc';

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
		path: '/admin/nguoidung',
		component: QuanLyNguoiDung,
		exact: true,
		isPrivate: false,
	},
	{
		path: '/admin/khoahoc',
		component: QuanLyKhoaHoc,
		exact: true,
		isPrivate: false,
	},
];
