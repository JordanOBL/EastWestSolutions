import ProductSection from '../components/ProductSection';
import React from 'react';
import { StripeProduct } from '../types';

const CareerDevelopmentPage = async () => {
	// Fetch data from API
	const response = await fetch(
		`http://localhost:3000/api/products-by-specialty/career_development`,
		{ cache: 'force-cache' } // Ensures fresh data (SSR equivalent)
	);
	const products: StripeProduct[] = await response.json();
	console.log(products);
	const professionalDevelopmentProducts = products.filter(product => product.metadata.service == 'professional_development')
	const resumeBuildProducts = products.filter(
		(product) => (product.metadata.service == 'resume_build')
	);
	return (
		<div className="min-h-screen bg-gray-50 py-12 px-6">
			<div className="mx-auto bg-white p-8 shadow-lg rounded-lg">
				<h1 className="text-3xl font-bold text-gray-900">
					Career Development
				</h1>
				<h2 className="text-xl italic text-gray-600 mt-2">
					Elevate Your Career, One Step at a Time
				</h2>
				<p className="text-gray-700 leading-relaxed mt-4">
					Your career path is unique – and so are my career
					development solutions. Whether you’re pivoting to a new
					field, leveling up in your current one, or starting from
					scratch, I provide the guidance, tools, and strategies you
					need to make confident, impactful career moves.
				</p>

				{/* Resume Build Section */}
				<div className="mt-8 bg-gray-100 p-6 rounded-lg shadow">
					<h3 className="text-2xl font-semibold text-gray-900">
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
				<h2 className="text-2xl font-semibold text-gray-900 mt-10">
					Get Started with Resume Build
				</h2>
				{/* Grid Layout for Products */}
				<ProductSection products={resumeBuildProducts} />
				{/* Resume Build Section */}
				<div className="mt-8 bg-gray-100 p-6 rounded-lg shadow">
					<h3 className="text-2xl font-semibold text-gray-900">
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
				<h2 className="text-2xl font-semibold text-gray-900 mt-10">
					Get Started with Professional Develpoment
				</h2>
				{/* Grid Layout for Products */}
				<ProductSection products={professionalDevelopmentProducts} />
			</div>
		</div>
	);
};
export default CareerDevelopmentPage;
