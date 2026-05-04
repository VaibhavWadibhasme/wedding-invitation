import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const Gallery = () => {
  const [ref, isInView] = useInView();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/images/couple-hero.png', alt: 'Couple in the garden', span: 'col-span-2 row-span-2' },
    { src: '/images/gallery-1.png', alt: 'Wedding table setting', span: '' },
    { src: '/images/gallery-2.png', alt: 'Wedding rings', span: '' },
    { src: '/images/venue-ceremony.png', alt: 'Ceremony venue', span: 'col-span-2' },
    { src: '/images/gallery-3.png', alt: 'Wedding cake', span: '' },
    { src: '/images/floral-border.png', alt: 'Floral arrangement', span: '' },
  ];

  return (
    <section id="gallery" className="relative py-28 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-gold-600 mb-3">
            A Glimpse of Our Journey
          </p>
          <h2 className="font-script text-5xl md:text-7xl gold-text mb-4">
            Gallery
          </h2>
          <div className="section-divider mt-4" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative overflow-hidden rounded-xl cursor-pointer group transition-all duration-700 ${
                isInView
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="font-body text-sm text-white/90">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-8 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full animate-scale-in">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-center font-body text-white/80 mt-4 text-sm">
              {selectedImage.alt}
            </p>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gold-500 text-white flex items-center justify-center hover:bg-gold-600 transition-colors shadow-lg"
              aria-label="Close lightbox"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
