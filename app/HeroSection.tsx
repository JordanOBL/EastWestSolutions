'use client';

import { useEffect, useState } from 'react';

import HeroBackground from '../public/HeroBackground.jpg'; // Fallback Image
import HeroCTAButton from './components/HeroCTAButton';
import Image from 'next/image';

const HeroSection = () => {
		const [isDesktop, setIsDesktop] = useState(false);

//		// Detect screen size
//		useEffect(() => {
//			const checkScreenSize = () =>
//				setIsDesktop(window.innerWidth > 1550);
//			checkScreenSize();
//			window.addEventListener('resize', checkScreenSize);
//			return () => window.removeEventListener('resize', checkScreenSize);
//		}, []);
//
	return (
		<div className="relative  flex flex-col justify-center min-h-screen bg-primary overflow-hidden">
			{/* Background Video or Fallback Image 			{isDesktop ? (
				<div className="absolute top-0 left-0 w-full h-full object-cover">
					<Video
						src={HeroVideo}
						autoPlay
						muted
						loop
						playsInline
						className="absolute top-0 left-0 w-full h-full object-cover"
					/>
				</div>
			) : (
				<Image
					src={HeroBackground}
					alt="Lighthouse on the beach"
					fill
					className="absolute top-0 left-0 w-full h-full object-cover"
					priority
				/>
			)}*/}
	<Image
					src={HeroBackground}
					alt="Lighthouse on the beach"
					fill
					className="absolute top-0 left-0 w-full h-full object-cover"
					priority
				/>


			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black/70 z-10"></div>

			{/* Hero Content */}
			<div className="absolute text-white/40 top-10 text-6xl md:text-7xl lg:text-8xl p-2 z-30 flex flex-col md:p-10 lg:p-20 ">
				<h1 className="m-2 font-poppins font-thin">
					ELEVATE
				</h1>
				<h1 className="m-2 font-poppins font-thin">
					YOUR
				</h1>
				<h1 className="m-2 font-poppins font-thin">
					BUSINESS
				</h1>
			</div>


			{/* Testimonial Carousel
			div className="relative z-20 mx-auto mt-20 w-1/2">
				<TestimonialCarousel />
			</div>
			*/}
					{/* CTA Button */}
			<div className="flex w-screen justify-center absolute bottom-40">
				<HeroCTAButton
					href={'services'}
					text={'Get Started Today!'}
				/>
			</div>
		</div>
	);
};

export default HeroSection;
