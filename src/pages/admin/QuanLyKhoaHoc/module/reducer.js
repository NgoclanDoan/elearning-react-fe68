const {
	LAY_DANH_SACH_KHOA_HOC_SUCCESS,
	LAY_DANH_SACH_KHOA_HOC_REQUEST,
} = require('./types');

const initialState = {
	danhSachKhoaHoc: [],
	loading: false,
};
const quanLyKhoaHocReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case LAY_DANH_SACH_KHOA_HOC_REQUEST:
			return { ...state, loading: true };
		case LAY_DANH_SACH_KHOA_HOC_SUCCESS:
			return { ...state, danhSachKhoaHoc: payload, loading: false };

		default:
			return { ...state };
	}
};
export default quanLyKhoaHocReducer;
