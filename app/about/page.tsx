import React from "react";
import headshot from '/public/headshot.jpg'
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-secondary font-serif leading-relaxed bg-primary">
      <div className="flex justify-center">
        <Image
          src={headshot}
          alt="Headshot"
          width={300}
          height={300}
          className="rounded-lg mb-6"

        />
      </div>
      <h1 className="text-4xl font-bold mb-6  text-center">About Me</h1>

      <p className="mb-4">
        Hi, I am India Rolfe, the founder and lead consultant at EastWest Solutions. I have over
        15 years of experience in business and hold an MBA from Western Governors’
        University. Throughout my career, I have consistently held management positions,
        giving me deep insight into the complexities of running and growing a business.
      </p>

      <p className="mb-4">
        I began my career by successfully managing a small business for four years on behalf
        of an out-of-state owner, ensuring smooth day-to-day operations and long-term growth.
        From there, I led and supported the restructuring of multiple teams – improving
        processes, enhancing performance, and aligning operations with business objectives.
        My experience spans managing QAQC teams, streamlining front desk operations at a
        law firm, overseeing a portfolio of 60+ accounts in the insurance industry, and leading
        business restructuring efforts to improve operational efficiency and drive growth. By
        staying current with market trends, I provide strategic, informed guidance to help
        businesses adapt and thrive.
      </p>

      <p className="mb-4">
        I approach business management like a puzzle, identifying the right pieces and
        figuring out how they work together to create a complete picture. My passion lies in
        helping businesses and professionals achieve clarity, efficiency, and strategic growth.
        Whether it is refining business operations, developing strategic plans, or elevating
        professional careers, I deliver tailored, practical solutions to help you succeed.
      </p>



      <p className="mb-4">
        Outside of work, I enjoy exploring the outdoors – really anything that involves the ocean
        or water, though I am just as drawn to the quiet of the woods. I am also an avid reader,
        making my way through more than 100 books last year. Traveling is a big part of my life,
        whether it is exploring new places abroad or discovering hidden gems closer to home.
        Recently, I have returned to biking to explore more trails and, somewhat reluctantly,
        taken up running. That said, I am always down for a good movie marathon or Game of
        Thrones binge
      </p>


      <p className="mb-4">
        I also love to cook and try out new recipes whenever I get the chance, especially if it
        involves good company and great food. I am very close with my family and love
        spending as much time with them as I can, either in person or on FaceTime since we
        are all pretty spread out. Having lived on both the East and West Coasts, I have gained
        a broad perspective and an adaptable approach that allows me to connect with clients
        from diverse backgrounds and industries.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">My Philosophy and Values</h2>

      <p className="mb-4">
        At EastWest Solutions, I believe that success starts with clarity and strategy. My
        consulting philosophy is built on three core values:
      </p>

      <ul className="list-disc list-inside mb-6">
        <li><strong>Clarity</strong> – Providing straightforward, effective plans so you know exactly where
          you’re headed.</li>
        <li><strong>Optimization</strong> – Streamlining processes to help you work smarter, not harder.</li>
        <li><strong>Growth</strong> – Creating sustainable strategies that drive long-term success.</li>
      </ul>

      <p className="mb-4">
        My mission is to simplify complex challenges and turn them into opportunities.
        When you have a clear plan, success becomes inevitable.
      </p>

      <p className="mt-6 font-semibold text-center">Let’s connect and see how I can help you reach your next business milestone.</p>
    </div>
  );
};

export default AboutPage;

