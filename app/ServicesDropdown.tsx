'use client';

import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';

export default function ServicesDropdown() {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<div
			className="relative hidden md:block"
			onMouseOver={() => setDropdownOpen(true)}>
			{/* Clicking "Services" scrolls down */}
			<ScrollLink
				to="services"
				smooth={true}
				duration={500}
				className="text-xl font-bold text-black hover:text-blue-500 cursor-pointer flex items-center">
				<span>Services</span>
				<svg
					className="w-4 h-4 ml-1"
					viewBox="0 0 20 20"
					fill="currentColor">
					<path
						fillRule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</ScrollLink>

			{/* Dropdown Menu appears on hover */}
			{dropdownOpen && (
				<div
					className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-50"
					onMouseOver={() => setDropdownOpen(true)}
					onMouseLeave={() => setDropdownOpen(false)}>
					<ul className="py-2">
						<li>
							<Link
								href="/management-consulting"
								className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
								Management Consulting
							</Link>
						</li>
						<li>
							<Link
								href="/strategy-planning"
								className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
								Strategy & Planning
							</Link>
						</li>
						<li>
							<Link
								href="/career-development"
								className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
								Career Development
							</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}
