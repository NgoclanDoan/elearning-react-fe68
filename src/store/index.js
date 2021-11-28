import { combineReducers, createStore } from 'redux';
import authReducer from 'pages/shared/Auth/module/reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import quanLyKhoaHocReducer from 'pages/admin/QuanLyKhoaHoc/module/reducer';
import quanLyNguoiDungReducer from 'pages/admin/QuanLyNguoiDung/module/reducer';

const rootReducer = combineReducers({
	authReducer,
	quanLyKhoaHocReducer,
	quanLyNguoiDungReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['authReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
	persistedReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export { store, persistor };
