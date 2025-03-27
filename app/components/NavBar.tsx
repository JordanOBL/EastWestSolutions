import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo/IconOnly_Transparent_NoBuffer.png'
import ServicesDropdown from '../ServicesDropdown'; // Client Component
export default function Navbar() {
	return (
		<nav className="bg-secondary shadow-md flex flex-col w-full h-fit z-100 p-1  sm:px-8 lg:px-16 justify-around justify-center ">
					{/* Logo */}
					<Link href="/" className=" flex flex-col items-center font-averia ">
							<Image
								src={Logo}
								alt="Lighthouse Logo"
								height={40}
							/>
							<h1 className="text-lg lg:text-2xl text-primary mt-1">EastWest Solutions</h1>
					</Link>
					{/* Mobile Nav */}
				{/*<MobileNav />*/}
			
					{/* Desktop Navigation Links */}
					<div className=" flex justify-between lg:justify-center lg:space-x-12 w-full font-poppins font-thin px-12 text-primary text-sm lg:text-lg" >
						<Link
							href="/">
							<h2>Home</h2>
						</Link>
						<Link
							href="/about">
							<h2>About</h2>
						</Link>
						<ServicesDropdown /> {/* Client Component */}
						<Link
							href="/FAQs">
							<h2>FAQs</h2>
						</Link>
					</div>
		</nav>
	);
}
