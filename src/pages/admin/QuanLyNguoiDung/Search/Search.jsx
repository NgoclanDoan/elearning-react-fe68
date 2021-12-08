import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'hooks/useDebouce';
import nguoiDungApi from 'apis/nguoiDungApi';
import {
	actLayDanhSachNguoiDungRequest,
	actTimKiemNguoiDung,
} from '../module/action';

function Search() {
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState('');
	const searchbarRef = useRef();
	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	// Effect for API call
	useEffect(
		() => {
			// setIsSearching(true);
			searchCharacters(debouncedSearchTerm).then((results) => {
				// setIsSearching(false);
				dispatch(actLayDanhSachNguoiDungRequest());
				setTimeout(
					() => dispatch(actTimKiemNguoiDung(results.data)),
					300
				);
				console.log(results.data);
			});
		},
		[debouncedSearchTerm] // Only call effect if debounced search term changes
	);
	const searchCharacters = (search) => {
		if (search.length > 0) {
			return nguoiDungApi.timKiemNguoiDung(search);
		}
		return nguoiDungApi.layDanhSachNguoiDung();
	};

	return (
		<div>
			<div
				className='absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none'
				ref={searchbarRef}>
				<span className='text-gray-500 sm:text-sm'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
							clipRule='evenodd'
						/>
					</svg>
				</span>
			</div>
			<input
				onChange={(e) => setSearchTerm(e.target.value)}
				value={searchTerm}
				type='text'
				name='price'
				id='price'
				className='focus:ring-indigo-500 focus:border-indigo-500 block w-full px-12 sm:text-sm border-gray-300 rounded-md'
				placeholder={'Search'}
			/>
		</div>
	);
}

export default Search;
