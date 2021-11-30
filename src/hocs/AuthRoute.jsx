import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = (props) => {
	const currentUser = useSelector((state) => state.authReducer);

	console.log(currentUser.maLoaiNguoiDung);

	if (currentUser.maLoaiNguoiDung === 'GV')
		return <Redirect to='/admin/khoahoc' />;
	else if (currentUser.maLoaiNguoiDung === 'HV') return <Redirect to='/' />;

	return <Route {...props} />;
};

export default AuthRoute;
