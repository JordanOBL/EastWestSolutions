export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-teal-400">Thank You!</h1>
        <p className="text-gray-700 mt-2">Your payment was successful.</p>
        <p className="text-gray-500">We've sent a confirmation email with the details.</p>
        <a href="/" className="mt-4 inline-block px-6 py-2 text-white bg-primary rounded-lg hover:bg-secondary hover:text-primary transition">
          Back to Homepage
        </a>
      </div>
    </div>
  );
}

