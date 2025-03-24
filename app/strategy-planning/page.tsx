import ProductSection from '../components/ProductSection';
import React from 'react';
import { StripeProduct } from '../types';
import Image from 'next/image';
import Logo from '@/public/logo/IconOnly_Transparent_NoBuffer.png'

const StrategyPlanningPage = async () => {
	// Fetch data from API
	const response = await fetch(
		`http://localhost:3000/api/products-by-specialty/strategy_planning`,
		{ cache: 'no-store' } // Ensures fresh data (SSR equivalent)
	);
	const products: StripeProduct[] = await response.json();
	console.log(products);
	const businessPlanningProducts = products.filter(
		(product) => product.metadata.service == 'business_planning'
	);
	const strategyDeckProducts = products.filter(
		(product) => product.metadata.service == 'strategy_deck'
	);
	return (

		<div className="min-h-screen bg-[url('/HeroBackground.jpg')] flex justify-center bg-fill py-12 px-6">
			<div className=" max-w-7xl flex flex-col items-center bg-secondary/20 p-8 md:p-16 shadow-lg rounded-lg">
				<h1 className="text-3xl font-semi uppercase font-averia text-center text-gray-900">
					Strategy <br /> & Planning
				</h1>
				<h2 className="text-xl italic text-center text-gray-600 mt-2">
					Turn Vision into Results
				</h2>
				<p className="text-gray-700 text-center leading-relaxed mt-4">
					Success starts with a plan. At EastWest Solutions, I help
					businesses define their vision, map out strategic goals, and
					create actionable plans to drive long-term success.
					Together, we will develop a clear strategy that positions
					your business for sustainable growth.
				</p>

				<div className='w-full flex justify-center my-8'>
					<Image
						src={Logo}
						alt="Lighthouse Logo"
						height={40}
					/>
				</div>


				{/*Business Planning Section */}
				<div className="bg-gray-100/30 text-center  p-6 rounded-lg shadow">
					<h3 className="text-2xl font-semi uppercase font-averia text-gray-900">
						Business Planning
					</h3>
					<p className="text-gray-700 mt-2">
						Comprehensive business plans designed to clarify your
						vision and guide strategic decisions.
					</p>

					<h4 className="text-lg font-semibold text-gray-800 mt-6">
						Why It Matters:
					</h4>
					<p className="text-gray-700 mt-2">
						A strong business plan helps you secure funding, align
						your team, and create a clear path to success.
					</p>
				</div>

				{/* Pricing Table */}
				{/* Grid Layout for Products */}
				<ProductSection products={businessPlanningProducts} />
				<div className='w-full flex justify-center my-8'>
					<Image
						src={Logo}
						alt="Lighthouse Logo"
						height={40}
					/>
				</div>

				{/* Resume Build Section */}
				<div className="bg-gray-100/30 text-center  p-6 rounded-lg shadow">
					<h3 className="text-2xl font-averia uppercase font-semi text-gray-900">
						Strategy Deck
					</h3>
					<p className="text-gray-700 mt-2">
						High-impact strategy decks designed to align your team
						and drive action
					</p>

					<h4 className="text-lg font-semibold text-gray-800 mt-6">
						Why It Matters:
					</h4>
					<p className="text-gray-700 mt-2">
						A professional strategy deck helps you communicate your
						business’s value and direction clearly and persuasively.
					</p>
				</div>
				{/* Pricing Table */}
				{/* Grid Layout for Products */}
				<ProductSection products={strategyDeckProducts} />
			</div>
		</div>
	);
};
export default StrategyPlanningPage;
