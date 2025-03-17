import Link from 'next/link';
import MobileNav from './components/MobileNav';
import ServicesDropdown from './ServicesDropdown'; // Client Component

export default function Navbar() {
	return (
		<nav className="bg-white shadow-md fixed w-full top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="text-xl font-bold text-black">
						East West Solutions
					</div>
					{/* Mobile Nav */}
					<MobileNav />

					{/* Desktop Navigation Links */}
					<div className="hidden md:flex space-x-6">
						<Link
							href="/"
							className="text-xl font-bold text-black">
							Home
						</Link>
						<Link
							href="/about"
							className="text-xl font-bold text-black">
							About
						</Link>
						<ServicesDropdown /> {/* Client Component */}
						<Link
							href="/FAQs"
							className="text-xl font-bold text-black">
							FAQs
						</Link>
					</div>
					
					
				</div>
			</div>
		</nav>
	);
}
