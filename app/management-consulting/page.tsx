import ProductSection from "../components/ProductSection";
import React from "react";
import { StripeProduct } from "../types";

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
		<div className="min-h-screen bg-gray-50 py-12 px-6">
			<div className="mx-auto bg-white p-8 md:p-16 shadow-lg rounded-lg">
				<h1 className="text-3xl font-bold text-gray-900">
					Management Consulting
				</h1>
				<h2 className="text-xl italic text-gray-600 mt-2">
					Streamline, Strengthen, Succeed
				</h2>
				<p className="text-gray-700 leading-relaxed mt-4">
					At EastWest Solutions, I partner with you to unlock the full
					potential for your business. Through targeted management
					consulting, I help refine leadership strategies, enhance
					team dynamics, and improve operational efficiency – setting
					the stage for sustainable growth.
				</p>

				{/*Leadership Strategy Section */}
				<div className="mt-8 bg-gray-100 p-6 rounded-lg shadow">
					<h3 className="text-2xl font-semibold text-gray-900">
						Leadership Strategy
					</h3>
					<p className="text-gray-700 mt-2">
						– Empower your leadership team with clear direction and
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
				<h2 className="text-2xl font-semibold text-gray-900 mt-10">
					Get a Quote for your Leadership Strategy Today!
				</h2>
				{/* Grid Layout for Products */}
				<ProductSection products={leadershipStrategyProducts} />
				{/* Resume Build Section */}
				<div className="mt-8 bg-gray-100 p-6 rounded-lg shadow">
					<h3 className="text-2xl font-semibold text-gray-900">
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
				<h2 className="text-2xl font-semibold text-gray-900 mt-10">
					Get Started with Team Structure
				</h2>
				{/* Grid Layout for Products */}
				<ProductSection products={teamStructureProducts} />
				<div className="mt-8 bg-gray-100 p-6 rounded-lg shadow">
					<h3 className="text-2xl font-semibold text-gray-900">
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
				<h2 className="text-2xl font-semibold text-gray-900 mt-10">
					Get Started with Operational Review
				</h2>
				{/* Grid Layout for Products */}
				<ProductSection products={operationalReviewProducts} />
			</div>
		</div>
	);
};

export default ManagementConsultingPage;
