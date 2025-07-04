'use client';

import ProductCard from './ProductCard';
import React from 'react';
import { StripeProduct } from '../types'
interface Props
{
	products: StripeProduct[];
}
const ProductSection = ({ products }: Props) =>
{
	return (
		<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
			{products.length > 0 ? (
				products.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						description={product.description}
						fixedPrice={product.default_price?.unit_amount / 100 || 0}
						features={product.marketing_features}
						priceId={product.default_price?.id}
						minPrice={product.metadata.min_price || 0}
						maxPrice={product.metadata.max_price || 0}
						service={product.metadata.service}
						tierName={product.metadata.tier_name}
						tierNum={Number(product.metadata.tier_num)}
					/>
				))
			) : (
				<p>No products found.</p>
			)}
		</div>
	);
};

export default ProductSection;
