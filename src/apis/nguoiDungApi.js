import callApi from 'utils/callApi';
import { GROUP_ID } from '../settings/apiConfig';

const nguoiDungApi = {
	layDanhSachLoaiNguoiDung() {
		return callApi('QuanLyNguoiDung/LayDanhSachLoaiNguoiDung');
	},
	dangNhap(user) {
		return callApi('QuanLyNguoiDung/DangNhap', 'POST', user);
	},
	dangKy(userInfo) {
		return callApi('QuanLyNguoiDung/DangKy', 'POST', userInfo);
	},
	thongTinNguoiDung(accessToken) {
		return callApi(
			'QuanLyNguoiDung/ThongTinNguoiDung',
			'POST',
			accessToken
		);
	},
	layDanhSachNguoiDung() {
		return callApi('QuanLyNguoiDung/LayDanhSachNguoiDung');
	},
	layDanhSachNguoiDungPhanTrang(paginationTerm) {
		return callApi(
			`QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${GROUP_ID}${paginationTerm}`
		);
	},
	timKiemNguoiDung(searchTerm) {
		return callApi(
			`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${searchTerm}`
		);
	},
	timKiemNguoiDung(user) {
		return callApi('QuanLyNguoiDung/ThongTinTaiKhoan', 'POST', user);
	},
	timKiemNguoiDung(userInfo) {
		return callApi('QuanLyNguoiDung/ThemNguoiDung', 'POST', userInfo);
	},
	capNhatThongTinNguoiDung(userInfo, accessToken) {
		return callApi(
			'QuanLyNguoiDung/CapNhatThongTinNguoiDung',
			'PUT',
			userInfo,
			accessToken
		);
	},
	xoaNguoiDung(userName, accessToken) {
		return callApi(
			'QuanLyNguoiDung/XoaNguoiDung',
			'DELETE',
			userName,
			accessToken
		);
	},
	layDanhSachKhoaHocChuaGhiDanh(userName, accessToken) {
		return callApi(
			'QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh',
			'POST',
			userName,
			accessToken
		);
	},
	layDanhSachKhoaHocChoXetDuyet(userName, accessToken) {
		return callApi(
			'QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet',
			'POST',
			userName,
			accessToken
		);
	},
	layDanhSachKhoaHocDaXetDuyet(userName, accessToken) {
		return callApi(
			'QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet',
			'POST',
			userName,
			accessToken
		);
	},
	layDanhSachNguoiDungChuaGhiDanh(userName, accessToken) {
		return callApi(
			'QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh',
			'POST',
			userName,
			accessToken
		);
	},
	layDanhSachHocVienChoXetDuyet(userName, accessToken) {
		return callApi(
			'QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet',
			'POST',
			userName,
			accessToken
		);
	},
	layDanhSachHocVienKhoaHoc(userName, accessToken) {
		return callApi(
			'QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc',
			'POST',
			userName,
			accessToken
		);
	},
};
export default nguoiDungApi;
