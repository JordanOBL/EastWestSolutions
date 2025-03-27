'use client';

import Link from 'next/link';

const services = [
	{
		id: 'career-development',
		title: 'Career Development',
		description:
		'Helping professionals refine resumes, improve positioning, and advance their careers with expert guidance.',
		offerings: [
			'Resume Build & Resume Refresh',
			'LinkedIn Profile Optimization',
			'Cover Letter Writing',
			'Professional Branding & Positioning',
			'Career Strategy & Coaching',
		],
		link: '/career-development',
	},
	{
		id: 'strategy-planning',
		title: 'Strategy & Planning',
		description:
		'Providing business plans and strategic guidance to help businesses grow and thrive in competitive markets.',
		offerings: [
			'Business Plan Development',
			'Strategic Growth Planning',
			'Financial Projections & Forecasting',
			'Market & Competitor Analysis',
			'Risk Assessment & Mitigation Strategies',
		],
		link: '/strategy-planning',
	},
	{
		id: 'management-consulting',
		title: 'Management Consulting',
		description:
		'Advising on leadership strategy, team structure, and operational reviews to improve efficiency and growth.',
		offerings: [
			'Leadership Strategy & Development',
			'Team Structure & Performance Optimization',
			'Operational Reviews & Process Improvement',
			'Succession Planning',
			'Change Management Strategies',
		],
		link: '/management-consulting',
	},
];

export default function ServicesSection() {
	return (
		<section
			id="services"
			className="py-20 px-6 lg:px-16 bg-secondary">
			{/* Section Title */}

			<h2 className="text-xl md:text-2xl font-semi text-center mb-20 p-4 md:p-12  lg:px-32 text-primary">
				Success starts with the right strategy. Whether you are launching a new venture,
				refining operations, or advancing your career, EastWest Solutions provides expert
				guidance to help you move forward with confidence. Let’s turn your vision into
				actionable results.
			</h2>
			<h2 className="font-averia uppercase text-4xl font-semi text-center text-primary">
				Services
			</h2>

			{/* Desktop Grid */}
			<div className="hidden lg:grid grid-cols-3 gap-8 my-12">
				{services.map((service) => (
					<div
						key={service.id}
						className="relative bg-primary text-white shadow-lg flex flex-col shadow-black rounded-lg p-6 transition-transform transform hover:scale-105">
						 <h3 className="text-2xl text-center font-semibold mb-4">
							{service.title}
						</h3>
						<p className="text-gray-200 mb-4">
							{service.description}
						</p>
						{/* Offerings List */}
						<ul className="list-disc pl-5 text-gray-300 mb-4">
							{service.offerings.map((item, index) => (
								<li
									key={index}
									className="mb-2">
									{item}
								</li>
							))}
						</ul>
						<Link
							href={service.link}
							className=" shadow-lg shadow-black w-fit self-center inline-block bg-secondary text-primary px-6 py-3 rounded-lg hover:bg-[#C6B8CC] transition">
							Find Out More
						</Link>

					</div>
				))}
			</div>

			{/* Mobile Full-Screen Sections */}
			<div className="lg:hidden flex flex-col items-center">
				{services.map((service) => (
					<div
						key={service.id}
						className="max-w-lg my-10 shadow-lg shadow-black rounded-md flex flex-col justify-center items-center text-center p-8 bg-primary text-white">
						<h3 className="text-lg font-bold mb-4">
							{service.title}
						</h3>
						<p className="text-gray-200 mb-6">
							{service.description}
						</p>
						{/* Offerings List */}
						<ul className="list-disc pl-5 text-gray-300 mb-6 text-left max-w-md">
							{service.offerings.map((item, index) => (
								<li
									key={index}
									className="mb-2">
									{item}
								</li>
							))}
						</ul>
						<Link
							href={service.link}
							className=" shadow-lg shadow-black inline-block bg-secondary text-primary px-6 py-3 rounded-lg hover:bg-blue-700 transition">
							Find Out More
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}
