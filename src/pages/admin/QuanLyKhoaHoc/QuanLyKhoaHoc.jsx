import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import TableKhoaHoc from './TableKhoaHoc/TableKhoaHoc';

function QuanLyKhoaHoc() {
	return (
		<div>
			<Breadcrumb />

			<div className='flex justify-between items-center mb-4'>
				<h1 className='text-2xl font-bold text-gray-900'>
					QUẢN LÝ KHÓA HỌC
				</h1>
				{/* Search term */}
				<div className='relative'>
					<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
						<svg
							className='w-5 h-5 text-gray-400'
							viewBox='0 0 24 24'
							fill='none'>
							<path
								d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
								stroke='currentColor'
								strokeWidth={2}
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</span>
					<input
						type='text'
						className='w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
						placeholder='Search'
					/>
				</div>

				<div className='relative rounded-md shadow-sm'>
					<div className='absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none'>
						<span className='text-gray-500 sm:text-sm'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='h-5 w-5'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path
									fill-rule='evenodd'
									d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
									clip-rule='evenodd'
								/>
							</svg>
						</span>
					</div>
					<input
						type='text'
						name='price'
						id='price'
						className='focus:ring-indigo-500 focus:border-indigo-500 block w-full px-12 sm:text-sm border-gray-300 rounded-md'
						placeholder={'Search'}
					/>
				</div>
			</div>

			{/* Table khoa hoc */}
			<TableKhoaHoc />
		</div>
	);
}

export default QuanLyKhoaHoc;
