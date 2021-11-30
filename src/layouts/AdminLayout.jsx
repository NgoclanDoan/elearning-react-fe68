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
	HomeOutlined,
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
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				style={{
					height: '100vh',
					position: 'fixed',
					left: 0,
					zIndex: 999,
				}}>
				<div className='p-2'>
					<NavLink
						className='flex items-center w-full px-3 mt-3 text-gray-500 hover:text-gray-400'
						to='/admin/nguoidung'>
						<svg
							className='w-12 h-12 '
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path d='M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z'></path>
						</svg>
						<span className='ml-2 text-xl uppercase font-bold'>
							The App
						</span>
					</NavLink>
				</div>
				<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
					<div className='flex flex-col items-center my-3 border-t border-gray-700'></div>

					<Menu.Item key='1' icon={<HomeOutlined />}>
						<NavLink to='/admin/nguoidung'>Dashboard</NavLink>
					</Menu.Item>
					<SubMenu
						key='sub1'
						icon={<UserOutlined />}
						title='Người dùng'>
						<Menu.Item key='2'>
							<NavLink to='/admin/nguoidung'>
								Quản lý người dùng
							</NavLink>
						</Menu.Item>
						<Menu.Item key='3'>
							<NavLink to='/admin/nguoidung/add'>
								Thêm người dùng
							</NavLink>
						</Menu.Item>
					</SubMenu>
					<SubMenu
						key='sub2'
						icon={<VideoCameraOutlined />}
						title='Khóa học'>
						<Menu.Item key='4'>
							<NavLink to='/admin/khoahoc'>
								Quản lý khóa học
							</NavLink>
						</Menu.Item>
						<Menu.Item key='5'>
							<NavLink to='/admin/khoahoc/add'>
								Thêm khóa học
							</NavLink>
						</Menu.Item>
					</SubMenu>

					<Menu.Item key='6' icon={<UploadOutlined />}>
						<NavLink to='/admin/ghidanh'>Ghi danh</NavLink>
					</Menu.Item>
					<div className='flex flex-col items-center mt-3 border-t border-gray-700'></div>
				</Menu>
			</Sider>
			<Layout className='site-layout'>
				<Header
					className='site-layout-background flex items-center justify-between bg-white'
					style={{
						padding: 0,
						position: 'fixed',
						width: '100%',
						zIndex: 800,
					}}>
					{React.createElement(
						collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
						{
							className: 'trigger text-2xl ml-60',
							onClick: () => toggle(),
						}
					)}
					<div className='relative mr-16'>
						<span className='absolute bottom-0 right-0 w-4 h-4 bg-green-600 border rounded-full text-green-600 border-gray-50' />
						<img
							src='https://source.unsplash.com/50x50/?portrait'
							alt='https://source.unsplash.com/50x50/?portrait'
							className='w-12 h-12 border rounded-full bg-gray-800 border-gray-800 '
						/>
					</div>
				</Header>
				<Content
					className='site-layout-background bg-white'
					style={{
						margin: '100px 16px 0 230px',
						overflow: 'initial',
						padding: 24,
						minHeight: 280,
					}}>
					<div
						className='site-layout-background'
						style={{ padding: 24, textAlign: 'center' }}>
						{props.children}
					</div>
				</Content>
			</Layout>
		</Layout>
	) : (
		<Redirect to='/' />
	);
}

export default withLayout(AdminLayout);
