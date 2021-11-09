import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';

export default khoaHocApi = {
	layDanhSachKhoaHoc() {
		return callApi(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_ID}`);
	},
};
