import callApi from 'utils/callApi';

const nguoiDungApi = {
	layDanhSachLoaiNguoiDung() {
		return callApi('QuanLyNguoiDung/LayDanhSachLoaiNguoiDung');
	},
	dangNhap(user) {
		return callApi('QuanLyNguoiDung/DangNhap', 'POST', user);
	},
};
export default nguoiDungApi;
