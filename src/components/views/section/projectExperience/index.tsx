import React, { useState, useEffect } from 'react';
import {
  FaChevronRight,
  FaGlobe,
  FaBrain,
  FaVoteYea,
  FaUsers,
  FaCode,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTimes,
  FaHandsHelping,
  FaGraduationCap,
  FaMicrophone,
} from 'react-icons/fa';

const ProjectsExperiencesSection = () => {
  const [activeTab, setActiveTab] = useState('it-projects');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const itProjects = [
    {
      id: 1,
      title: 'Portfolio Website',
      image: '/images/Porto.png',
      description:
        "This website serves as a platform to share insights into my personal journey and document the progress I've made throughout my exploration of the dynamic world of software engineering.",
      tags: ['React', 'Next.js', 'Tailwind CSS'],
      link: '/',
    },
    {
      id: 2,
      title: 'BoxSL Website',
      image: '/images/boxsl.png',
      description:
        'E-commerce web platform designed to virtually showcase products to potential customers. Built to enhance product visibility and engagement, the website allows businesses to present their offerings in a compelling and interactive format. With a focus on user-friendly design and digital presentation, BOXSL aims to bridge the gap between products and consumers in the online marketplace.',
      tags: ['React', 'Next.js', 'Tailwind CSS'],
      link: 'https://boxsl.id',
    },
    {
      id: 3,
      title: 'DCF Undip 2025',
      image: '/images/dcfundip.png',
      description:
        'Web platform developed for the Chemistry Olympiad organized by the Department of Chemistry at Diponegoro University. This website serves as a central hub for participants to access event information, guidelines, and updates, while also providing a streamlined registration process. Designed with accessibility and clarity in mind, DCF Undip 2025 ensures a smooth and informative experience for all prospective participants.',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Supabase'],
      link: 'https://dcfundip2025.my.id',
    },
  ];

  const nonItProjects = [
    {
      id: 1,
      title: 'Informatics For The Orphanage 2024',
      organization: 'Himpunan Mahasiswa Informatika',
      image: '/images/INFO1.jpg',
      period: '24 April 2024',
      location: 'Gunung Pati, Semarang, Indonesia',
      description:
        'Led the Event Division team in planning schedules, creating detailed rundowns, and ensuring smooth execution of the event timeline. The program was dedicated to community engagement at a local orphanage, providing quality time and social activities for the children.',
      achievements: [
        'Successfully organized interactive games and bonding activities for over 50 children',
        'Ensured seamless coordination across multiple sessions during the event day',
        'Fostered a warm, inclusive environment to support the emotional well-being of orphans',
      ],
      gallery: ['/images/INFO1.jpg', '/images/INFO2.jpg', '/images/INFO3.jpg'],
      icon: <FaHandsHelping className="text-green-400" />,
    },
    {
      id: 2,
      title: 'Informatics Care 2024',
      organization: 'Himpunan Mahasiswa Informatika',
      image: '/images/ICARE-1.JPG',
      period: '22 June 2024 - 23 June 2024',
      location: 'Semarang, Indonesia',
      description:
        'Served as the Project Leader of a two-day community service program conducted in a village in the Semarang region. The initiative aimed to foster student engagement with local communities through social interaction, public education, and humanitarian aid.',
      achievements: [
        'Coordinated the distribution of basic food supplies (sembako) to more than 40 families in need',
        'Led educational sessions on technology and social awareness for local residents',
        'Promoted community empathy by encouraging students to live and interact directly with villagers',
      ],
      gallery: ['/images/ICARE-1.JPG', '/images/ICARE-2.JPG', '/images/ICARE-3.JPG'],
      icon: <FaGraduationCap className="text-blue-400" />,
    },
  ];

  const openModal = (experience: any) => {
    setSelectedExperience(experience);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedExperience(null);
    document.body.style.overflow = 'auto';
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleProjectLink = (link: string) => {
    if (link === '/') {
      window.location.href = link;
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const getGridClasses = (itemCount: number) => {
    if (itemCount === 1) {
      return 'grid grid-cols-1 justify-items-center max-w-md mx-auto';
    } else if (itemCount === 2) {
      return 'grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center max-w-3xl mx-auto';
    } else {
      return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto';
    }
  };

  return (
    <>
      <div id="projects" className="min-h-screen py-20 relative px-4 bg-gray-950">
        {/* Background effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-float-delayed"></div>
          
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
          
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-12 transition-all duration-1000 ${mounted ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-text-glow">
              My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-shift">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto animate-pulse-slow"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Showcasing my technical and non-technical projects.
            </p>
          </div>

          <div className={`flex justify-center mb-12 transition-all duration-1000 ${mounted ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="inline-flex bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
              <button
                onClick={() => setActiveTab('it-projects')}
                className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'it-projects'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                IT Projects
              </button>
              <button
                onClick={() => setActiveTab('non-it-projects')}
                className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'non-it-projects'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                Non-IT Projects
              </button>
            </div>
          </div>

          {activeTab === 'it-projects' && (
            <div className={getGridClasses(itProjects.length)}>
              {itProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onLinkClick={handleProjectLink}
                  index={index}
                  mounted={mounted}
                />
              ))}
            </div>
          )}

          {activeTab === 'non-it-projects' && (
            <div className={getGridClasses(nonItProjects.length)}>
              {nonItProjects.map((project, index) => (
                <SocialExperienceCard 
                  key={project.id} 
                  experience={project} 
                  onClick={() => openModal(project)}
                  index={index}
                  mounted={mounted}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {modalOpen && selectedExperience && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[9999]"
          onClick={handleBackdropClick}
        >
          <div 
            className="relative bg-gray-900 border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-[10000]"
          >
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800/80 p-2 rounded-full transition-all duration-300 z-20 transform hover:scale-110 hover:bg-red-500/20"
            >
              <FaTimes />
            </button>

            <div className="relative h-64 z-0">
              <img
                src={selectedExperience.image}
                alt={selectedExperience.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90 z-10"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="flex items-center mb-2">
                  <div className="mr-4 bg-gray-800/80 backdrop-blur-sm p-3 rounded-full animate-pulse-slow">
                    {selectedExperience.icon}
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-2xl md:text-3xl animate-text-glow">{selectedExperience.title}</h2>
                    <h3 className="text-blue-400 font-medium text-lg hover:text-purple-400 transition-colors duration-300">{selectedExperience.organization}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6 gap-y-2">
                <div className="flex items-center mr-6 hover:text-gray-300 transition-colors duration-300">
                  <FaCalendarAlt className="mr-2 text-blue-400" />
                  <span>{selectedExperience.period}</span>
                </div>
                <div className="flex items-center hover:text-gray-300 transition-colors duration-300">
                  <FaMapMarkerAlt className="mr-2 text-blue-400" />
                  <span>{selectedExperience.location}</span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-white font-bold text-xl mb-3 animate-text-glow">Description</h4>
                <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">{selectedExperience.description}</p>
              </div>

              {selectedExperience.achievements && selectedExperience.achievements.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-white font-bold text-xl mb-3 animate-text-glow">Key Achievements</h4>
                  <ul className="space-y-2">
                    {selectedExperience.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="flex items-start hover:text-gray-300 transition-colors duration-300">
                        <span className="text-blue-400 mr-2 animate-pulse-slow">•</span>
                        <span className="text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedExperience.gallery && selectedExperience.gallery.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-white font-bold text-xl mb-4 animate-text-glow">Gallery</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedExperience.gallery.map((image: string, index: number) => (
                      <div key={index} className="rounded-lg overflow-hidden border border-gray-800 aspect-video hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                        <img
                          src={image}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
        
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(50px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
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
        
        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
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

const ProjectCard = ({ project, onLinkClick, index, mounted }: any) => {
  const getProjectIcon = (title: string) => {
    if (title.includes('Portfolio')) return <FaGlobe className="text-blue-400" />;
    if (title.includes('Mindora AI')) return <FaBrain className="text-green-400" />;
    if (title.includes('Pemilos')) return <FaVoteYea className="text-purple-400" />;
    return <FaCode className="text-blue-400" />;
  };

  return (
    <div 
      className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:border-blue-500/30 w-full max-w-sm mx-auto"
      style={{ 
        zIndex: 10,
        animation: mounted ? `slide-in-up 0.8s ease-out ${0.5 + index * 0.2}s forwards` : 'none',
        opacity: mounted ? 1 : 0
      }}
    >
      <div className="relative overflow-hidden h-48 z-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 flex items-center z-20">
          <div className="mr-3 bg-gray-800/80 backdrop-blur-sm p-2 rounded-full group-hover:bg-blue-500/20 transition-all duration-300 transform group-hover:scale-110 animate-pulse-slow">
            {getProjectIcon(project.title)}
          </div>
          <h3 className="text-white font-bold text-lg truncate group-hover:text-blue-300 transition-colors duration-300">{project.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-400 mb-4 line-clamp-3 h-18 group-hover:text-gray-300 transition-colors duration-300">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-900/30 text-blue-300 border border-blue-800/50 hover:bg-blue-800/40 hover:border-blue-600/60 hover:text-blue-200 transition-all duration-300 transform hover:scale-105 animate-pulse-slow"
              style={{ animationDelay: `${tagIndex * 0.1}s` }}
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => onLinkClick(project.link)}
          className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 cursor-pointer transform hover:translate-x-1 group/button"
        >
          View Project 
          <FaChevronRight className="ml-1 text-xs transition-transform duration-300 group-hover/button:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

const SocialExperienceCard = ({ experience, onClick, index, mounted }: any) => {
  return (
    <div
      className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:border-blue-500/30 cursor-pointer w-full max-w-sm mx-auto"
      style={{ 
        zIndex: 10,
        animation: mounted ? `slide-in-up 0.8s ease-out ${0.5 + index * 0.2}s forwards` : 'none',
        opacity: mounted ? 1 : 0
      }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-48 z-0">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 flex items-center z-20">
          <div className="mr-3 bg-gray-800/80 backdrop-blur-sm p-2 rounded-full group-hover:bg-blue-500/20 transition-all duration-300 transform group-hover:scale-110 animate-pulse-slow">
            {experience.icon}
          </div>
          <h3 className="text-white font-bold text-lg truncate group-hover:text-blue-300 transition-colors duration-300">{experience.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-4">
          <h4 className="text-blue-400 font-medium text-base group-hover:text-purple-400 transition-colors duration-300">{experience.organization}</h4>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
            <FaCalendarAlt className="mr-3 text-blue-400 text-sm flex-shrink-0 group-hover:text-purple-400 transition-colors duration-300" />
            <span className="leading-relaxed">{experience.period}</span>
          </div>
          <div className="flex items-center text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
            <FaMapMarkerAlt className="mr-3 text-blue-400 text-sm flex-shrink-0 group-hover:text-purple-400 transition-colors duration-300" />
            <span className="leading-relaxed">{experience.location}</span>
          </div>
        </div>

        <p className="text-gray-400 mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">{experience.description}</p>

        <div className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 transform hover:translate-x-1 group/button">
          View Details 
          <FaChevronRight className="ml-1 text-xs transition-transform duration-300 group-hover/button:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsExperiencesSection;