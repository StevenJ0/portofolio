import React, { useState, useEffect, useMemo } from 'react';

const AboutMeSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particleStyles = useMemo(() => {
    return [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 2}s`,
    }));
  }, []);

  return (
    <>
      <section id="about" className="py-20 min-h-screen flex flex-col justify-center relative z-10">
        {/* Enhanced Background effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Animated glowing orbs */}
          <div className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-1/3 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-float-delayed"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {particleStyles.map((style, i) => (
              <div
                key={i} // Add unique key prop
                className="absolute w-1 h-1 bg-purple-400 rounded-full animate-twinkle"
                style={style} // Use precomputed styles
              ></div>
            ))}
          </div>
        </div>
        
        {/* Section Title */}
        <div className={`mb-12 text-center transition-all duration-1000 ${mounted ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-text-glow">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-shift">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto animate-pulse-slow"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Bio */}
          <div className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/10 transition-all duration-1000 transform hover:-translate-y-2 hover:scale-105 ${mounted ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'}`}>
            <h3 className="text-3xl font-bold text-white mb-6 animate-text-glow">
              Who Am I?
            </h3>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                Im Steven Jonathan Sihombing, a passionate Website Developer focused on creating 
                intuitive and engaging user experiences. With expertise in both frontend and backend 
                development, I strive to build digital solutions that combine aesthetics with functionality.
              </p>
              
              <p className="text-gray-300 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                Currently, I am a second-year Computer Science student at the Diponegoro University, 
                keenly interested in technology, particularly in Software Engineering and Data Science. 
                Im dedicated to enhancing both my hard and soft skills during my studies.
              </p>
              
              <p className="text-gray-300 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                Demonstrated strong collaboration, management, and 
                communication skills through coordination experience. 
                Shows a strong desire for continuous learning and self-development.
              </p>
            </div>
          </div>
          
          {/* Right Column - Education & Skills */}
          <div className={`flex flex-col gap-6 transition-all duration-1000 ${mounted ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'}`}>
            {/* Education Card */}
            <div className="flex items-center p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <div className="mr-4 w-16 h-16 overflow-hidden rounded-full flex items-center justify-center animate-pulse-slow">
                <img 
                  src="/images/logo undip 1.jpg" 
                  alt="University Logo" 
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" 
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">Diponegoro University</h4>
                <p className="text-gray-400">Faculty of Computer Science</p>
                <p className="text-blue-400 text-sm mt-1 animate-pulse">2023 - Present</p>
              </div>
            </div>
            
            {/* Skills Card */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center animate-text-glow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-purple-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Technical Skills
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Frontend */}
                <SkillCategory 
                  title="Frontend"
                  skills={["React", "NextJS", "TailwindCSS", "JavaScript"]}
                  delay="0.8s"
                />
                
                {/* Backend */}
                <SkillCategory 
                  title="Backend"
                  skills={["Node.js", "ExpressJS", "MongoDB", "SQL"]}
                  delay="1.0s"
                />
                
                {/* Design */}
                <SkillCategory 
                  title="Design"
                  skills={["Figma", "Canva", "UI/UX"]}
                  delay="1.2s"
                />
                
                {/* Other */}
                <SkillCategory 
                  title="Other"
                  skills={["Git", "Docker", "Agile"]}
                  delay="1.4s"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Projects Button */}


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
      `}</style>
    </>
  );
};

const SkillCategory = ({ title, skills, delay } : any) => {
  return (
    <div className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 animate-fade-in-up" style={{ animationDelay: delay, animationFillMode: 'forwards' }}>
      <h4 className="text-lg font-semibold text-white mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill: string, index: number) => ( // Corrected destructuring
          <Pill key={index} text={skill} delay={`${parseFloat(delay) + index * 0.1}s`} />
        ))}
      </div>
    </div>
  );
};

const Pill = ({ text, delay } : any) => {
  return (
    <span 
      className="bg-gray-700 text-blue-300 text-xs px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 animate-fade-in-up" 
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      {text}
    </span>
  );
};

export default AboutMeSection;