import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';

const khoaHocApi = {
	layDanhSachKhoaHoc() {
		return callApi(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_ID}`);
	},
	themKhoaHoc(khoahoc, accessToken) {
		return callApi(
			'QuanLyKhoaHoc/ThemKhoaHoc',
			'POST',
			khoahoc,
			accessToken
		);
	},
	xoaKhoaHoc(maKH, accessToken) {
		return callApi(
			`QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKH}`,
			'DELETE',
			maKH,
			accessToken
		);
	},
};
export default khoaHocApi;
