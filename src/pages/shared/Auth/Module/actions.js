import { LOGIN_REQUEST, LOGIN_SUCCESS } from './types';

const actLoginRequest = () => ({
	type: LOGIN_REQUEST,
});

const actLoginSuccess = (currentUser) => ({
	type: LOGIN_SUCCESS,
	payload: currentUser,
});

const actLoginFail = (error) => ({
	type: LOGIN_FAIL,
	payload: error,
});

export const actLogin = (user, history) => {
	return (dispatch) => {};
};

export const actLogout = () => ({
	type: LOGOUT,
	payload: null,
});
