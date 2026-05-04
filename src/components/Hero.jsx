import { useInView } from '../hooks/useInView';

const Hero = () => {
  const [ref, isInView] = useInView();

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/couple-hero.png"
          alt="Couple in garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50/40 via-cream-50/20 to-cream-50/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-50 via-transparent to-transparent" />
      </div>

      {/* Floral Corner */}
      <img
        src="/images/floral-border.png"
        alt=""
        className="absolute top-0 left-0 w-72 md:w-96 opacity-70 pointer-events-none"
      />
      <img
        src="/images/floral-border.png"
        alt=""
        className="absolute bottom-0 right-0 w-72 md:w-96 opacity-70 pointer-events-none rotate-180"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <div
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-body text-sm md:text-base tracking-[0.4em] uppercase text-gold-600 mb-6">
            We are getting married
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl gold-text mb-4 text-shadow-gold">
            Amelia
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-16 md:w-24 h-px bg-gold-500/50" />
            <span className="font-script text-3xl md:text-4xl text-gold-500">&</span>
            <span className="w-16 md:w-24 h-px bg-gold-500/50" />
          </div>
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl gold-text text-shadow-gold">
            James
          </h1>
        </div>

        <div
          className={`mt-10 transition-all duration-1000 delay-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-divider mb-6" />
          <p className="font-sans text-lg md:text-xl text-gray-600 italic tracking-wide">
            Request the pleasure of your company
          </p>
          <p className="font-serif text-2xl md:text-3xl text-gold-700 mt-4 tracking-wider">
            August 24, 2026
          </p>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gray-500 mt-2">
            Saturday · Four o'clock in the afternoon
          </p>
        </div>



        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold-500/60">
              Scroll
            </span>
            <svg
              width="20"
              height="30"
              viewBox="0 0 20 30"
              className="text-gold-500/40"
            >
              <rect
                x="1"
                y="1"
                width="18"
                height="28"
                rx="9"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="10" cy="10" r="2" fill="currentColor" className="animate-pulse-soft" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
