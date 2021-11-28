import khoaHocApi from 'apis/khoaHocApi';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import {
	actLayDanhSachKhoaHocRequest,
	actLayDanhSachKhoaHocSuccess,
} from './module/action';
import TableKhoaHoc from './TableKhoaHoc/TableKhoaHoc';

function QuanLyKhoaHoc({ history }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actLayDanhSachKhoaHocRequest());
		khoaHocApi
			.layDanhSachKhoaHoc()
			.then((res) => dispatch(actLayDanhSachKhoaHocSuccess(res.data)))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<Breadcrumb />

			<div className='flex justify-between items-center mb-4'>
				<NavLink to='/admin/khoahoc/add'>
					<button className='px-4 bg-green-500 flex justify-between items-center w-44 h-10 hover:bg-green-700'>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g opacity='0.8'>
								<path
									d='M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z'
									stroke='#fff'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z'
									stroke='#fff'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z'
									stroke='#fff'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M14 7H20'
									stroke='#fff'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M17 4V10'
									stroke='#fff'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</g>
						</svg>
						<p className='text-base leading-5 text-white'>
							Thêm khóa học
						</p>
					</button>
				</NavLink>
			</div>

			{/* Table khoa hoc */}
			<TableKhoaHoc history={history} />
		</div>
	);
}

export default QuanLyKhoaHoc;
