import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo/IconOnly_Transparent_NoBuffer.png'
import MobileNav from './MobileNav';
import ServicesDropdown from '../ServicesDropdown'; // Client Component
export default function Navbar() {
	return (
		<nav className="bg-secondary shadow-md flex justify-between w-full z-100">
			<div className=" w-full px-2 sm:px-8 lg:px-16">
				<div className="flex justify-between items-center h-20  px-2 sm:px-6 lg:px-8">
					{/* Logo */}
					<Link href="/"><div className=" flex items-center text-xl font-bold text-black">
						<Image
							src={Logo}
							alt="Lighthouse Logo"
							height={60}
						/>
						<h1 className="mx-2">East West Solutions</h1>
					</div></Link>
					{/* Mobile Nav */}
					<MobileNav />

					{/* Desktop Navigation Links */}
					<div className="hidden md:flex space-x-6">
						<Link
							href="/"
							className="text-xl font-bold text-black">
							<h2>Home</h2>
						</Link>
						<Link
							href="/about"
							className="text-xl font-bold text-black">
							<h2>About</h2>
						</Link>
						<ServicesDropdown /> {/* Client Component */}
						<Link
							href="/FAQs"
							className="text-xl font-bold text-black">
							<h2>FAQs</h2>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
