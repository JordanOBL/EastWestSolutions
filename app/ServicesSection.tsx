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
			<h2 className="text-4xl font-bold text-center mb-12 text-primary">
				Our Services
			</h2>

			{/* Desktop Grid */}
			<div className="hidden md:grid grid-cols-3 gap-8">
				{services.map((service) => (
					<div
						key={service.id}
						className="bg-primary text-white shadow-lg shadow-black rounded-lg p-6 transition-transform transform hover:scale-105">
						<h3 className="text-2xl font-semibold mb-4">
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
							className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
							Learn More
						</Link>
					</div>
				))}
			</div>

			{/* Mobile Full-Screen Sections */}
			<div className="md:hidden flex flex-col items-center">
				{services.map((service) => (
					<div
						key={service.id}
						className="w-full my-10 shadow-lg shadow-black rounded-md flex flex-col justify-center items-center text-center p-8 bg-primary text-white">
						<h3 className="text-3xl font-bold mb-4">
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
							className="inline-block bg-[#F84406] text-white px-6 py-3 rounded hover:bg-blue-700 transition">
							Find Out More
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}
