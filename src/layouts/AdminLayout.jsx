import withLayout from 'hocs/withLayout';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from '@ant-design/icons';
import 'layouts/AdminLayout.css';

const { Header, Sider, Content } = Layout;

function AdminLayout(props) {
	const currentUser = useSelector((state) => state.authReducer.currentUser);

	const [collapsed, setCollapsed] = useState(false);

	const toggle = () => {
		setCollapsed(!collapsed);
	};

	return currentUser === 'QuanTri' ? (
		<Layout
			style={{
				height: '100vh',
			}}>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className='logo' />
				<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
					<Menu.Item key='1' icon={<UserOutlined />}>
						nav 1
					</Menu.Item>
					<Menu.Item key='2' icon={<VideoCameraOutlined />}>
						nav 2
					</Menu.Item>
					<Menu.Item key='3' icon={<UploadOutlined />}>
						nav 3
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout className='site-layout'>
				<Header
					className='site-layout-background flex items-center justify-between'
					style={{ padding: 0 }}>
					{React.createElement(
						collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
						{
							className: 'trigger',
							onClick: () => toggle(),
						}
					)}
					<div class='w-14 h-14 rounded-full bg-black text-gray-400 flex items-center justify-center mr-5'></div>
				</Header>
				<Content
					className='site-layout-background'
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
