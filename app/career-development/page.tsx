import ProductSection from '../components/ProductSection';
import React from 'react';
import { StripeProduct } from '../types';
import Logo from '@/public/logo/IconOnly_Transparent_NoBuffer.png'
import Image from 'next/image';

const CareerDevelopmentPage = async () => {
	// Fetch data from API
	const response = await fetch(
		`http://localhost:3000/api/products-by-specialty/career_development`,
		{ cache: 'no-store' } // Ensures fresh data (SSR equivalent)
	);
	const products: StripeProduct[] = await response.json();
	console.log(products);
	const professionalDevelopmentProducts = products.filter(product => product.metadata.service == 'professional_development')
	const resumeBuildProducts = products.filter(
		(product) => (product.metadata.service == 'resume_build')
	);
	const resumeRefreshProducts = products.filter(
		(product) => (product.metadata.service == 'resume_refresh')
	);
	return (
		<div className="min-h-screen bg-[url('/HeroBackground.jpg')] flex justify-center bg-fill py-12 px-6">
			<div className=" max-w-7xl flex flex-col items-center bg-secondary/20 p-8 md:p-16 shadow-lg rounded-lg">
				<h1 className="text-3xl text-center font-semi font-averia uppercase text-gray-900">
					Career Development
				</h1>
				<h2 className="text-xl italic text-center text-gray-600 mt-2">
					Elevate Your Career, One Step at a Time
				</h2>
				<p className="text-gray-700	text-center leading-relaxed mt-4">
					Your career path is unique – and so are my career
					development solutions. Whether you’re pivoting to a new
					field, leveling up in your current one, or starting from
					scratch, I provide the guidance, tools, and strategies you
					need to make confident, impactful career moves.
				</p>
				<div className='w-full flex justify-center my-8'>
					<Image
						src={Logo}
						alt="Lighthouse Logo"
						height={40}
					/>
				</div>

				{/* Resume Build Section */}
				<div className=" bg-gray-100/30 text-center p-6 rounded-lg shadow">
					<h3 className="text-2xl font-semi font-averia uppercase text-gray-900">
						Resume Build
					</h3>
					<p className="text-gray-700 mt-2">
						Crafting a professional resume tailored to your industry
						and career goals.
					</p>

					<h4 className="text-lg font-semibold text-gray-800 mt-6">
						Why It Matters:
					</h4>
					<p className="text-gray-700 mt-2">
						A well-crafted resume increases your chances of landing
						interviews by showcasing your experience and potential
						in a clear, professional format.
					</p>
				</div>


				{/* Pricing Table */}
				{/* Grid Layout for Products */}
				<ProductSection products={resumeBuildProducts} />
				<div className='w-full flex justify-center my-8'>
					<Image
						src={Logo}
						alt="Lighthouse Logo"
						height={40}
					/>
				</div>
				<div className=" bg-gray-100/30 text-center p-6 rounded-lg shadow">
					<h3 className="text-2xl font-semi font-averia uppercase  text-gray-900">
						Resume Refresh
					</h3>
					<p className="text-gray-700 mt-2">
						Update and refine your existing resume to reflect your latest
						experience and skills.
					</p>

					<h4 className="text-lg font-semibold text-gray-800 mt-6">
						Why It Matters:
					</h4>
					<p className="text-gray-700 mt-2">
						Keeping your resume current ensures you are ready for new
						opportunities and reflects your latest achievements.	
					</p>
				</div>

				{/* Pricing Table */}
				{/* Grid Layout for Products */}
				<ProductSection products={resumeRefreshProducts} />
				<div className='w-full flex justify-center my-8'>
					<Image
						src={Logo}
						alt="Lighthouse Logo"
						height={40}
					/>
				</div>

				{/* Professional Development Section */}
				<div className="bg-gray-100/30 text-center p-6 rounded-lg shadow">
					<h3 className="text-2xl font-semi font-averia uppercase  text-gray-900">
						Professional Development
					</h3>
					<p className="text-gray-700 mt-2">
						Providing targeted career development to position you
						for success.
					</p>

					<h4 className="text-lg font-semibold text-gray-800 mt-6">
						Why It Matters:
					</h4>
					<p className="text-gray-700 mt-2">
						A well-positioned professional profile increases
						visibility, attracts recruiters, and improves your
						chances of landing the right job.
					</p>
				</div>
				{/* Pricing Table */}
				{/* Grid Layout for Products */}
				<ProductSection products={professionalDevelopmentProducts} />
			</div>
		</div>
	);
};
export default CareerDevelopmentPage;
