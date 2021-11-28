import { Button, Input, Select, Form } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import regex from 'utils/validateRegex';
import nguoiDungApi from 'apis/nguoiDungApi';

const { Option } = Select;

const AddNguoiDung = () => {
	const { phoneNumber, notContainNumber, leastTwoName } = regex;

	const history = useHistory();

	const { accessToken } = useSelector(
		(state) => state.authReducer.currentUser
	);

	const formik = useFormik({
		initialValues: {
			taiKhoan: '',
			matKhau: '',
			hoTen: '',
			soDt: '',
			maLoaiNguoiDung: 'HV',
			maNhom: 'GP01',
			email: '',
		},
		validationSchema: Yup.object({
			taiKhoan: Yup.string()
				.min(2, 'Mininum 2 characters')
				.max(30, 'Maximum 100 characters')
				.required('Required!'),
			hoTen: Yup.string()
				.min(2, 'Mininum 2 characters')
				.max(50, 'Maximum 100 characters')
				.matches(notContainNumber, 'Not contain number')
				.matches(leastTwoName, 'Enter at least 2 names')
				.required('Full name is required'),
			matKhau: Yup.string()
				.min(
					6,
					({ min }) => `Password must be at least ${min} characters`
				)
				.matches(/\d/, 'Password must have a number')
				.required('Required'),
			soDt: Yup.string()
				.matches(phoneNumber, 'Enter a valid phone number')
				.required('Phone number is required!'),
			email: Yup.string()
				.email('Please enter valid email')
				.required('Email is required'),
		}),
		onSubmit: (values) => {
			console.log(values);
			nguoiDungApi
				.themNguoiDung(values, accessToken)
				.then(() => {
					alert(`Thêm thành công!`);
					history.push('/admin/nguoidung');
				})
				.catch((err) => alert(err.response.data));
		},
	});

	const handleOptionChange = (name) => {
		return (value) => {
			formik.setFieldValue(name, value);
		};
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
					label='Tài khoản'
					validateStatus={
						formik.errors.taiKhoan &&
						formik.touched.taiKhoan &&
						'error'
					}
					help={
						formik.errors.taiKhoan &&
						formik.touched.taiKhoan &&
						formik.errors.taiKhoan
					}
					hasFeedback>
					<Input
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.taiKhoan}
						name='taiKhoan'
						id={
							formik.errors.taiKhoan &&
							formik.touched.taiKhoan &&
							'error2'
						}
					/>
				</Form.Item>
				<Form.Item
					label='Mật khẩu'
					rules={[
						{
							required: true,
						},
					]}
					validateStatus={
						formik.errors.matKhau &&
						formik.touched.matKhau &&
						'error'
					}
					help={
						formik.errors.matKhau &&
						formik.touched.matKhau &&
						formik.errors.matKhau
					}
					hasFeedback>
					<Input.Password
						name='matKhau'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.matKhau}
						id={
							formik.errors.matKhau &&
							formik.touched.matKhau &&
							'error2'
						}
					/>
				</Form.Item>
				<Form.Item
					label='Họ tên'
					validateStatus={
						formik.errors.hoTen && formik.touched.hoTen && 'error'
					}
					help={
						formik.errors.hoTen &&
						formik.touched.hoTen &&
						formik.errors.hoTen
					}
					hasFeedback>
					<Input
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.hoTen}
						name='hoTen'
						id={
							formik.errors.hoTen &&
							formik.touched.hoTen &&
							'error2'
						}
					/>
				</Form.Item>

				<Form.Item
					label='Email'
					validateStatus={
						formik.errors.email && formik.touched.email && 'error'
					}
					help={
						formik.errors.email &&
						formik.touched.email &&
						formik.errors.email
					}
					hasFeedback>
					<Input
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
						name='email'
						id={
							formik.errors.email &&
							formik.touched.email &&
							'error2'
						}
					/>
				</Form.Item>
				<Form.Item
					label='Số điện thoại'
					validateStatus={
						formik.errors.soDt && formik.touched.soDt && 'error'
					}
					help={
						formik.errors.soDt &&
						formik.touched.soDt &&
						formik.errors.soDt
					}
					hasFeedback>
					<Input
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.soDt}
						name='soDt'
						id={
							formik.errors.soDt &&
							formik.touched.soDt &&
							'error2'
						}
					/>
				</Form.Item>
				<Form.Item label='Select'>
					<Select
						name='maLoaiNguoiDung'
						defaultValue={formik.values.maLoaiNguoiDung}
						onChange={handleOptionChange('maLoaiNguoiDung')}
						onBlur={formik.handleBlur}>
						<Option value='HV'>Học viên</Option>
						<Option value='GV'>Giáo vụ</Option>
					</Select>
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

export default AddNguoiDung;
