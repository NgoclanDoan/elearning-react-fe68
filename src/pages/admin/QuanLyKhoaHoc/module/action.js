import {
	LAY_DANH_SACH_KHOA_HOC_SUCCESS,
	LAY_DANH_SACH_KHOA_HOC_REQUEST,
	THEM_KHOA_HOC,
} from './types';

export const actLayDanhSachKhoaHocSuccess = (danhSachKhoaHoc) => ({
	type: LAY_DANH_SACH_KHOA_HOC_SUCCESS,
	payload: danhSachKhoaHoc,
});
export const actLayDanhSachKhoaHocRequest = () => ({
	type: LAY_DANH_SACH_KHOA_HOC_REQUEST,
});
export const actThemKhoaHoc = (values) => ({
	type: THEM_KHOA_HOC,
	payload: values,
});
