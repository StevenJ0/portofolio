import React, { useState, useEffect } from 'react';

const ExperienceSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hard-coded experiences data instead of API calls
  const experiences = [
    {
      id: 1,
      title: "Website Manager",
      company: "DCF Undip 2025",
      period: "April 2025 - May 2025",
      description: "Managing and developing the website for Dionegoro Chemistry Fair using Next.js and Supabase."
    },
    {
      id: 2,
      title: "Frontend Developer Team",
      company: "BoxSL",
      period: "April 2025",
      description: "Managing e-commerce website for engagement products and developing new features using Next.js."
    },
    {
      id: 3,
      title: "Staff of Social Division",
      company: "Himpunan Mahasiswa Informatika 2024",
      period: "January 2024 - January 2025",
      description: "Collaborated with the team to identify and implement social initiatives, contributed to the success of division programs, and led one of the flagship events to ensure smooth execution."
    }
  ];

  return (
    <>
      <section id="experience" className="py-20 min-h-screen flex flex-col justify-center relative z-10">
        {/* Enhanced Background effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Animated glowing orbs */}
          <div className="absolute top-1/4 left-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-float-delayed"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
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
          
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
        </div>

        {/* Section Title - Styled similar to About section */}
        <div className={`mb-12 text-center transition-all duration-1000 ${mounted ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-text-glow">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-shift">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto animate-pulse-slow"></div>
        </div>
        
        {/* Experience Cards */}
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={exp.id} 
              experience={exp} 
              index={index}
              mounted={mounted}
            />
          ))}
        </div>

        {/* Contact Button */}
        <div className={`mt-12 text-center transition-all duration-1000 ${mounted ? 'animate-fade-in-up-delayed' : 'opacity-0 translate-y-[30px]'}`}>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:-translate-y-1 hover:scale-105 animate-pulse-slow"
          >
            Get In Touch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* CSS Animations - Same as landing page */}
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
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
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
          animation: fade-in-up 1s ease-out forwards;
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
        
        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
};

const ExperienceCard = ({ experience, index, mounted } : any) => {
  const animationDirection = index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right';
  const animationDelay = `${0.3 + index * 0.2}s`;

  return (
    <div 
      className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:border-blue-500/30 ${mounted ? animationDirection : 'opacity-0'}`}
      style={{ 
        animationDelay: mounted ? animationDelay : '0s',
        animationFillMode: 'forwards'
      }}
    >
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Company Badge */}
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <div className="w-16 h-16 bg-gray-800/80 rounded-full overflow-hidden flex items-center justify-center border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110">
            {/* Company Initial */}
            <span className="text-2xl font-bold text-blue-400">
              {experience.company.charAt(0)}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-grow">
          {/* Period */}
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{experience.period}</span>
          </div>
          
          {/* Job title and company */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-white">
              {experience.title}
              <span className="mx-2 text-gray-500">•</span>
              <span className="text-blue-400">{experience.company}</span>
            </h3>
          </div>
          
          {/* Description */}
          <p className="text-gray-300 leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;