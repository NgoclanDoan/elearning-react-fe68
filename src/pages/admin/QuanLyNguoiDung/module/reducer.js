const {
	LAY_DANH_SACH_NGUOI_DUNG_SUCCESS,
	LAY_DANH_SACH_NGUOI_DUNG_REQUEST,
	TIM_KIEM_NGUOI_DUNG,
} = require('./types');

const initialState = {
	danhSachNguoiDung: [],
	loading: false,
};
const quanLyNguoiDungReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case LAY_DANH_SACH_NGUOI_DUNG_REQUEST:
			return { ...state, loading: true };
		case LAY_DANH_SACH_NGUOI_DUNG_SUCCESS:
			return { ...state, danhSachNguoiDung: payload, loading: false };
		case TIM_KIEM_NGUOI_DUNG:
			return { ...state, danhSachNguoiDung: payload, loading: false };

		default:
			return { ...state };
	}
};
export default quanLyNguoiDungReducer;
