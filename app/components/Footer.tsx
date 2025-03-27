
const Footer = () => {
  return (
    <footer className=" w-full bg-primary text-white text-center px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-semibold tracking-wide">EastWest Solutions</h2>
          <p className="text-sm mt-2 text-gray-400">
            Strategic consulting for business, leadership, and career growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/management-consulting" className="hover:text-white">Management Consulting</a></li>
            <li><a href="/strategy-planning" className="hover:text-white">Strategy Planning</a></li>
            <li><a href="/career-development" className="hover:text-white">Career Development</a></li>
            <li><a href="/career-development" className="hover:text-white">About</a></li>
            <li><a href="/FAQs" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: <a href="mailto:info@eastwestsolutions.us" className="hover:text-white">info@eastwestsolutions.us</a></li>
            <li>Location: Remote / Virtual</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} EastWest Solutions. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
