import React, { Component } from 'react';
import NextArrow from '../ArrowSlider/NextArrow';
import PrevArrow from '../ArrowSlider/PrevArrow';
import Slider from 'react-slick';
import StudentSaySliderItem from './StudentSaySliderItem';

export default class StudentSay extends Component {
	render() {
		const settings = {
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3,
			initialSlide: 0,
			lazyLoad: true,
			// autoplay: true,
			// autoplaySpeed: 2000,
			pauseOnHover: true,
			nextArrow: <NextArrow />,
			prevArrow: <PrevArrow />,
		};
		return (
			<div className=' bg-gray-100'>
				<div
					className='container w-full mx-auto'
					style={{
						padding: '42px 16px',
					}}>
					<h1 className='text-2xl font-bold mb-8'>
						What our students have to say
					</h1>
					<div>
						<Slider {...settings}>
							<StudentSaySliderItem />
							<StudentSaySliderItem />
							<StudentSaySliderItem />
							<StudentSaySliderItem />
							<StudentSaySliderItem />
							<StudentSaySliderItem />
							<StudentSaySliderItem />
							<StudentSaySliderItem />
							<StudentSaySliderItem />
							<StudentSaySliderItem />
							<StudentSaySliderItem />
							<StudentSaySliderItem />
						</Slider>
					</div>
					<div className='pb-6 text-center'>
						<h3 className='mt-10 text-sm text-gray-600'>
							Trusted by companies of all sizes
						</h3>
						<div className='pt-8 flex justify-center'>
							<div>
								<img
									src='http://web.archive.org/web/20200805053815im_/https://img-a.udemycdn.com/partner-logos/booking-logo.svg'
									alt='http://web.archive.org/web/20200805053815im_/https://img-a.udemycdn.com/partner-logos/booking-logo.svg'
									className='mx-8 mb-2 inline-block inline-block'
								/>
								<img
									src='http://web.archive.org/web/20200805013057im_/https://img-a.udemycdn.com/partner-logos/volkswagen-logo.svg'
									alt='http://web.archive.org/web/20200805013057im_/https://img-a.udemycdn.com/partner-logos/volkswagen-logo.svg'
									className='mx-8 mb-2 inline-block'
								/>
								<img
									src='http://web.archive.org/web/20200805053820im_/https://img-a.udemycdn.com/partner-logos/mercedes-logo.svg'
									alt='http://web.archive.org/web/20200805053820im_/https://img-a.udemycdn.com/partner-logos/mercedes-logo.svg'
									className='mx-8 mb-2 inline-block w-36 h-7'
								/>
								<img
									src='http://web.archive.org/web/20200805053822im_/https://img-a.udemycdn.com/partner-logos/adidas-logo.svg'
									alt='http://web.archive.org/web/20200805053822im_/https://img-a.udemycdn.com/partner-logos/adidas-logo.svg'
									className='mx-8 mb-2 inline-block'
								/>
								<img
									src='http://web.archive.org/web/20200805053824im_/https://img-a.udemycdn.com/partner-logos/eventbrite-logo.svg'
									alt='http://web.archive.org/web/20200805053824im_/https://img-a.udemycdn.com/partner-logos/eventbrite-logo.svg'
									className='mx-8 mb-2 inline-block'
								/>
							</div>
						</div>
					</div>
					<div className='flex items-center'>
						<div className='w-1/2 flex py-7 px-8 justify-center'>
							<div
								className='text-center'
								style={{ maxWidth: '400px' }}>
								<h2 className='font-bold text-xl text-gray-600'>
									Become an instructor
								</h2>
								<p className='text-base pt-1'>
									Top instructors from around the world teach
									millions of students on Udemy. We provide
									the tools and skills to teach what you love.
								</p>
								<button
									className='mt-4 bg-red-500 hover:bg-red-700 text-white font-bold'
									style={{ padding: '11px 12px' }}>
									Start teaching
								</button>
							</div>
						</div>
						<div className='border-l w-1/2 flex py-7 px-8 justify-center items-center'>
							<div
								className='text-center'
								style={{ maxWidth: '400px' }}>
								<h2 className='font-bold text-xl text-gray-600'>
									Udemy for Business
								</h2>
								<p className='text-base pt-1'>
									Get unlimited access to 4,000+ of Udemy’s
									top courses for your team.
								</p>
								<button
									className='mt-4 bg-red-500 hover:bg-red-700 text-white font-bold'
									style={{ padding: '11px 12px' }}>
									Get Udemy for Bussiness
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
