import React, { useState, useEffect } from 'react'
import { useMemo } from 'react';

// SVG Icons (updated with Experience icon)
const HomeIcon = ({ size } : any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const UserIcon = ({ size } : any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const GridIcon = ({ size } : any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const ExperienceIcon = ({ size } : any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 13a2 2 0 0 1-2 2h-1.5l-.447.894A2 2 0 0 1 15.237 18H8.763a2 2 0 0 1-1.789-1.106L6.5 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8z"></path>
    <path d="M12 9v3l2 2"></path>
  </svg>
);

const EnvelopeIcon = ({ size } : any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const SidebarItem = ({ icon, label, isActive, onClick  } : any) => {
  return (
    <div className="relative group">
      <button
        className={`
          flex items-center justify-center 
          p-3 rounded-full 
          transform transition-all duration-300
          ${isActive ? 'text-blue-400 scale-110 bg-gray-800' : 'text-white hover:text-blue-400 hover:scale-110'}
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        `}
        onClick={(e) => {
          e.preventDefault();
          onClick();
          
          // Smooth scroll to the section
          const targetId = label.toLowerCase();
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }}
        aria-label={`Go to ${label} section`}
      >
        {icon}
      </button>
      <div className="absolute left-full ml-2 whitespace-nowrap bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        {label}
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = useMemo(() => [
    { icon: <HomeIcon size={22} />, label: "Home" },
    { icon: <UserIcon size={22} />, label: "About" },
    { icon: <GridIcon size={22} />, label: "Projects" },
    { icon: <ExperienceIcon size={22} />, label: "Experience" },
    { icon: <EnvelopeIcon size={22} />, label: "Contact" }
  ], []);

  // Handle scroll to update active item
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

  const handleItemClick = (index : number) => {
    setActiveItem(index);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-gray-900/80 backdrop-blur-md text-white md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-gray-900/90 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`text-2xl p-4 rounded-full transition-colors ${activeItem === index ? 'text-blue-400 bg-gray-800' : 'text-white'}`}
            onClick={() => handleItemClick(index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Desktop Sidebar */}
      <div className="fixed top-1/2 left-6 transform -translate-y-1/2 bg-gray-900/80 backdrop-blur-lg text-gray-100 rounded-full px-4 py-8 hidden md:flex flex-col shadow-lg shadow-blue-500/20 z-50 border border-gray-800">
        <div className="flex flex-col items-center space-y-12">
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
    </>
  );
};

export default Sidebar;