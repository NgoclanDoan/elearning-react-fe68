import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from './types';

export const actLoginRequest = () => ({
	type: LOGIN_REQUEST,
});

export const actLoginSuccess = (currentUser) => ({
	type: LOGIN_SUCCESS,
	payload: currentUser,
});

export const actLoginFail = (error) => ({
	type: LOGIN_FAIL,
	payload: error,
});

export const actLogout = () => ({
	type: LOGOUT,
	payload: null,
});
