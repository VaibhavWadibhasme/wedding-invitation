import { useInView } from '../hooks/useInView';

const OurStory = () => {
  const [ref, isInView] = useInView();

  const timeline = [
    {
      date: 'May 2026',
      title: 'First Meeting',
      description:
        'We Met at her home. It was love at first sight. I knew i was going to marry her that day. My parents were there too, and they loved her too. Her parents were also there and they loved me too. It was a match made in heaven.',
      icon: '☕',
    },
  ];

  return (
    <section id="story" className="relative py-28 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #D4A854 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-gold-600 mb-3">
            How It All Began
          </p>
          <h2 className="font-script text-5xl md:text-7xl gold-text mb-4">
            Our Love Story
          </h2>
          <div className="section-divider mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-300/0 via-gold-400/40 to-gold-300/0 hidden md:block" />

          {timeline.map((event, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 transition-all duration-700 ${isInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
            >
              {/* Left content (even items) */}
              <div
                className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-3 md:pl-12'
                  }`}
              >
                <div className="glass-card rounded-2xl p-8 hover:shadow-lg transition-shadow duration-500">
                  <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-600 mb-2">
                    {event.date}
                  </p>
                  <h3 className="font-serif text-2xl text-gray-800 mb-3">
                    {event.title}
                  </h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Center dot */}
              <div className="md:w-2/12 flex justify-center my-4 md:my-0 order-first md:order-none">
                <div className="w-14 h-14 rounded-full bg-cream-50 border-2 border-gold-400/50 flex items-center justify-center shadow-lg relative z-10">
                  <span className="text-xl">{event.icon}</span>
                </div>
              </div>

              {/* Right content (odd items) */}
              <div
                className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:order-3' : ''
                  }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
