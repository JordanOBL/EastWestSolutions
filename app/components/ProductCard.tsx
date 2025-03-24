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
	tierName?: string;
	tierNum?: number
	
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
	tierName,
	tierNum
}) =>
{ 
	async function handlePurchase() {
    try {
      const res = await fetch('/api/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: priceId, service_name: service, service_tier: tierName }), // Send Stripe Price ID
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
		<div className="bg-white p-6 rounded-lg border-4 border-primary flex flex-col">
			<h3 className="text-2xl text-center font-semibold font-averia text-gray-700">{tierName.toUpperCase()}</h3>

			<p className="text-gray-700 text-center mt-2">{description}</p>

			{/* Features List */}
			<ul className="mt-4 text-gray-700 list-disc pl-4 flex flex-col items-start space-y-2">
				{features.map((feature, index) => (
					<li key={index}>{feature.name}</li>
				))}
			</ul>

			{/* Price & Purchase Button */}
			<div className="mt-auto text-center">
				<p className="text-lg font-semibold font-averia text-primary my-4">
					{fixedPrice ? '$' + fixedPrice :  (minPrice || maxPrice) ? `$${minPrice!} - $${maxPrice!}` : null}
				</p>
				{fixedPrice ? (<button
					className="my-4 w-full bg-action shadow-xl shadow-black text-white py-2 px-4 rounded-lg hover:bg-[#C6B8CC] hover:text-primary transition hover:cursor-pointer"
					onClick={handlePurchase}>
					Purchase
				</button>) : <Link className="my-4 w-full bg-action shadow-md shadow-black text-white py-2 px-4 rounded-lg hover:bg-[#C6B8CC] hover:text-primary hover:cursor-pointer  transition"
						href={`/request-quote?service=${service}`}> Request Quote</Link>}
			</div>
		</div>
	);
};

export default ProductCard;
