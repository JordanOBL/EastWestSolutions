'use client'

import React from 'react';
import { Link as ScrollLink }  from 'react-scroll';

interface HeroCTAButtonProps {
	text: string;
	href: string;
	external?: boolean; // If true, opens link in a new tab
}

const HeroCTAButton: React.FC<HeroCTAButtonProps> = ({
	text,
	href,
	external = false,
}) => {
	return external ? (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="inline-block px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
			{text}
		</a>
	) : (
		<ScrollLink
			to={href}
			smooth={true}
			duration={500}
			className=" w-fit border-2 border-secondary/50 px-6 py-3 text-lg font-bold text-secondary bg-primary rounded-lg shadow-lg shadow-black lg:hover:bg-secondary lg:hover:text-primary hover:cursor-pointer transition duration-300 z-30">
			{text}
		</ScrollLink>
	);
};

export default HeroCTAButton;
