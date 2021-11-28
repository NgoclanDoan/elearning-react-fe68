import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table, Tag, Space } from 'antd';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import nguoiDungApi from 'apis/nguoiDungApi';

const TableNguoiDung = () => {
	const history = useHistory();
	const { danhSachNguoiDung, loading } = useSelector(
		(state) => state.quanLyNguoiDungReducer
	);
	const { accessToken } = useSelector(
		(state) => state.authReducer.currentUser
	);

	const handleDeleteButton = (maNguoiDung, accessToken) => {
		nguoiDungApi
			.xoaNguoiDung(maNguoiDung, accessToken)
			.then((res) => {
				alert('Xóa người dùng thành công!');
			})
			.catch((err) => alert(err.response.data));
		console.log(maNguoiDung, accessToken);
	};
	const columns = [
		{
			title: 'ID',
			dataIndex: 'name',
			key: 'name',
			className: ' w-1/6',
			render: (text, nguoiDung, idx) => (
				<Fragment key={idx}>
					<div className='flex justify-center items-center'>
						<div className='w-2/5'>
							<img src='https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=CollarSweater&clotheColor=Red&eyeType=Side&eyebrowType=UpDownNatural&mouthType=Tongue&skinColor=Light' />
						</div>
						<div className='w-4/5 flex flex-col items-start ml-3'>
							<h3 className='mb-2 font-bold'>
								{nguoiDung.taiKhoan}
							</h3>
							<Tag
								color={
									nguoiDung.maLoaiNguoiDung === 'HV'
										? '#58b4ff'
										: '#00cb62'
								}>
								{nguoiDung.maLoaiNguoiDung === 'HV'
									? 'Học viên'
									: 'Giáo viên'}
							</Tag>
						</div>
					</div>
				</Fragment>
			),
		},
		{
			title: 'Fullname',
			dataIndex: 'hoTen',
			key: 'hoTen',
			className: ' w-1/6',
			sorter: (a, b) => {
				let hoTenNguoiDungA = a.hoTen;
				let hoTenNguoiDungB = b.hoTen;
				// Giảm dần (Z đến A):
				return hoTenNguoiDungB.localeCompare(hoTenNguoiDungA);
			},
			sortDirections: ['descend'],
		},
		{
			title: 'Số điện thoại',
			dataIndex: 'soDt',
			className: ' w-1/6',
			key: 'soDt',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			className: ' w-1/6',
			key: 'email',
			sorter: (a, b) => {
				let emailNguoiDungA = a.email;
				let emailNguoiDungB = b.email;
				// Giảm dần (Z đến A):
				return emailNguoiDungB.localeCompare(emailNguoiDungA);
			},
			sortDirections: ['descend'],
		},

		{
			title: 'Action',
			dataIndex: '',
			className: ' w-1/6',
			key: 'x',
			render: (text, nguoiDung, idx) => (
				<Fragment key={idx}>
					<NavLink
						key={1}
						to={`/admin/nguoidung/edit/${nguoiDung.taiKhoan}`}>
						<EditOutlined
							type='button'
							className='px-2 py-1 rounded text-blue-500 text-sm border-2 border-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer'
						/>
					</NavLink>
					<DeleteOutlined
						type='button'
						className='px-2 py-1 ml-2 rounded text-red-500 text-sm border-2 border-red-500 hover:bg-red-500 hover:text-white cursor-pointer'
						onClick={() =>
							handleDeleteButton(nguoiDung.taiKhoan, accessToken)
						}
					/>
				</Fragment>
			),
		},
	];
	return (
		<Table
			loading={loading ? true : false}
			columns={columns}
			dataSource={danhSachNguoiDung}
		/>
	);
};
export default TableNguoiDung;
