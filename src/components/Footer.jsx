const Footer = () => {
  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 to-cream-200/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Monogram */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3">
            <span className="w-12 h-px bg-gold-400/40" />
            <span className="font-script text-4xl gold-text">V & H</span>
            <span className="w-12 h-px bg-gold-400/40" />
          </div>
        </div>

        {/* Quote */}
        <p className="font-sans italic text-gray-500 text-lg mb-2 max-w-lg mx-auto">
          "Love is not about how many days, months, or years you have been together.
          Love is about how much you love each other every single day."
        </p>
        <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-500/60 mb-10">
          — Unknown
        </p>

        {/* Date */}
        <div className="glass-card rounded-2xl inline-block px-8 py-4 mb-10">
          <p className="font-serif text-lg text-gold-700 tracking-wider">
            June 24, 2026
          </p>
          <p className="font-body text-xs text-gray-400 mt-1">
            Radha Krushna Hall · Mauda, Nagpur
          </p>
        </div>


        {/* Hashtag */}
        <div className="mb-10">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">
            Share your moments
          </p>
          <p className="font-serif text-xl text-gold-600">#VaibhavAndHimanshaForever</p>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Copyright */}
        <p className="font-body text-xs text-gray-400">
          Made with ♥ — Vaibhav & Himansha · 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
