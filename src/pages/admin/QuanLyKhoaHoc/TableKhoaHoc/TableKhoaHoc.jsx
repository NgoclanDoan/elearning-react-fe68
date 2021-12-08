import React, { Fragment } from 'react';
import { Switch, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { IMG_KHOA_HOC } from 'settings/imgKhoaHocErrorConfig';
import { handleImgError } from 'utils/handleImgError';
import { truncateString } from 'utils/handleString';
import { NavLink, useHistory } from 'react-router-dom';
import khoaHocApi from 'apis/khoaHocApi';

function onChange(pagination, filters, sorter, extra) {
	console.log('params', pagination, filters, sorter, extra);
}

function TableKhoaHoc() {
	const history = useHistory();
	const { danhSachKhoaHoc, loading } = useSelector(
		(state) => state.quanLyKhoaHocReducer
	);
	const { accessToken } = useSelector(
		(state) => state.authReducer.currentUser
	);

	const handleDeleteButton = (maKhoaHoc, accessToken) => {
		khoaHocApi
			.xoaKhoaHoc(maKhoaHoc, accessToken)
			.then((res) => history.push('/admin/khoahoc'))
			.catch((err) => alert(err));
	};

	const columns = [
		{
			title: 'Tên khóa học',
			dataIndex: 'tenKhoaHoc',
			key: 'tenKhoaHoc',
			className: ' w-2/12',
			render: (text, khoaHoc, idx) => (
				<Fragment key={idx}>
					<p>{khoaHoc.tenKhoaHoc}</p>
					<span>
						<Tag color='#2db7f6'>
							{khoaHoc.danhMucKhoaHoc.tenDanhMucKhoaHoc.toUpperCase()}
						</Tag>
					</span>
				</Fragment>
			),

			// specify the condition of filtering result
			// here is that finding the name started with `value`
			sorter: (a, b) => a.tenKhoaHoc.length - b.tenKhoaHoc.length,
		},
		{
			title: 'Hình ảnh',
			dataIndex: 'hinhAnh',
			className: ' w-2/12',
			render: (text, khoaHoc, idx) => (
				<Fragment key={idx}>
					<div className='flex justify-center items-center'>
						<img
							src={khoaHoc.hinhAnh}
							alt={khoaHoc.hinhAnh}
							onError={(e) => handleImgError(e, IMG_KHOA_HOC)}
							className='w-full'
						/>
					</div>
				</Fragment>
			),
		},

		{
			title: 'Mô tả',
			dataIndex: 'moTa',
			className: ' w-2/12',
			render: (text, khoaHoc, idx) => (
				<Fragment key={idx}>
					{khoaHoc.moTa.length > 50
						? truncateString(khoaHoc.moTa, 50)
						: khoaHoc.moTa}
				</Fragment>
			),
			// specify the condition of filtering result
			// here is that finding the name started with `value`
			sorter: (a, b) => a.moTa.length - b.moTa.length,
			sortDirections: ['descend'],
		},
		{
			title: 'NgườI tạo',
			dataIndex: 'nguoiTao',
			key: 'nguoiTao',
			render: (text, khoaHoc, idx) => (
				<Fragment key={idx}>
					<span>
						<p>{khoaHoc.nguoiTao.hoTen}</p>
						<Tag color='#f50'>
							{khoaHoc.nguoiTao.tenLoaiNguoiDung.toUpperCase()}
						</Tag>
					</span>
				</Fragment>
			),
			// specify the condition of filtering result
			// here is that finding the name started with `value`
			sorter: (a, b) => {
				let nguoiTaoA = a.nguoiTao.hoTen.toLowerCase().trim();
				let nguoiTaoB = b.nguoiTao.hoTen.toLowerCase().trim();
				if (nguoiTaoA > nguoiTaoB) {
					return 1;
				}
				return -1;
			},
			sortDirections: ['descend', 'ascend'],
		},
		{
			title: 'Ngày tạo',
			dataIndex: 'ngayTao',
			className: ' w-1/12',
		},
		{
			title: 'Hiển thị',
			dataIndex: '',
			className: 'text-center',

			render: () => <Switch defaultChecked />,
		},

		{
			title: 'Action',
			dataIndex: '',
			key: 'x',
			render: (text, khoaHoc, idx) => (
				<Fragment key={idx}>
					<NavLink
						key={1}
						to={`/admin/khoahoc/edit/${khoaHoc.maKhoaHoc}`}>
						<EditOutlined
							type='button'
							className='px-2 py-1 rounded text-blue-500 text-sm border-2 border-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer'
						/>
					</NavLink>
					<DeleteOutlined
						type='button'
						className='px-2 py-1 ml-2 rounded text-red-500 text-sm border-2 border-red-500 hover:bg-red-500 hover:text-white cursor-pointer'
						onClick={() =>
							handleDeleteButton(khoaHoc.maKhoaHoc, accessToken)
						}
					/>
				</Fragment>
			),
		},
	];

	return (
		<div>
			<Table
				loading={loading ? true : false}
				bordered
				columns={columns}
				dataSource={danhSachKhoaHoc}
				onChange={onChange}
			/>
		</div>
	);
}

export default TableKhoaHoc;
