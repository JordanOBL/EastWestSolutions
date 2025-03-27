'use client';

import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';

export default function ServicesDropdown() {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<div
			onMouseOver={() => setDropdownOpen(true)}
			onMouseLeave={() => setDropdownOpen(false)}
		className="relative">
			{/* Clicking "Services" scrolls down */}
			<ScrollLink
				to="services"
				smooth={true}
				duration={500}
				className=" text-16 font-thin text-primary hover:text-blue-500 cursor-pointer flex ">
				<h2>Services</h2>
							</ScrollLink>

			{/* Dropdown Menu appears on hover */}
			{dropdownOpen && (
				<div
					className="absolute w-56 bg-white border rounded-md shadow-lg z-50"
					onMouseOver={() => setDropdownOpen(true)}
					onMouseLeave={() => setDropdownOpen(false)}>
					<ul className="py-2" onClick={() => setDropdownOpen(false)}>
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
