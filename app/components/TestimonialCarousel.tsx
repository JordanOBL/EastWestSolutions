'use client'; // Client-side component for carousel

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import TestimonialCard from './TestimonialCard';
import testimonials from '@/data/testimonials.json'; // Import JSON

const TestimonialCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Auto-scroll every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % testimonials.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-full max-w-xl min-w-[200px] mx-auto">
			<TestimonialCard {...testimonials[currentIndex]} />

			{/* Manual Navigation */}
			<div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full">
				<ChevronLeft
					size={16}
					strokeWidth={1.25}
					onClick={() => {
						setCurrentIndex(
							(prev) =>
								(prev - 1 + testimonials.length) %
								testimonials.length
						);
					}}
				/>
				<ChevronRight
					size={16}
                    strokeWidth={1.25}
                    
					onClick={() =>
						setCurrentIndex(
							(prev) => (prev + 1) % testimonials.length
						)
					}
				/>
			</div>
		</div>
	);
};

export default TestimonialCarousel;
