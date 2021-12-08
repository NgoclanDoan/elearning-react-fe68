import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import nguoiDungApi from 'apis/nguoiDungApi';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import {
	actLayDanhSachNguoiDungRequest,
	actLayDanhSachNguoiDungSuccess,
} from './module/action';
import TableNguoiDung from './TableNguoiDung';
import { NavLink } from 'react-router-dom';
import Search from './Search/Search';

export default function QuanLyNguoiDung(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actLayDanhSachNguoiDungRequest());
		nguoiDungApi
			.layDanhSachNguoiDung()
			.then((res) => dispatch(actLayDanhSachNguoiDungSuccess(res.data)))
			.catch((err) => console.log(err));
	}, []);
	return (
		<>
			<Breadcrumb />
			<div className='flex justify-between items-center mb-4'>
				<NavLink to='/admin/nguoidung/add'>
					<button className='px-4 bg-green-500 flex justify-center items-center w-44 h-10 hover:bg-green-700 text-white'>
						<p className='text-base leading-5'>Thêm ngườI dùng </p>
					</button>
				</NavLink>
				{/* Search term */}
				<div className='relative rounded-md shadow-sm'>
					<Search />
				</div>
			</div>

			<TableNguoiDung />
		</>
	);
}
