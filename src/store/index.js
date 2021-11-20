import { combineReducers, createStore } from 'redux';
import authReducer from 'pages/shared/Auth/module/reducers';

const rootReducer = combineReducers({ authReducer });

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
