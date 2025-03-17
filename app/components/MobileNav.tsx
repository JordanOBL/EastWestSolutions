'use client';

import Link from 'next/link';
import { useState } from 'react';

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isServicesOpen, setIsServicesOpen] = useState(false);
	function toggleMainDrawer() {
		setIsOpen((prev) => !prev);
	}

	return (
		<div className="md:hidden w-[50px] ">
			<div
				className="relative text-black"
				onClick={() => toggleMainDrawer()}>
				{isOpen ? 'O' : 'X'}
			</div>
			{isOpen ? (
				<ul className="absolute right-2 flex flex-col w-[200px] border-2 border-amber-600 text-black bg-white">
					<li className="p-3">
						<Link href="/about">About</Link>
					</li>
					<li className="p-3">
						<Link href="/FAQs">FAQs</Link>
					</li>
				</ul>
			) : null}
		</div>
	);
};

export default MobileNav;
