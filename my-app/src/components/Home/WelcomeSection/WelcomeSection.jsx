import { Link } from "react-router-dom";

const WelcomeSection = () => {
  return (
    <section className="bg-charcoal-900 text-platinum-300 py-20 px-6 text-center flex flex-col items-center justify-center">
      <h1 className="text-5xl font-playfair italic text-gold-500 mb-4 animate-fade-in-down">
        Bienvenue chez Næl
      </h1>
      <p className="text-lg max-w-2xl text-platinum-400 mb-6 animate-fade-in">
        Découvrez l&apos;élégance intemporelle et le raffinement du sur-mesure.
        Chaque pièce est conçue avec passion pour sublimer votre style.
      </p>
      <Link
        to="/couture"
        className="bg-gold-500 text-charcoal-900 px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-gold-400 transition-all animate-fade-in-up"
      >
        Explorer la Collection
      </Link>
    </section>
  );
};

export default WelcomeSection;
