'use client'

import React from 'react';
import Link from 'next/link'
import {handlePurchase} from '../utils/api.ts'

interface ProductProps {
	id: string;
	priceId: string;
	name: string;
	description: string;
	fixedPrice: number;
	minPrice?: number;
	maxPrice?: number;
	features: { name: string }[];
	service: string;
	
}

const ProductCard: React.FC<ProductProps> = ({
	priceId,
	name,
	description,
	fixedPrice,
	minPrice,
	maxPrice,
	features,
	service,
	tierName
}) =>
{ 
	async function handlePurchase() {
    try {
      const res = await fetch('/api/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: priceId }), // Send Stripe Price ID
      });

      const data = await res.json();
			console.log('data', data)

      if (data.url) {
        window.location.href = (data.url); // Redirect to Stripe Checkout
      }
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };
	
	return (
		<div className="bg-white p-6 rounded-lg shadow-lg border-4 border-primary flex flex-col">
			<h3 className="text-xl font-semibold text-gray-900">{name}</h3>
			<p className="text-gray-700 mt-2">{description}</p>

			{/* Features List */}
			<ul className="mt-4 text-gray-700 list-disc pl-5 space-y-2">
				{features.map((feature, index) => (
					<li key={index}>{feature.name}</li>
				))}
			</ul>

			{/* Price & Purchase Button */}
			<div className="mt-auto">
				<p className="text-lg font-semibold text-primary mt-4">
					{fixedPrice ? '$' + fixedPrice :  (minPrice || maxPrice) ? `$${minPrice!} - $${maxPrice!}` : null}
				</p>
				{fixedPrice ? (<button
					className="mt-4 w-full bg-action text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
					onClick={handlePurchase}>
					Purchase
				</button>) : <Link className="mt-4 w-full bg-action text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
						href={`/request-quote?service=${service}&tier=${tierName}`}> Request Quote</Link>}
			</div>
		</div>
	);
};

export default ProductCard;
