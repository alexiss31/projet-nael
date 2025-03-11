// components/FAQ.jsx
const FAQ = () => {
  const faqs = [
    {
      question: "Quels sont les délais de livraison ?",
      answer: "Les commandes sont traitées sous 24h et livrées en 2-5 jours ouvrés."
    },
    // ... autres questions
  ];

  return (
    <div className="bg-charcoal-900 min-h-screen text-platinum-300">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-playfair text-4xl italic text-gold-500 text-center mb-12 animate-fade-in-down">
          Foire aux Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-charcoal-700 rounded-lg">
              <button className="w-full text-left p-6 hover:bg-charcoal-800 transition-colors">
                <h3 className="text-lg text-platinum-300">{faq.question}</h3>
              </button>
              <div className="p-6 pt-6 border-t border-charcoal-700">
                <p className="text-platinum-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;