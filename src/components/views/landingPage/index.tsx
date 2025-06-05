import React, { useState, useEffect } from 'react';
import { 
  FaGithub, 
  FaInstagram, 
  FaLinkedin, 
  FaCode, 
  FaLaptopCode, 
  FaPalette, 
  FaPencilRuler,
  FaChevronDown
} from 'react-icons/fa';

import Sidebar from '@/components/fragments/navbar';
import AboutMeSection from '../section/aboutme';
import ProjectsExperiencesSection from '../section/projectExperience';
import ExperienceSection from '../section/experience';
import ContactSection from '../section/contact';
import MultiLanguageGreeting from '@/components/animation/multiLanguage';

const LandingPageView = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 overflow-x-hidden">
      <Sidebar />
      
      <main className="relative px-4 sm:px-6 md:px-12 lg:px-24 py-16 md:py-20 mx-auto max-w-screen-2xl">
        {/* Enhanced Background effects with animations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Animated glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-float-delayed"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          {/* Gradient at the top */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        </div>
        
        {/* Scroll indicator */}
        <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 text-gray-400">Scroll down</span>
            <FaChevronDown />
          </div>
        </div>

        {/* Hero Section with entrance animations */}
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between relative z-10 pt-10 md:pt-0">
          {/* Left Content - Text */}
          <div className={`w-full md:w-3/5 lg:w-2/5 text-white mb-12 md:mb-0 order-2 md:order-1 mt-8 md:mt-0 transition-all duration-1000 ${mounted ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'}`}>
            {/* Replace static greeting with animated MultiLanguageGreeting component */}
            <MultiLanguageGreeting />
          
            {/* Name section with better responsive text sizing */}
            <div className="mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-text-glow">
                Im <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 whitespace-normal sm:whitespace-nowrap animate-gradient-shift">
                  Steven Jonathan Sihombing
                </span>
              </h1>
            </div>
          
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              a <span className="text-blue-400 animate-pulse">Website Developer</span>
            </h2>
            
            <p className="text-gray-400 mb-6 sm:mb-8 max-w-lg text-base sm:text-lg animate-fade-in-up">
              Crafting digital experiences that blend aesthetics with functionality. 
              Specializing in intuitive interfaces and memorable user experiences.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in-up-delayed">
              <a 
                href="/files/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1 hover:scale-105 animate-pulse-slow"
              >
                <span>View Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            {/* Skills Section with staggered animation */}
            <div className="mt-8 sm:mt-12 flex flex-wrap gap-2 sm:gap-3">
              <Skill icon={<FaLaptopCode />} text="UI Design" delay="0.1s" />
              <Skill icon={<FaPalette />} text="UX Research" delay="0.2s" />
              <Skill icon={<FaPencilRuler />} text="Prototyping" delay="0.3s" />
              <Skill icon={<FaCode />} text="Frontend" delay="0.4s" />
            </div>
          </div>
          
          {/* Right Content - Profile Image and Social Media */}
          <div className={`relative w-full md:w-2/5 flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0 transition-all duration-1000 ${mounted ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'}`}>
            <ProfileSection />
          </div>
        </section>
        
        {/* About Me Section */}
        <AboutMeSection />

        {/* Project Experience Section */}
        <div className='z-100'>
          <ProjectsExperiencesSection />
        </div>

        {/* Experience Section */}
        <ExperienceSection />

        {/* Contact Section */}
        <ContactSection />
        
      </main>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(-10px) rotate(240deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(-120deg); }
          66% { transform: translateY(-25px) rotate(-240deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
          50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(147, 51, 234, 0.4); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.5s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up-delayed {
          animation: fade-in-up 1s ease-out 0.8s forwards;
          opacity: 0;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

const ProfileSection = () => {
  return (
    <div className="relative animate-profile-entrance">
      {/* Background shape */}
      <div className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-full blur-2xl animate-pulse"></div>
      
      {/* Decorative circles - improved position for different screen sizes */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
        {/* Rotating circles - tighter position to photo */}
        <div className="absolute inset-0 border-2 border-transparent border-t-blue-500/50 border-r-purple-500/50 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-0 border-2 border-transparent border-b-purple-500/50 border-l-blue-500/50 rounded-full animate-spin-slow-reverse"></div>
      </div>
      
      {/* Profile Image Container - Fixed centering and improved styling */}
      <div className="relative z-10 flex justify-center items-center">
        <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-1 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-500">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <img 
              src="/images/steven.jpg" 
              alt="Steven Jonathan Sihombing Profile" 
              className="w-full h-full object-cover rounded-full transform hover:scale-105 transition duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Social Media Icons - adjusted for responsiveness */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <SocialMediaRing />
      </div>
    </div>
  );
};

const SocialMediaRing = () => {
  // Updated social icons - removed Twitter, added proper links
  const socialIcons = [
    { 
      icon: <FaGithub size={18} />, 
      gradient: "from-gray-700 to-gray-900", 
      tooltip: "GitHub", 
      angle: 60,
      url: "https://github.com/StevenJ0"
    },
    { 
      icon: <FaLinkedin size={18} />, 
      gradient: "from-blue-600 to-blue-800", 
      tooltip: "LinkedIn", 
      angle: 180,
      url: "https://www.linkedin.com/in/steven-sihombing"
    },
    { 
      icon: <FaInstagram size={18} />, 
      gradient: "from-pink-500 to-purple-500", 
      tooltip: "Instagram", 
      angle: 300,
      url: "https://www.instagram.com/steven_shmbng/"
    }
  ];

  // Responsive radius based on screen size using window innerWidth
  const [radius, setRadius] = useState(130);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(110); // Smaller radius for mobile
      } else if (window.innerWidth < 768) {
        setRadius(130); // Medium radius for tablets
      } else {
        setRadius(150); // Original radius for desktop
      }
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {socialIcons.map((social, index) => {
        const angleInRadians = (social.angle * Math.PI) / 180;
        const x = radius * Math.cos(angleInRadians);
        const y = radius * Math.sin(angleInRadians);
        
        return (
          <div 
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-fade-in-up"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              zIndex: 20,
              animationDelay: `${1.5 + index * 0.2}s`
            }}
          >
            <SocialButton 
              icon={social.icon} 
              gradient={social.gradient} 
              tooltip={social.tooltip}
              url={social.url}
            />
          </div>
        );
      })}
    </>
  );
};

const SocialButton = ({ icon, gradient, tooltip, url } : any) => {
  return (
    <div className="relative group">
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full shadow-lg hover:shadow-xl transform transition-all hover:scale-110 hover:-translate-y-1 bg-gradient-to-br ${gradient} animate-bounce-subtle`}
        aria-label={tooltip}
      >
        <div className="text-white transition-transform group-hover:scale-110">{icon}</div>
      </a>
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10 animate-fade-in">
        {tooltip}
        <div className="absolute top-full left-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800 transform -translate-x-1/2"></div>
      </div>
    </div>
  );
};

const Skill = ({ icon, text, delay } : any) => {
  return (
    <div 
      className="flex items-center gap-1.5 sm:gap-2 bg-gray-800/50 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-gray-700/50 transition-all border border-gray-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 animate-fade-in-up opacity-0"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      <div className="text-blue-400 transition-colors group-hover:text-blue-300">{icon}</div>
      <span className="text-xs sm:text-sm font-medium">{text}</span>
      
      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in-up 0.3s ease-out forwards;
        }
        
        .animate-profile-entrance {
          animation: slide-in-right 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LandingPageView;