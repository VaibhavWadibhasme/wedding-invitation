import { useEffect, useState } from 'react';

const FloatingPetals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const petalCount = 15;
    const newPetals = Array.from({ length: petalCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      size: 8 + Math.random() * 16,
      opacity: 0.15 + Math.random() * 0.35,
      rotation: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: '-20px',
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            opacity: petal.opacity,
            animation: `petalFall ${petal.duration}s linear ${petal.delay}s infinite`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            style={{ transform: `rotate(${petal.rotation}deg)` }}
          >
            <path
              d="M12 2C12 2 8 8 8 12C8 16 12 22 12 22C12 22 16 16 16 12C16 8 12 2 12 2Z"
              fill="rgba(212, 168, 84, 0.6)"
            />
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes petalFall {
          0% {
            transform: translateY(-20px) rotate(0deg) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg) translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingPetals;
