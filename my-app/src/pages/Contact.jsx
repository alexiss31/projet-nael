import testImage from "../assets/test.jpg";

const Contact = () => {
  return (
    <div className="bg-charcoal-900 min-h-screen text-platinum-300">
      {/* Hero Section avec image de la devanture */}
      <div className="relative border-b border-charcoal-700">
        <div className="max-w-8xl mx-auto px-6 pt-[120px] pb-[80px]">
          <div className="relative z-10 text-center space-y-4">
            <h1 className="font-playfair text-5xl md:text-6xl italic text-gold-500 leading-tight">
              Une Expérience
              <br className="hidden md:block" /> Sur Mesure
            </h1>
            <p className="text-platinum-400 text-lg max-w-2xl mx-auto">
              Notre équipe d&apos;experts vous attend pour concrétiser vos projets élégants
            </p>
          </div>
          <div className="mt-12 rounded-2xl overflow-hidden border border-charcoal-700 shadow-xl max-w-4xl mx-auto">
            <img 
              src={testImage} 
              alt="Devanture de la boutique" 
              className="w-full h-[400px] object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Section Contact */}
      <div className="max-w-8xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Formulaire */}
          <div className="space-y-8">
            <div className="border-l-4 border-gold-500 pl-4">
              <h2 className="font-playfair text-3xl italic text-platinum-300">Formulaire de contact</h2>
              <p className="text-platinum-400 mt-2">Réponse sous 24h ouvrées</p>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm text-platinum-400 mb-2">Nom complet *</label>
                  <input 
                    type="text" 
                    className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-platinum-400 mb-2">Adresse email *</label>
                  <input 
                    type="email" 
                    className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-platinum-400 mb-2">Sujet *</label>
                <select className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 appearance-none">
                  <option>Rendez-vous sur mesure</option>
                  <option>Demande d&apos;information</option>
                  <option>Service client</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-platinum-400 mb-2">Message *</label>
                <textarea 
                  rows="5" 
                  className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-all"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gold-500 text-charcoal-900 py-4 rounded-lg font-medium hover:bg-gold-400 transition-colors flex items-center justify-center gap-2"
              >
                Envoyer le message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="border-l-4 border-gold-500 pl-4">
              <h2 className="font-playfair text-3xl italic text-platinum-300">Nos coordonnées</h2>
              <p className="text-platinum-400 mt-2">Visitez-nous ou contactez-nous directement</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-charcoal-800 rounded-lg border border-charcoal-700">
                  <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-platinum-300 font-medium">Adresse</h3>
                  <p className="text-platinum-400">24 Rue de l&apos;Élégance<br/>75001 Paris</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-charcoal-800 rounded-lg border border-charcoal-700">
                  <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-platinum-300 font-medium">Téléphone</h3>
                  <p className="text-platinum-400">+33 1 45 67 89 00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-charcoal-800 rounded-lg border border-charcoal-700">
                  <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-platinum-300 font-medium">Email</h3>
                  <p className="text-platinum-400">contact@boutique-luxe.com</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-charcoal-700">
              <h3 className="text-platinum-300 font-medium mb-4">Horaires d&apos;ouverture</h3>
              <div className="space-y-2 text-platinum-400">
                <p>Lun - Ven : 10h - 19h</p>
                <p>Samedi : 11h - 20h</p>
                <p>Dimanche : Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;