import Image from 'next/image';
import React from 'react';

interface TestimonialProps {
	category: string;
	reviewer: string;
	content: string;
	avatar: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
	category,
	reviewer,
	content,
	avatar,
}) => {
	return (
		<div className="bg-secondary/50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
			{/* Avatar */}
            {/* <Image
                src={avatar}
                width={50}
                height={50}
				alt={reviewer}
				className="w-16 h-16 rounded-full mb-4"
			/> */}

			{/* Category */}
			<h3 className="text-sm font-semibold text-primary">{category}</h3>

			{/* Review Content */}
			<p className="italic text-black mt-2">&ldquo;{content}&rdquo;</p>

			{/* Reviewer */}
			<h4 className="mt-4 text-black font-bold">-{reviewer}</h4>
		</div>
	);
};

export default TestimonialCard;
