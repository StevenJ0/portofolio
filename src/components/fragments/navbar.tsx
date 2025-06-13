import React, { useState, useEffect, useMemo } from 'react';

// SVG Icons
const HomeIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const UserIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const GridIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const ExperienceIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 13a2 2 0 0 1-2 2h-1.5l-.447.894A2 2 0 0 1 15.237 18H8.763a2 2 0 0 1-1.789-1.106L6.5 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8z"></path>
    <path d="M12 9v3l2 2"></path>
  </svg>
);

const EnvelopeIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <div className="relative group">
      <button
        className={`
          flex items-center justify-center 
          w-10 h-10 sm:w-12 sm:h-12 lg:p-3 rounded-full 
          transform transition-all duration-300
          ${isActive ? 'text-blue-400 scale-110 bg-gray-800' : 'text-white hover:text-blue-400 hover:scale-110'}
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        `}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        aria-label={`Go to ${label} section`}
      >
        {icon}
      </button>
      <div className="absolute left-full ml-2 whitespace-nowrap bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all hidden lg:block">
        {label}
      </div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuButtonHovered, setIsMenuButtonHovered] = useState(false);

  const menuItems = useMemo(() => [
    { icon: <HomeIcon size={18} />, label: "Home" },
    { icon: <UserIcon size={18} />, label: "About" },
    { icon: <GridIcon size={18} />, label: "Projects" },
    { icon: <ExperienceIcon size={18} />, label: "Experience" },
    { icon: <EnvelopeIcon size={18} />, label: "Contact" }
  ], []);

  const scrollToSection = (label: string) => {
    const targetId = label.toLowerCase();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => {
        const element = document.getElementById(item.label.toLowerCase());
        return element ? { 
          element, 
          offsetTop: element.offsetTop 
        } : null;
      }).filter(Boolean);
  
      const scrollPosition = window.scrollY + 100;
  
      for (let i = 0; i < sections.length; i++) {
        const currentSection = sections[i];
        const nextSection = sections[i + 1];
  
        if (currentSection && 
            scrollPosition >= currentSection.offsetTop && 
            (i === sections.length - 1 || 
             (nextSection && scrollPosition < nextSection.offsetTop))) {
          setActiveItem(i);
          break;
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
    setMobileMenuOpen(false);
    scrollToSection(menuItems[index].label);
  };

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="fixed top-4 right-4 z-50 p-3 sm:p-4 rounded-full bg-gray-900/90 backdrop-blur-md text-white lg:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg mobile-menu min-w-[44px] min-h-[44px] flex items-center justify-center"
        onClick={toggleMobileMenu}
        onMouseEnter={() => setIsMenuButtonHovered(true)}
        onMouseLeave={() => setIsMenuButtonHovered(false)}
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
        style={{ 
          touchAction: 'manipulation',
          transform: isMenuButtonHovered ? 'scale(1.1)' : 'none',
          transition: 'transform 0.2s ease'
        }}
      >
        {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Mobile Sidebar */}
      <div className={`mobile-menu fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-6 transition-all duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`flex items-center space-x-3 text-lg sm:text-xl p-3 sm:p-4 rounded-full transition-all duration-200 ${
              activeItem === index 
                ? 'text-blue-400 bg-gray-800 scale-105' 
                : 'text-white hover:text-blue-400 hover:bg-gray-800/50'
            }`}
            onClick={() => handleItemClick(index)}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Desktop Sidebar */}
      <div className="fixed top-1/2 left-2 sm:left-4 lg:left-6 transform -translate-y-1/2 bg-gray-900/90 backdrop-blur-lg text-gray-100 rounded-full px-1 sm:px-2 py-4 sm:py-6 lg:py-8 hidden lg:flex flex-col shadow-lg shadow-blue-500/20 z-50 border border-gray-800">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 lg:space-y-8">
          {menuItems.map((item, index) => (
            <SidebarItem 
              key={index}
              icon={item.icon}
              label={item.label}
              isActive={activeItem === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 p-2 z-40 flex sm:hidden">
        <div className="flex justify-around items-center w-full max-w-md mx-auto">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                activeItem === index 
                  ? 'text-blue-400 scale-105' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => handleItemClick(index)}
              aria-label={`Go to ${item.label} section`}
            >
              {item.icon}
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;