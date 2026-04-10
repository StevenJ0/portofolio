import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/context/LocaleContext';

const ExperienceSection = () => {
  const { t } = useLocale();
  const experiences = t.experience.items;

  return (
    <section id="experience" className="py-24 px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#121212]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-divider" />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            {t.experience.title}{' '}
            <span className="text-gold">{t.experience.titleHighlight}</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gold line */}
          <div className="absolute left-6 sm:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[#e8a020]/40 to-transparent pointer-events-none" />

          <div className="space-y-1">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative flex items-start gap-6 sm:gap-10 pb-10"
              >
                {/* Gold dot on timeline */}
                <div className="relative flex-shrink-0 w-12 sm:w-16 flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full border-2 z-10 mt-1.5 ${
                    exp.current ? 'bg-gold border-gold shadow-gold' : 'bg-[#2a2a2a] border-gold/60'
                  }`} />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4, borderColor: 'rgba(232,160,32,0.35)' }}
                  className="flex-1 bg-[#1c1c1c] border border-[#2a2a2a] rounded-xl p-5 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="text-white font-bold text-base">{exp.title}</h3>
                      <p className="text-gold text-sm font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="text-[#2a2a2a] bg-[#2a2a2a] text-gold text-xs font-bold px-2.5 py-0.5 rounded border border-gold/30 self-start sm:self-auto">
                        {exp.year}
                      </span>
                      <span className="text-[#555] text-xs">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-[#777] text-sm leading-relaxed">{exp.description}</p>

                  {exp.current && (
                    <div className="mt-2 inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                      <span className="text-gold text-xs font-semibold">{t.experience.present}</span>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-4 flex justify-center"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold"
          >
            {t.experience.getInTouch}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;