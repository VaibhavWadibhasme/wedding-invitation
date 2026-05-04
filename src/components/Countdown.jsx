import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

const Countdown = () => {
  const [ref, isInView] = useInView();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date('2026-08-24T16:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-24 bg-cream-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div ref={ref} className="max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-gold-600 mb-3">
            Counting Down To
          </p>
          <h2 className="font-script text-5xl md:text-6xl gold-text mb-2">
            Our Special Day
          </h2>
          <div className="section-divider mt-4 mb-12" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {timeUnits.map((unit, index) => (
            <div
              key={unit.label}
              className={`transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              <div className="glass-card rounded-2xl p-6 md:p-8 elegant-border">
                <div className="font-serif text-5xl md:text-6xl font-light text-gold-700 tabular-nums">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="font-body text-xs tracking-[0.3em] uppercase text-gray-500 mt-3">
                  {unit.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 transition-all duration-1000 delay-700 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="font-sans italic text-gray-500 text-lg">
            "Two souls, one heart — forever intertwined"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
