import {
	Button,
	Cascader,
	DatePicker,
	Input,
	InputNumber,
	Select,
	Switch,
	TreeSelect,
	Form,
} from 'antd';
import { Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentDate } from 'utils/getCurrentDate';
import { UUID } from 'utils/UUID';
import * as Yup from 'yup';
import khoaHocApi from 'apis/khoaHocApi';
import { useHistory } from 'react-router-dom';

const { Option } = Select;

const AddKhoaHoc = () => {
	const history = useHistory();
	const [imageUrl, setSrcImg] = useState('');
	const [visibleImg, setVisibleImg] = useState({ display: 'none' });

	const { taiKhoan, accessToken } = useSelector(
		(state) => state.authReducer.currentUser
	);

	const formik = useFormik({
		initialValues: {
			maKhoaHoc: UUID(),
			biDanh: 'Development',
			tenKhoaHoc: '',
			moTa: '',
			luotXem: 0,
			danhGia: 0,
			hinhAnh: '',
			maNhom: 'GP01',
			ngayTao: getCurrentDate(),
			maDanhMucKhoaHoc: 'BackEnd',
			taiKhoanNguoiTao: taiKhoan,
		},
		validationSchema: Yup.object({
			tenKhoaHoc: Yup.string()
				.min(2, 'Mininum 2 characters')
				.max(100, 'Maximum 100 characters')
				.required('Required!'),

			// hinhAnh: Yup.mixed()
			// 	.required('A file is required')
			// 	.test('fileSize', 'File Size is too large', (value) => {
			// 		if (!value.length) return true; // attachment is optional
			// 		return value[0].size <= 5000000;
			// 	})
			// 	.test('fileType', 'Unsupported File Format', (value) => {
			// 		return (
			// 			value &&
			// 			[
			// 				'image/jpg',
			// 				'image/jpeg',
			// 				'image/gif',
			// 				'image/png',
			// 			].includes(value.type)
			// 		);
			// 	}),
		}),
		onSubmit: (values) => {
			console.log(values);
			khoaHocApi
				.themKhoaHoc(values, accessToken)
				.then(() => history.push('/admin/khoahoc'))
				.catch((err) => console.log(err));
		},
	});

	const handleOptionChange = (name) => {
		return (value) => {
			formik.setFieldValue(name, value);
		};
	};

	const handleFileChange = (e) => {
		//console.log(e);

		// get a file object in FileList
		let file = e.target.files[0] || '';

		// create a FileReader object to read file
		let readerFile = new FileReader();

		// get url from file passed
		if (file && file.type.match('image.*')) {
			readerFile.readAsDataURL(file);
			// create a event by onload function to get result base64 image
			readerFile.onload = (e) => {
				setSrcImg(e.target.result || '');
			};

			// set file data into formik
			formik.setFieldValue('hinhAnh', file.name);
			setVisibleImg({ display: 'block' });
		}
	};

	return (
		<>
			<Form
				labelCol={{
					span: 4,
				}}
				wrapperCol={{
					span: 14,
				}}
				layout='horizontal'
				onSubmitCapture={formik.handleSubmit}
				scrollToFirstError>
				<Form.Item
					label='Tên khóa học'
					validateStatus={
						formik.errors.tenKhoaHoc &&
						formik.touched.tenKhoaHoc &&
						'error'
					}
					help={
						formik.errors.tenKhoaHoc &&
						formik.touched.tenKhoaHoc &&
						formik.errors.tenKhoaHoc
					}
					hasFeedback>
					<Input
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.tenKhoaHoc}
						name='tenKhoaHoc'
						id={
							formik.errors.tenKhoaHoc &&
							formik.touched.tenKhoaHoc &&
							'error2'
						}
					/>
				</Form.Item>

				<Form.Item label='Select'>
					<Select
						name='maDanhMucKhoaHoc'
						defaultValue={formik.values.maDanhMucKhoaHoc}
						onChange={handleOptionChange('maDanhMucKhoaHoc')}
						onBlur={formik.handleBlur}>
						<Option value='BackEnd'>BackEnd</Option>
						<Option value='Design'>Design</Option>
						<Option value='DiDong'>DiDong</Option>
						<Option value='FrontEnd'>FrontEnd</Option>
						<Option value='FullStack'>FullStack</Option>
						<Option value='TuDuy'>TuDuy</Option>
					</Select>
				</Form.Item>

				<Form.Item name='moTa' label='Mô tả'>
					<Input.TextArea
						showCount
						maxLength={200}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.moTa}
					/>
				</Form.Item>
				{formik.errors.moTa && formik.touched.moTa && (
					<p>{formik.errors.moTa}</p>
				)}
				<Form.Item
					label='Hình ảnh'
					validateStatus={
						formik.errors.hinhAnh &&
						formik.touched.hinhAnh &&
						'error'
					}
					help={
						formik.errors.hinhAnh &&
						formik.touched.hinhAnh &&
						formik.errors.hinhAnh
					}>
					<input
						name='hinhAnh'
						type='file'
						onChange={handleFileChange}
						onBlur={formik.handleBlur}
						accept='image/*'
					/>
					<br />
					<img
						src={imageUrl}
						alt={imageUrl}
						width={120}
						height={120}
						style={visibleImg}
					/>
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 4, span: 16 }}>
					<Button type='primary' htmlType='submit'>
						Thêm khóa học
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default AddKhoaHoc;
