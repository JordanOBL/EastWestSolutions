import ProductSection from "../components/ProductSection";
import React from "react";
import { StripeProduct } from "../types";
import Logo from '@/public/logo/IconOnly_Transparent_NoBuffer.png'
import Image from 'next/image';

const ManagementConsultingPage = async () => {
	// Fetch data from API
	const response = await fetch(
		`http://localhost:3000/api/products-by-specialty/management_consulting`,
		{ cache: 'no-store' } // Ensures fresh data (SSR equivalent)
	);
	const products: StripeProduct[] = await response.json();
	const leadershipStrategyProducts = products.filter(
		(product) => product.metadata.service == 'leadership_strategy'
	);
	const teamStructureProducts = products.filter(
		(product) => product.metadata.service == 'team_structure'
	);
	const operationalReviewProducts = products.filter(
		(product) => product.metadata.service == 'operational_review'
	);
	return (
		<div className="min-h-screen bg-[url('/HeroBackground.jpg')] flex justify-center bg-fill py-12 px-6">
			<div className=" max-w-7xl flex flex-col items-center bg-secondary/20 p-8 md:p-16 shadow-lg rounded-lg">
				<h1 className="text-3xl text-center font-semi font-averia uppercase text-gray-900">
					Management Consulting
				</h1>
				<h2 className="text-xl text-center  italic text-gray-700 mt-2">
					Streamline, Strengthen, Succeed
				</h2>
				<p className="text-gray-900 text-center  leading-relaxed mt-4">
					At EastWest Solutions, I partner with you to unlock the full
					potential for your business. Through targeted management
					consulting, I help refine leadership strategies, enhance
					team dynamics, and improve operational efficiency – setting
					the stage for sustainable growth.
				</p>
				<div className='w-full flex justify-center my-8'>
					<Image
						src={Logo}
						alt="Lighthouse Logo"
						height={40}
					/>
				</div>

				{/*Leadership Strategy Section */}
				<div className="bg-gray-100/30 text-center  p-6 rounded-lg shadow">
					<h3 className="text-2xl font-semi font-averia uppercase text-gray-900">
						Leadership Strategy
					</h3>
					<p className="text-gray-700 mt-2">
						Empower your leadership team with clear direction and
						improved alignment
					</p>

					<h4 className="text-lg font-semibold text-gray-800 mt-6">
						Why It Matters:
					</h4>
					<p className="text-gray-700 mt-2">
						Strong leadership alignment drives better
						decision-making, improves team morale, and increases
						business resilience.
					</p>
				</div>

				{/* Pricing Table */}
			
				{/* Grid Layout for Products */}
				<ProductSection products={leadershipStrategyProducts} />
				{/* Resume Build Section */}

				<div className='w-full flex justify-center my-8'>
					<Image
						src={Logo}
						alt="Lighthouse Logo"
						height={40}
					/>
				</div>
				<div className=" bg-gray-100/30 text-center p-6 rounded-lg shadow">
					<h3 className="text-2xl font-semi font-averia uppercase text-gray-900">
						Team Structure
					</h3>
					<p className="text-gray-700 mt-2">
						Ensure your team is organized for maximum efficiency and
						effectiveness.
					</p>

					<h4 className="text-lg font-semibold text-gray-800 mt-6">
						Why It Matters:
					</h4>
					<p className="text-gray-700 mt-2">
						A well-structured team reduces redundancies, improves
						collaboration, and enhances productivity.
					</p>
				</div>
				{/* Pricing Table */}
		
				{/* Grid Layout for Products */}
				<ProductSection products={teamStructureProducts} />
				<div className='w-full flex justify-center my-8'>
					<Image
						src={Logo}
						alt="Lighthouse Logo"
						height={40}
					/>
				</div>

				<div className=" bg-gray-100/30 text-center p-6 rounded-lg shadow">
					<h3 className="text-2xl font-semi font-averia uppercase text-gray-900">
						Operational Review
					</h3>
					<p className="text-gray-700 mt-2">
						Streamline operations to increase efficiency and reduce
						costs.
					</p>

					<h4 className="text-lg font-semibold text-gray-800 mt-6">
						Why It Matters:
					</h4>
					<p className="text-gray-700 mt-2">
						Efficient operations increase profitability, improve
						resource management, and reduce operational risk.
					</p>
				</div>
				{/* Pricing Table */}
			
				{/* Grid Layout for Products */}
				<ProductSection products={operationalReviewProducts} />
			</div>
		</div>
	);
};

export default ManagementConsultingPage;
