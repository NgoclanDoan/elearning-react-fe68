import withLayout from 'hocs/withLayout';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	DesktopOutlined,
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Sider, Content } = Layout;

function AdminLayout(props) {
	const currentUser = useSelector((state) => state.authReducer.currentUser);

	const [collapsed, setCollapsed] = useState(false);

	const toggle = () => {
		setCollapsed(!collapsed);
	};

	return currentUser.maLoaiNguoiDung === 'GV' ? (
		<Layout
			style={{
				minHeight: '100vh',
			}}>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className='bg p-2'>
					<img
						src='https://source.unsplash.com/200x50/?portrait'
						alt='https://source.unsplash.com/200x50/?portrait'
					/>
				</div>
				<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
					<Menu.Item key='1' icon={<UserOutlined />}>
						<NavLink to='/admin/nguoidung'>
							Quản lý người dùng
						</NavLink>
					</Menu.Item>
					<SubMenu
						key='sub1'
						icon={<VideoCameraOutlined />}
						title='Khóa học'>
						<Menu.Item key='2'>
							<NavLink to='/admin/khoahoc'>
								Quản lý khóa học
							</NavLink>
						</Menu.Item>
						<Menu.Item key='3'>
							<NavLink to='/admin/khoahoc/add'>
								Thêm khóa học
							</NavLink>
						</Menu.Item>
					</SubMenu>

					<Menu.Item key='4' icon={<UploadOutlined />}>
						<NavLink to='/admin/ghidanh'>Ghi danh</NavLink>
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout className='site-layout'>
				<Header
					className='site-layout-background flex items-center justify-between bg-white'
					style={{ padding: 0 }}>
					{React.createElement(
						collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
						{
							className: 'trigger text-2xl ml-4',
							onClick: () => toggle(),
						}
					)}

					<div className='relative flex-shrink-0 mr-5 cursor-pointer'>
						<span className='absolute bottom-0 right-0 w-4 h-4 bg-green-600 border rounded-full text-coolGray-800 border-coolGray-50' />
						<img
							src='https://source.unsplash.com/50x50/?portrait'
							alt='https://source.unsplash.com/50x50/?portrait'
							className='w-12 h-12 border rounded-full bg-coolGray-500 border-coolGray-300'
						/>
					</div>
				</Header>
				<Content
					className='site-layout-background bg-white'
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
					}}>
					{props.children}
				</Content>
			</Layout>
		</Layout>
	) : (
		<Redirect to='/' />
	);
}

export default withLayout(AdminLayout);
