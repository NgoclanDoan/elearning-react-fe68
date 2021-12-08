import {
	AliwangwangOutlined,
	BarChartOutlined,
	BulbOutlined,
	CodeOutlined,
	ConsoleSqlOutlined,
	DeploymentUnitOutlined,
	DotChartOutlined,
	ReconciliationOutlined,
	ShareAltOutlined,
	SnippetsOutlined,
	StockOutlined,
	ThunderboltOutlined,
} from '@ant-design/icons';
import React, { Component } from 'react';

export default class GetRecommendation extends Component {
	render() {
		return (
			<div className='flex flex-col mb-10'>
				<div
					className='h-1 w-full'
					style={{
						background:
							'linear-gradient(-45deg,#EC5252 0%,#6E1A52 100%)',
					}}></div>
				<div
					className='w-full px-3 text-gray-300 text-center justify-between'
					style={{ backgroundColor: '#29303b' }}>
					<div className='mt-12 mb-8 flex items-center'>
						<div className='flex-grow'>
							<SnippetsOutlined className='text-4xl' />
						</div>
						<div className='flex-grow'>
							<ReconciliationOutlined className='text-4xl' />
						</div>
						<div className='flex-grow'>
							<StockOutlined className='text-4xl' />
						</div>
						<div className='flex-grow'>
							<ShareAltOutlined className='text-4xl' />
						</div>
						<div className='flex-grow'>
							<SnippetsOutlined className='text-4xl' />
						</div>
					</div>
					<div className='grid grid-cols-4'>
						<div className='flex items-center justify-end mr-12'>
							<BulbOutlined className='text-4xl' />
						</div>
						<div className='col-span-2 text-white'>
							<h3 className='mb-4 font-bold text-2xl text-white'>
								Get personalized recommendations
							</h3>
							<p className='mb-6 text-base'>
								Answer a few questions for your top picks
							</p>
							<button
								className='inline-block cursor-pointer rounded-sm bg-red-500 font-bold text-base hover:bg-red-800'
								style={{ padding: '11px 12px' }}>
								Get started
							</button>
						</div>
						<div className='flex items-center  ml-12'>
							<ConsoleSqlOutlined className='text-4xl' />
						</div>
					</div>
					<div className='mt-8 mb-12 flex items-center'>
						<div className='flex-grow'>
							<CodeOutlined className='text-4xl' />
						</div>
						<div className='flex-grow'>
							<DotChartOutlined className='text-4xl' />
						</div>
						<div className='flex-grow'>
							<BarChartOutlined className='text-4xl' />
						</div>
						<div className='flex-grow'>
							<AliwangwangOutlined className='text-4xl' />
						</div>
						<div className='flex-grow'>
							<DeploymentUnitOutlined className='text-4xl' />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
