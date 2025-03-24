function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-l-4 border-primary pl-4">
      <h3 className="font-semibold text-gray-800">{question}</h3>
      <p className="text-gray-600 mt-1">{answer}</p>
    </div>
  );
}

export default FAQItem;
