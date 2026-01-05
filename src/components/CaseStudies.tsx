import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  authorPhoto: string;
  role: string;
  company: string;
  companyLogo: string;
  website: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'boomlab',
    quote:
      'Construímos dashboards que nos permitiram perceber cada pormenor do nosso negócio, e automações com inteligência artificial que nos pouparam +10 horas por semana. A qualidade do trabalho e velocidade é impressionante.',
    author: 'Guilherme Freitas',
    authorPhoto: '/guilherme.png',
    role: 'COO',
    company: 'BoomLab',
    companyLogo: '/boomlab-logo.png',
    website: 'https://boomlab.agency/',
  },
  // Adiciona mais testemunhos aqui
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Light Background - matching the reference */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-cyan-50/30 to-slate-50/80" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="relative">
          {/* Navigation Arrows */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-xl border-2 border-slate-900 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-300 group"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-xl border-2 border-slate-900 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-300 group"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}

          {/* Testimonial Content */}
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center py-10 md:py-12 px-6 md:px-12"
          >
            {/* Quote */}
            <blockquote className="mb-8">
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-slate-900 leading-relaxed max-w-3xl mx-auto">
                "{current.quote}"
              </p>
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {/* Author Photo & Details */}
              <div className="flex items-center gap-3">
                <img
                  src={current.authorPhoto}
                  alt={current.author}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-slate-200"
                />
                <div className="text-left">
                  <div className="text-base md:text-lg font-semibold text-slate-900">
                    {current.author}
                  </div>
                  <div className="text-xs md:text-sm text-slate-600">{current.role}</div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-10 bg-slate-300 hidden md:block" />

              {/* Company Logo */}
              <motion.a
                href={current.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="block cursor-target"
              >
                <img
                  src={current.companyLogo}
                  alt={`${current.company} logo`}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Pagination Dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-slate-900 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir para testemunho ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

