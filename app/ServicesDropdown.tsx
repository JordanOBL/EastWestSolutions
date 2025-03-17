'use client'; // Ensures this is client-side only

import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';

export default function ServicesDropdown() {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<div
			className="relative group cursor-pointer"
			onMouseEnter={() => setDropdownOpen(true)}
			onMouseLeave={() => setDropdownOpen(false)}>
			{/* Clickable Scroll Link */}
			<ScrollLink
				to="services"
				smooth={true}
				duration={500}
				className=" text-xl font-bold text-black  hover:text-blue-500"
				onClick={() => setDropdownOpen(false)}>
				Services
			</ScrollLink>

			{/* Dropdown Menu */}
			{dropdownOpen && (
				<div onMouseEnter={() => setDropdownOpen(true)} className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
					<a
						href="/management-consulting"
						className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
						Management Consulting
					</a>
					<a
						href="/strategy-planning"
						className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
						Strategy & Planning
					</a>
					<a
						href="/career-development"
						className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
						Career Development
					</a>
				</div>
			)}
		</div>
	);
}
