import testImage from "../assets/test.jpg";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Nuit des Créateurs",
      date: "25 OCT",
      location: "Flagship Paris",
      tag: "VIP ACCESS",
      image: testImage,
    },
    {
      id: 2,
      title: "Atelier Sur Mesure",
      date: "14 NOV",
      location: "Atelier Lyon",
      tag: "MASTERCLASS",
      image: testImage,
    },
    {
      id: 3,
      title: "Dévoilement Collection Hiver",
      date: "5 DÉC",
      location: "Showroom Privé",
      tag: "EXCLUSIVITÉ",
      image: testImage,
    },
    // Ajouter d'autres événements
    ...Array(5).fill({
      id: 4,
      title: "Rencontre Artisanale",
      date: "19 JAN",
      location: "Manufacture Marseille",
      tag: "PORTES OUVERTES",
      image: testImage,
    }),
  ];

  return (
    <div className="bg-charcoal-900 min-h-screen text-platinum-300">
      {/* Hero Section Parallax */}
      <div className="relative h-[70vh] overflow-hidden border-b border-charcoal-700">
        <div className="absolute inset-0 z-0">
          <img 
            src={testImage} 
            alt="Backdrop Événements"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/80 to-transparent" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <h1 className="font-playfair text-6xl md:text-7xl italic text-gold-500 leading-tight mb-6 animate-fade-in-down">
              L&apos;Expérience <span className="text-platinum-300">Haute Couture</span>
            </h1>
            <p className="text-lg md:text-xl text-platinum-400 max-w-2xl mx-auto mb-8">
              Immersion sensorielle dans l&apos;artisanat d&apos;exception. Événements privés et expériences sur mesure.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-gold-500/10 border border-gold-500/30 hover:bg-gold-500/20 text-gold-500 px-8 py-3 rounded-full transition-all duration-300">
                Programme 2024
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Horizontale */}
      <div className="border-y border-charcoal-700 py-4">
        <div className="max-w-8xl mx-auto px-6 flex overflow-x-auto scrollbar-hide">
          {['TOUS', 'OCT', 'NOV', 'DÉC', 'JAN', 'FEV'].map((month) => (
            <button 
              key={month}
              className="px-6 py-2 text-platinum-400 hover:text-gold-500 whitespace-nowrap transition-colors"
            >
              {month}
            </button>
          ))}
        </div>
      </div>

      {/* Grille Événements */}
      <div className="max-w-8xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="group relative bg-charcoal-800 rounded-lg overflow-hidden transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-transparent to-transparent" />
                <span className="absolute top-4 right-4 bg-charcoal-900/80 text-gold-500 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  {event.tag}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-platinum-400">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>

                <h3 className="font-playfair text-2xl text-platinum-300 leading-snug">
                  {event.title}
                </h3>

                <div className="pt-4 border-t border-charcoal-700">
                  <button className="w-full bg-gold-500/10 hover:bg-gold-500/20 text-gold-500 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <span>Réserver sa place</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Abonnement */}
      <div className="bg-charcoal-800 border-y border-charcoal-700">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="font-playfair text-3xl text-gold-500 italic mb-4">
            L&apos;excellence n&apos;attend pas
          </div>
          <p className="text-platinum-400 mb-8 max-w-xl mx-auto">
            Accès prioritaire aux événements privés. Soyez le premier informé des nouvelles expériences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="bg-charcoal-900 border border-charcoal-700 rounded-lg px-4 py-3 text-platinum-300 focus:outline-none focus:border-gold-500" 
            />
            <button className="bg-gold-500 text-charcoal-900 px-6 py-3 rounded-lg font-medium hover:bg-gold-400 transition-colors">
              Accéder aux privilèges
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;