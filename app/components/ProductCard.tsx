'use client'

import React from 'react';

interface ProductProps {
	id: string;
	priceId: string;
	name: string;
	description: string;
	price: number;
	features: string[];
	
}

const ProductCard: React.FC<ProductProps> = ({
	id,
	priceId,
	name,
	description,
	price,
	features,
}) =>
{
	 const handlePurchase = async () => {
			try {
				const res = await fetch('/api/checkout', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ productId: priceId }), // Send Stripe Price ID
				});

				const data = await res.json();

				if (data.url) {
					window.location.href = data.url; // Redirect to Stripe Checkout
				}
			} catch (error) {
				console.error('Checkout error:', error);
			}
		};
	return (
		<div className="bg-white p-6 rounded-lg shadow-lg border-4 border-blue-500 flex flex-col">
			<h3 className="text-xl font-semibold text-gray-900">{name}</h3>
			<p className="text-gray-700 mt-2">{description}</p>

			{/* Features List */}
			<ul className="mt-4 text-gray-700 list-disc pl-5 space-y-2">
				{features.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</ul>

			{/* Price & Purchase Button */}
			<div className="mt-auto">
				<p className="text-lg font-semibold text-blue-600 mt-4">
					${price}
				</p>
				<button
					className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
					onClick={() => handlePurchase()}>
					Purchase
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
