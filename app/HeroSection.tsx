'use client';

import { useEffect, useState } from 'react';

import HeroBackground from '../public/HeroBackground.jpg'; // Fallback Image
import HeroCTAButton from './components/HeroCTAButton';
import HeroVideo from '@/videos/HeroVideoBackground.mp4'
import Image from 'next/image';
import TestimonialCarousel from './components/TestimonialCarousel';
import Video from 'next-video'

const HeroSection = () => {
		const [isDesktop, setIsDesktop] = useState(false);

		// Detect screen size
		useEffect(() => {
			const checkScreenSize = () =>
				setIsDesktop(window.innerWidth > 1024);
			checkScreenSize();
			window.addEventListener('resize', checkScreenSize);
			return () => window.removeEventListener('resize', checkScreenSize);
		}, []);

	return (
		<div className="relative  flex flex-col min-h-screen bg-primary overflow-hidden">
			{/* Background Video or Fallback Image */}
			{isDesktop ? (
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
			)}

			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black/70 z-10"></div>

			{/* Hero Content */}
			<div className="relative z-30 inset-0 bg-gradient-to-b from-slate-900/50 to-transparent flex flex-col items-start p-4 md:p-10 lg:p-20 pt-6">
				<h1 className="text-3xl lg:text-6xl text-secondary font-black italic tracking-wide">
					ELEVATE
				</h1>
				<h1 className="text-2xl lg:text-5xl text-secondary font-black italic tracking-wide">
					YOUR
				</h1>
				<h1 className="text-3xl lg:text-6xl text-secondary font-black italic tracking-wide">
					BUSINESS
				</h1>
			</div>

			<span className=" relative md:text-center mt-10 font-medium text-md lg:text-2xl px-8 lg:px-20 z-50">
				We help businesses and professionals
				<span className="italic text-[#F84406]"> THRIVE </span>
				by creating clear, actionable plans that make sense!
			</span>

			{/* Testimonial Carousel */}
			<div className="relative z-20 mx-auto mt-20 w-1/2">
				<TestimonialCarousel />
			</div>

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
