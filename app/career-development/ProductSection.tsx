'use client';

import ProductCard from '../components/ProductCard';
import React from 'react';

const ProductSection = ({ products}) => {
	return (
		<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
			{products.length > 0 ? (
				products.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						description={product.description}
						price={product.default_price?.unit_amount / 100 || 0}
						features={product.metadata?.features?.split(',') || []}
						priceId={product.default_price?.id}
						// Features from Stripe metadata
						 // Replace with Stripe Checkout
					/>
				))
			) : (
				<p>No products found.</p>
			)}
		</div>
	);
};

export default ProductSection;
