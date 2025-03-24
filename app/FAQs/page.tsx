import FAQItem from '../components/FAQItem';
const FAQsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-secondary mb-10">Frequently Asked Questions</h1>
			<div className='text-center mb-10'>
				As EastWest Solutions, my mission is to help businesses and professionals thrive by
				creating clear, actionable plans that make sense. I am passionate about simplifying
				complex challenges and finding effective solutions that drive real growth. Your success
				is my priority – let’s build something great together.

			</div>

      <section className="space-y-6 bg-secondary rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-primary">General FAQs</h2>
        <FAQItem question="1. What services does EastWest Solutions offer?" answer="EastWest Solutions provides business consulting, career development, and strategic planning services. This includes business plans, strategy decks, leadership strategy, team structure optimization, operational reviews, resume building, and professional development." />
        <FAQItem question="2. How does the consulting process work?" answer="The process begins with a quote request. Within 2 – 4 business days of receiving the
request, I will provide a formal quote outlining the scope and pricing. Once services are
booked, you will receive an intake form to complete via email or Teams call. After
reviewing your information, we will schedule a strategy call to discuss your needs and
refine the approach before moving forward with deliverables." />
        <FAQItem question="3. Do you work with businesses of all sizes?" answer="Yes! I work with small to mid-sized businesses and entrepreneurs at various stages of growth. Whether you are launching a new business or looking to improve existing operations, I can help." />
        <FAQItem question="4. Do you offer virtual consultations?" answer="Yes, all consultations are conducted virtually through email or video calls for convenience and flexibility." />
        <FAQItem question="5. How long does the consulting process take?" answer="The timeline depends on the scope of the project. Business plans and strategy decks typically take 2–4 weeks, while career development services are usually completed within 1–2 weeks. For management consulting projects, timelines depend
on complexity and will be outlined in your customized quote." />
      </section>

			<section className="mt-10 space-y-6 bg-secondary rounded-lg p-6">
				<h2 className="text-2xl font-semibold text-primary">Business Consulting FAQs</h2>
				<FAQItem question="6. What is included in a business plan?" answer="My business plans cover key elements such as an executive summary, market analysis, financial projections, competitor insights, and strategic recommendations tailored to your business’s goals." />
				<FAQItem question="7. What is the difference between a business plan and a strategy deck?" answer="A business plan provides a detailed roadmap for your business, while a strategy deck presents high-level goals, market positioning, and strategic action steps in a clear, concise format." />
				<FAQItem question="8. Can you help with leadership development and team structure?" answer="Yes. My leadership strategy service helps clarify leadership roles and improve team alignment, while the team structure service focuses on optimizing organizational efficiency." />
				<FAQItem question="9. Do you provide ongoing support after the project is completed?" answer="If additional support is required, follow-up consultations can be arranged." />
				<FAQItem question="10. How do you approach operational reviews?" answer="I assess your business’s key processes to identify inefficiencies and suggest improvements. The goal is to increase productivity, reduce costs, and improve overall performance." />
				<FAQItem question="11. How many clients do you take on at a time?" answer={`To ensure high-quality and customized support, I take on a limited number of clients at a
time based on service complexity:\n
\t Strategy & Planning: 3 – 5 clients at a time, depending on package level and
scope.\n
\t Management Consulting: 2 – 4 clients, as these projects often require more in-
depth analysis and collaboration.\n
If my schedule is full, you may be placed on a waitlist. Your customized quote will
include estimated project start and completion timelines. For the latest availability,
please visit the website.`} />
			</section>

			<section className="mt-10 space-y-6 bg-secondary rounded-lg p-6">
				<h2 className="text-2xl font-semibold text-primary">Career Development FAQs</h2>
				<FAQItem question="12. What is the difference between a Resume Build and a Resume Refresh?" answer="A Resume Build creates a professional resume from scratch, tailored to your career goals. A Resume Refresh updates and improves your existing resume to reflect your most recent experience and skills." />
				<FAQItem question="13. Do you create cover letters as part of the career development package?" answer="Yes. My Plus and Premium packages include a tailored cover letter designed to align with your resume and career goals." />
				<FAQItem question="14. Can you help with LinkedIn profiles and other professional platforms?" answer="Yes. My Professional Development package includes a LinkedIn review and optimization to help you stand out to recruiters and potential employers." />
				<FAQItem question="15. How many rounds of edits are included in career development services?" answer="The number of included edits depends on the package level. Most packages include 1–3 rounds of revisions to ensure your resume and cover letter meet your expectations.
					This is in addition to the initial draft review and first-round revisions." />
				<FAQItem question="16. Do you guarantee job placement or business success?" answer="No, I provide strategic guidance and tailored support, but I cannot guarantee specific results. Success depends on various factors, including market conditions and individual effort." />
				<FAQItem question="17. How many clients do you take on at a time?" answer="To maintain quality, I take on 4-6 career development clients at a time, depending on
package levels. If my schedule is full, you may be placed on a waitlist. For the most up-
to-date availability and timeframes, please check the website." />

			</section>

      <section className="mt-12 bg-gray-100 p-6 rounded-md text-sm text-gray-600">
        <h3 className="font-semibold text-gray-800 mb-2">Disclaimer</h3>
        <p>
          EastWest Solutions provides consulting services and strategic guidance based on industry expertise and market analysis.
          All recommendations are advisory in nature, and while I strive to offer the best possible solutions, I do not guarantee
          specific outcomes or business success. Results may vary based on individual circumstances and market conditions.
        </p>
      </section>
    </div>
  );
}

export default FAQsPage
