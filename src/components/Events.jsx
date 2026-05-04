import { useInView } from '../hooks/useInView';

const Events = () => {
  const [ref, isInView] = useInView();

  const events = [
    {
      title: 'Haldi Ceremony',
      time: '7:30 PM',
      venue: 'At our home',
      address: '116 Ward No.4, Behind Mahajan Building, Mandhal, Nagpur, Maharashtra 441210',
      description:
        'Enjoy Haldi Ceremony with us',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 2L16 2L13 10H11L8 2Z" />
          <path d="M12 10V18" />
          <path d="M8 18H16" />
        </svg>
      ),
      image: '/images/gallery-1.png',
    },
    {
      title: 'The Warmala',
      time: '12:15 PM',
      venue: 'Radha Krushna Hall',
      address: 'Main Road, Mouda, behind Bus Stand, Nagpur, Maharashtra 441104',
      description:
        'Join us as we exchange our vows in a beautiful garden ceremony surrounded by nature and the people we love.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>
      ),
      image: '/images/venue-ceremony.png',
    },

    {
      title: 'The Reception',
      time: '7:00 PM',
      venue: 'Ram Mandir Hall',
      address: 'Near Zilha Parishad High School and Junior College Mandhal taluka, Kuhi, Maharashtra 441210',
      description:
        'Dinner, dancing, and celebration under the stars.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6V12L16 14" />
        </svg>
      ),
      image: '/images/gallery-3.png',
    },
  ];

  return (
    <section id="events" className="relative py-28 bg-cream-gradient overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-gold-600 mb-3">
            Join Us In Celebration
          </p>
          <h2 className="font-script text-5xl md:text-7xl gold-text mb-4">
            Wedding Events
          </h2>
          <div className="section-divider mt-4" />
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${isInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full elegant-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream-50/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block font-body text-xs tracking-[0.3em] uppercase bg-gold-500/90 text-white px-4 py-1.5 rounded-full">
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                  <div className="text-gold-500 mb-4 flex justify-center">
                    {event.icon}
                  </div>
                  <h3 className="font-serif text-2xl text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="font-body text-sm font-medium text-gold-600 mb-1">
                    {event.venue}
                  </p>
                  <p className="font-body text-xs text-gray-400 mb-4">
                    {event.address}
                  </p>
                  <div className="w-8 h-px bg-gold-400/40 mx-auto mb-4" />
                  <p className="font-body text-sm text-gray-500 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dress Code */}
        <div
          className={`mt-16 text-center glass-card rounded-2xl p-8 max-w-2xl mx-auto elegant-border transition-all duration-1000 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h3 className="font-serif text-xl text-gray-800 mb-2">Dress Code</h3>
          <p className="font-body text-sm text-gray-500">
            Formal / Black Tie Optional
          </p>
          <p className="font-body text-xs text-gray-400 mt-2 italic">
            We kindly ask guests to wear formal attire in neutral, pastel, or jewel tones
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
