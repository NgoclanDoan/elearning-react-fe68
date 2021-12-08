import {
	LAY_DANH_SACH_NGUOI_DUNG_SUCCESS,
	LAY_DANH_SACH_NGUOI_DUNG_REQUEST,
	THEM_NGUOI_DUNG,
	TIM_KIEM_NGUOI_DUNG,
} from './types';

export const actLayDanhSachNguoiDungSuccess = (danhSachNguoiDung) => ({
	type: LAY_DANH_SACH_NGUOI_DUNG_SUCCESS,
	payload: danhSachNguoiDung,
});
export const actLayDanhSachNguoiDungRequest = () => ({
	type: LAY_DANH_SACH_NGUOI_DUNG_REQUEST,
});
export const actThemNguoiDung = (values) => ({
	type: THEM_NGUOI_DUNG,
	payload: values,
});
export const actTimKiemNguoiDung = (hoTen) => ({
	type: TIM_KIEM_NGUOI_DUNG,
	payload: hoTen,
});
