import { combineReducers, createStore } from 'redux';
import authReducer from 'pages/shared/Auth/Module/reducers';

const rootReducer = combineReducers({ authReducer });

const store = createStore(rootReducer);

export default store;
