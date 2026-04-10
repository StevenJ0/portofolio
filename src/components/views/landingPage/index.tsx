import React, { useEffect, useState, useMemo } from 'react';
import { motion, type Variants } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaChevronDown } from 'react-icons/fa';

import Sidebar from '@/components/fragments/navbar';
import AboutMeSection from '../section/aboutme';
import ProjectsExperiencesSection from '../section/projectExperience';
import ExperienceSection from '../section/experience';
import ContactSection from '../section/contact';
import MultiLanguageGreeting from '@/components/animation/multiLanguage';
import { useLocale } from '@/context/LocaleContext';
import { useActiveSection } from '@/hooks/useActiveSection';

const SECTION_IDS = ['home', 'about', 'projects', 'experience', 'contact'];

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/StevenJ0', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/steven-sihombing', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/steven_shmb/', label: 'Instagram' },
];

const LandingPageView = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLocale();
  const { activeSection, setActiveSection } = useActiveSection(SECTION_IDS, 'home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Framer-motion variants
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  const photoVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  };
  const floatVariants: Variants = {
    float: {
      y: [-10, 10, -10],
      transition: { duration: 4, ease: 'easeInOut', repeat: Infinity },
    },
  };

  return (
    <div className="min-h-screen bg-[#121212] overflow-x-hidden">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Scroll indicator */}
      <motion.div
        className="fixed inset-x-0 bottom-8 flex justify-center z-30 pointer-events-none"
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? 8 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-[#555] tracking-widest uppercase">{t.hero.scrollDown}</span>
          <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
            <FaChevronDown className="text-gold text-sm" />
          </motion.div>
        </div>
      </motion.div>

      <main className="lg:pl-16">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden px-6 sm:px-10 lg:px-20 xl:px-32">
          {/* background grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />
          {/* gold radial glow */}
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8 py-20 md:py-0">
            {/* ── Left: Text ── */}
            <motion.div
              className="flex-1 max-w-xl"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <MultiLanguageGreeting />

              <p className="text-[#aaa] text-sm font-semibold tracking-widest uppercase mb-3 mt-4">
                {t.hero.iam}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                Steven <br/>
                <span className="text-gold">Jonathan</span><br/>
                Sihombing
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-gold" />
                <p className="text-[#aaa] text-sm sm:text-base font-medium tracking-wide">
                  {t.hero.role}
                </p>
              </div>

              <p className="text-[#777] text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                {t.hero.bio}
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                <button onClick={scrollToContact} className="btn-gold text-sm sm:text-base">
                  {t.hero.contactMe}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>

                <a
                  href="/files/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold text-sm sm:text-base"
                >
                  {t.hero.viewResume}
                </a>
              </div>
            </motion.div>

            {/* ── Right: Photo + Socials ── */}
            <motion.div
              className="flex-1 flex justify-center md:justify-end items-center gap-6 md:gap-8"
              variants={photoVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Social strip */}
              <div className="hidden sm:flex flex-col items-center gap-4">
                <div className="w-px h-16 bg-[#2a2a2a]" />
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-[#555] text-lg hover:text-gold transition-colors duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
                <div className="w-px h-16 bg-[#2a2a2a]" />
              </div>

              {/* Profile image — floating */}
              <motion.div
                className="relative"
                variants={floatVariants}
                animate="float"
              >
                {/* Gold ring */}
                <div className="absolute -inset-3 rounded-full border border-gold/20" />
                <div className="absolute -inset-6 rounded-full border border-gold/10" />

                {/* Gold background blob */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-40 bg-gold/15 rounded-full blur-2xl" />

                {/* Image */}
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-gold/30 shadow-gold-lg">
                  <img
                    src="/images/steven.jpg"
                    alt="Steven Jonathan Sihombing"
                    className="w-full h-full object-cover"
                  />
                  {/* Bottom gradient blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/40 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-[#1c1c1c] border border-[#2a2a2a] rounded-lg px-3 py-2 shadow-lg"
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
                >
                  <p className="text-gold font-bold text-sm">{t.hero.badgeYears}</p>
                  <p className="text-[#666] text-xs">{t.hero.badgeYearsLabel}</p>
                </motion.div>

                <motion.div
                  className="absolute -top-4 -right-4 bg-[#1c1c1c] border border-[#2a2a2a] rounded-lg px-3 py-2 shadow-lg"
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
                >
                  <p className="text-gold font-bold text-sm">{t.hero.badgeProjects}</p>
                  <p className="text-[#666] text-xs">{t.hero.badgeProjectsLabel}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── OTHER SECTIONS ───────────────────────────────────── */}
        <AboutMeSection />
        <div className="relative z-10"><ProjectsExperiencesSection /></div>
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default LandingPageView;