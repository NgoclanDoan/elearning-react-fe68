import callApi from 'utils/callApi';

export default nguoiDungApi = {
	layDanhSachLoaiNguoiDung() {
		return callApi('QuanLyNguoiDung/LayDanhSachLoaiNguoiDung');
	},
};
