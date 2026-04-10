import React, { useState, useEffect, useMemo } from 'react';
import { useLocale } from '@/context/LocaleContext';
import type { Locale } from '@/locales';

const HomeIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const UserIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const GridIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);
const BriefcaseIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
  </svg>
);
const MailIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* ─── Language Switcher ─────────────────────────────────────── */

/** Horizontal layout — used in mobile overlay */
const LangSwitcherHorizontal: React.FC = () => {
  const { locale, setLocale } = useLocale();
  return (
    <div
      className="flex items-center bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden text-xs shadow-md"
      role="group"
      aria-label="Language switcher"
    >
      {(['en', 'id'] as Locale[]).map((lang) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          className={`min-w-[44px] min-h-[44px] px-4 py-2 font-bold uppercase tracking-widest transition-all duration-200 ${
            locale === lang
              ? 'bg-gold text-[#111]'
              : 'text-[#666] hover:text-white hover:bg-white/5'
          }`}
          aria-pressed={locale === lang}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

/** Vertical stacked layout — used in the narrow 60px desktop sidebar */
const LangSwitcherVertical: React.FC = () => {
  const { locale, setLocale } = useLocale();
  return (
    <div className="flex flex-col items-center gap-1.5" role="group" aria-label="Language switcher">
      {(['en', 'id'] as Locale[]).map((lang) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          className={`w-9 h-9 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-200 ${
            locale === lang
              ? 'bg-gold text-[#111] shadow-[0_0_12px_rgba(232,160,32,0.4)]'
              : 'text-[#555] hover:text-white hover:bg-white/8 border border-transparent hover:border-white/10'
          }`}
          aria-pressed={locale === lang}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

/* ─── Nav Item ──────────────────────────────────────────────── */
const NavItem: React.FC<{ icon: React.ReactNode; label: string; isActive: boolean; onClick: () => void }> = ({
  icon, label, isActive, onClick,
}) => (
  <div className="relative group">
    <button
      className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
        isActive
          ? 'text-gold bg-gold/10 ring-1 ring-gold/30 shadow-[0_0_16px_rgba(232,160,32,0.15)]'
          : 'text-[#4a4a4a] hover:text-gold hover:bg-white/5'
      }`}
      onClick={(e) => { e.preventDefault(); onClick(); }}
      aria-label={label}
    >
      <span className={`transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
        {icon}
      </span>
    </button>

    {/* Tooltip */}
    <div className="absolute left-full ml-3.5 whitespace-nowrap bg-[#1c1c1c]/95 backdrop-blur-sm text-white text-xs py-1.5 px-3 rounded-lg border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 hidden lg:block z-50 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
      {label}
      <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#1c1c1c]" />
    </div>
  </div>
);

/* ─── Sidebar ───────────────────────────────────────────────── */
const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLocale();

  const menuItems = useMemo(() => [
    { icon: <HomeIcon size={18} />, labelKey: 'home' as const, id: 'home' },
    { icon: <UserIcon size={18} />, labelKey: 'about' as const, id: 'about' },
    { icon: <GridIcon size={18} />, labelKey: 'projects' as const, id: 'projects' },
    { icon: <BriefcaseIcon size={18} />, labelKey: 'experience' as const, id: 'experience' },
    { icon: <MailIcon size={18} />, labelKey: 'contact' as const, id: 'contact' },
  ], []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /* Active section tracking */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (let i = menuItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(menuItems[i].id);
        if (el && scrollY >= el.offsetTop) { setActiveItem(i); break; }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
    setMobileMenuOpen(false);
    scrollToSection(menuItems[index].id);
  };

  /* Close mobile menu on outside click / scroll */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuOpen && !(e.target as Element).closest('.mobile-menu')) setMobileMenuOpen(false);
    };
    const handleScroll = () => { if (mobileMenuOpen) setMobileMenuOpen(false); };
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── Mobile Hamburger Button ────────────────────────────── */}
      <button
        className="mobile-menu fixed top-4 right-4 z-50 p-2.5 rounded-xl bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 text-white lg:hidden focus:outline-none shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors hover:bg-white/10"
        onClick={(e) => { e.stopPropagation(); setMobileMenuOpen(p => !p); }}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* ── Mobile Fullscreen Overlay ──────────────────────────── */}
      <div
        className={`mobile-menu fixed inset-0 bg-[#0d0d0d]/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-5 transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`flex items-center gap-4 text-xl px-8 py-3 rounded-xl min-w-[200px] transition-all duration-200 ${
              activeItem === index
                ? 'text-gold bg-gold/10 ring-1 ring-gold/20'
                : 'text-[#aaa] hover:text-white hover:bg-white/5'
            }`}
            onClick={() => handleItemClick(index)}
          >
            {item.icon}
            <span className="font-medium">{t.nav[item.labelKey]}</span>
          </button>
        ))}
        {/* Horizontal language switcher in overlay — has plenty of space */}
        <div className="mt-4">
          <LangSwitcherHorizontal />
        </div>
      </div>

      {/* ── Desktop Sidebar — slim 60px left rail ─────────────── */}
      <div className="fixed top-0 left-0 h-full w-[60px] bg-[#0d0d0d]/90 backdrop-blur-md border-r border-white/[0.06] hidden lg:flex flex-col items-center justify-between py-6 z-50">
        {/* Logo mark */}
        <div className="w-9 h-9 bg-gold rounded-xl flex items-center justify-center ring-1 ring-gold/30 shadow-[0_0_20px_rgba(232,160,32,0.25)] transition-transform duration-200 hover:scale-105 cursor-pointer">
          <span className="text-[#111] font-black text-sm select-none">SJ</span>
        </div>

        {/* Nav items */}
        <div className="flex flex-col items-center gap-3">
          {menuItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={t.nav[item.labelKey]}
              isActive={activeItem === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>

        {/* Vertical language switcher — fits perfectly in the 60px rail */}
        <LangSwitcherVertical />
      </div>

      {/* ── Bottom Nav — xs / sm screens only ─────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0d0d0d]/95 backdrop-blur-lg border-t border-white/[0.06] p-2 z-40 flex sm:hidden">
        <div className="flex justify-around items-center w-full max-w-sm mx-auto">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`flex flex-col items-center gap-1 min-w-[44px] min-h-[44px] p-2 rounded-lg transition-colors ${
                activeItem === index ? 'text-gold' : 'text-[#555] hover:text-white'
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item.icon}
              <span className="text-[9px] font-medium">{t.nav[item.labelKey]}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;