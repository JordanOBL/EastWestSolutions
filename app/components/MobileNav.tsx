'use client';

import { ChevronDown, ChevronUp, Menu } from 'lucide-react';

import Link from 'next/link';
import { useState } from 'react';

export default function MobileNav() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);

	return (
		<div className="md:hidden">
			{/* Hamburger Button */}
			<Menu
				onClick={() => setMenuOpen(!menuOpen)}
				className="text-black focus:outline-none"
			/>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="absolute top-20 left-0 w-full bg-secondary shadow-lg z-50">
					<ul className="py-4 px-6 space-y-4">
						<li>
							<Link
								href="/"
								className="text-xl font-bold text-primary"
								onClick={() => setMenuOpen(false)}>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className="text-xl font-bold text-primary"
								onClick={() => setMenuOpen(false)}>
								About
							</Link>
						</li>
						<li>
							{/* Services Accordion Toggle */}
							<button
								onClick={() => setServicesOpen(!servicesOpen)}
								className="text-xl font-bold text-primary flex justify-between w-full">
								<span>Services</span>
								<span>
									{servicesOpen ? (
										<ChevronUp />
									) : (
										<ChevronDown />
									)}
								</span>
							</button>

							{/* Services Accordion Content */}
							{servicesOpen && (
								<ul className="ml-4 mt-2 space-y-2">
									<li>
										<Link
											href="/management-consulting"
											className="text-gray-700"
											onClick={() => setMenuOpen(false)}>
											Management Consulting
										</Link>
									</li>
									<li>
										<Link
											href="/strategy-planning"
											className="text-gray-700"
											onClick={() => setMenuOpen(false)}>
											Strategy & Planning
										</Link>
									</li>
									<li>
										<Link
											href="/career-development"
											className="text-gray-700"
											onClick={() => setMenuOpen(false)}>
											Career Development
										</Link>
									</li>
								</ul>
							)}
						</li>
						<li>
							<Link
								href="/FAQs"
								className="text-xl font-bold text-primary"
								onClick={() => setMenuOpen(false)}>
								FAQs
							</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}
