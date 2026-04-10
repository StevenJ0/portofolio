import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaTimes, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { useLocale } from '@/context/LocaleContext';

/* ─── Types ─────────────────────────────────────────────────── */
interface ProjectDetail {
  challenge: string;
  solution: string;
  skillGained: string;
}

interface ItProject {
  id: number;
  title: string;
  image: string;
  tags: string[];
  link: string;
  featured: boolean;
  descKey: keyof ReturnType<typeof getProjectContent>;
}

interface NonItProject {
  id: number;
  title: string;
  organization: string;
  image: string;
  period: string;
  location: string;
  descKey: keyof ReturnType<typeof getProjectContent>;
  gallery: string[];
}

/* ─── Static project metadata (non-translatable) ────────────── */
const IT_PROJECTS: ItProject[] = [
  {
    id: 0,
    title: 'Capex Dashboard (FTTH)',
    image: '/images/web-dashboard-ftth.png',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'JWT', 'Telegram Bot'],
    link: 'https://dashboard-ftth.vercel.app/',
    featured: true,
    descKey: 'capex',
  },
  {
    id: 1,
    title: 'Portfolio Website',
    image: '/images/Porto.png',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'i18n'],
    link: '/',
    featured: false,
    descKey: 'portfolio',
  },
  {
    id: 2,
    title: 'BoxSL Website',
    image: '/images/boxsl.png',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    link: 'https://boxsl.id',
    featured: false,
    descKey: 'boxsl',
  },
  {
    id: 3,
    title: 'DCF Undip 2025',
    image: '/images/dcfundip.png',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Supabase'],
    link: 'https://dcfundip2025.vercel.app/',
    featured: false,
    descKey: 'dcf',
  },
];

const NON_IT_PROJECTS: NonItProject[] = [
  {
    id: 1,
    title: 'Informatics For The Orphanage 2024',
    organization: 'HMI Undip',
    image: '/images/orphanage/INFO1.jpg',
    period: 'April 24, 2024',
    location: 'Gunung Pati, Semarang',
    descKey: 'informatics_orphanage',
    gallery: ['/images/orphanage/INFO1.jpg', '/images/orphanage/INFO2.jpg', '/images/orphanage/INFO3.jpg'],
  },
  {
    id: 2,
    title: 'Informatics Care 2024',
    organization: 'HMI Undip',
    image: '/images/icare/ICARE-1.JPG',
    period: 'June 22–23, 2024',
    location: 'Semarang',
    descKey: 'informatics_care',
    gallery: ['/images/icare/ICARE-1.JPG', '/images/icare/ICARE-2.JPG', '/images/icare/ICARE-3.JPG'],
  },
  {
    id: 3,
    title: 'Digital Journalism Intern — Telkom',
    organization: 'Telkom Regional 4, Semarang',
    image: '/images/telkom1.jpeg',
    period: 'July–August 2025',
    location: 'Semarang',
    descKey: 'telkom_journalism',
    gallery: ['/images/telkom1.jpeg', '/images/telkom2.jpeg'],
  },
  {
    id: 4,
    title: 'Web Developer Intern (FTTH Dashboard)',
    organization: 'Telkom Regional 4, Semarang',
    image: '/images/magang-ftth/pic1.jpeg',
    period: 'Sep–Dec 2024',
    location: 'Semarang',
    descKey: 'telkom_webdev',
    gallery: ['/images/magang-ftth/pic1.jpeg', '/images/magang-ftth/pic2.jpeg', '/images/magang-ftth/pic3.jpeg'],
  }
];

/* ─── Helper: get translated project content from t ─────────── */
function getProjectContent(t: any) {
  return t.projects as {
    capex: { description: string; details: ProjectDetail[] };
    portfolio: { description: string; details: ProjectDetail[] };
    boxsl: { description: string; details: ProjectDetail[] };
    dcf: { description: string; details: ProjectDetail[] };
    informatics_orphanage: { description: string; achievements: string[] };
    informatics_care: { description: string; achievements: string[]; details: ProjectDetail[] };
    telkom_journalism: { description: string; achievements: string[] };
    telkom_content: { description: string; achievements: string[] };
    [key: string]: any;
  };
}

/* ─── Project Details List ──────────────────────────────────── */
const ProjectDetailsList = ({ details, t }: { details: ProjectDetail[]; t: any }) => (
  <ol className="space-y-4 list-none">
    {details.map((item, i) => (
      <li key={i} className="rounded-xl bg-[#161616] border border-[#2a2a2a] overflow-hidden">
        <div className="px-4 py-2 bg-[#1c1c1c] border-b border-[#2a2a2a] flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-[10px] font-black flex items-center justify-center shrink-0">
            {i + 1}
          </span>
          <span className="text-[#555] text-xs font-semibold uppercase tracking-wider">Item {i + 1}</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex gap-3">
            <span className="text-gold font-black text-xs pt-[2px] shrink-0 w-[90px]">{t.projects.challengeLabel}</span>
            <p className="text-[#aaa] text-sm leading-relaxed">{item.challenge}</p>
          </div>
          <div className="flex gap-3">
            <span className="text-[#4ade80] font-black text-xs pt-[2px] shrink-0 w-[90px]">{t.projects.solutionLabel}</span>
            <p className="text-[#aaa] text-sm leading-relaxed">{item.solution}</p>
          </div>
          <div className="flex gap-3">
            <span className="text-[#60a5fa] font-black text-xs pt-[2px] shrink-0 w-[90px]">{t.projects.skillLabel}</span>
            <p className="text-[#aaa] text-sm leading-relaxed">{item.skillGained}</p>
          </div>
        </div>
      </li>
    ))}
  </ol>
);

/* ─── IT Project Card ───────────────────────────────────────── */
const ProjectCard = ({
  project,
  content,
  openModal,
}: {
  project: ItProject;
  content: { description: string; details?: ProjectDetail[] };
  openModal: (p: ItProject, c: typeof content) => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const { t } = useLocale();
  const firstDetail = content.details?.[0];

  return (
    <motion.div
      className={`relative bg-[#1c1c1c] border border-[#2a2a2a] rounded-xl overflow-hidden cursor-pointer ${
        project.featured ? 'lg:col-span-2 lg:row-span-1' : ''
      }`}
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(232,160,32,0.15)', borderColor: 'rgba(232,160,32,0.4)' }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className={`relative overflow-hidden ${project.featured ? 'h-56' : 'h-44'}`}>
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/30 to-transparent" />

        <AnimatePresence>
          {hovered && firstDetail && (
            <motion.div
              className="absolute inset-0 bg-[#111]/95 flex flex-col justify-center p-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gold text-xs font-bold uppercase tracking-wider mb-2">
                {t.projects.challengeLabel}
              </p>
              <p className="text-[#ccc] text-sm leading-relaxed line-clamp-5">
                {firstDetail.challenge}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {project.featured && (
          <div className="absolute top-3 left-3 bg-gold text-[#111] text-xs font-bold px-2.5 py-1 rounded">
            Featured
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-white font-bold text-base mb-2">{project.title}</h3>
        <p className="text-[#777] text-sm leading-relaxed mb-4 line-clamp-2">{content.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#2a2a2a] text-[#aaa] border border-[#333]">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => openModal(project, content)}
            className="text-gold text-sm font-medium flex items-center gap-1 hover:text-gold-light transition-colors"
          >
            {t.projects.viewDetails} <FaChevronRight className="text-xs" />
          </button>

          {project.link && project.link !== '/' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-white text-sm transition-colors"
              onClick={e => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="text-xs" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Non-IT Card ───────────────────────────────────────────── */
const NonItCard = ({
  project,
  content,
  openModal,
}: {
  project: NonItProject;
  content: { description: string; achievements: string[]; details?: ProjectDetail[] };
  openModal: (p: NonItProject, c: typeof content) => void;
}) => {
  const { t } = useLocale();
  return (
    <motion.div
      className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-xl overflow-hidden cursor-pointer"
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(232,160,32,0.15)', borderColor: 'rgba(232,160,32,0.4)' }}
      transition={{ duration: 0.3 }}
      onClick={() => openModal(project, content)}
    >
      <div className="h-40 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <p className="text-gold text-xs font-bold mb-1">{project.organization}</p>
        <h3 className="text-white font-bold text-base mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-3 text-[#666] text-xs mb-3">
          <span className="flex items-center gap-1"><FaCalendarAlt />{project.period}</span>
          <span className="flex items-center gap-1"><FaMapMarkerAlt />{project.location}</span>
        </div>
        <p className="text-[#777] text-sm line-clamp-2">{content.description}</p>
        <button className="mt-3 text-gold text-sm font-medium flex items-center gap-1">
          {t.projects.viewDetails} <FaChevronRight className="text-xs" />
        </button>
      </div>
    </motion.div>
  );
};

/* ─── Detail Modal ──────────────────────────────────────────── */
const DetailModal = ({
  project,
  content,
  onClose,
  isIt,
}: {
  project: any;
  content: any;
  onClose: () => void;
  isIt: boolean;
}) => {
  const { t } = useLocale();
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative h-56">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-[#1c1c1c]/80 text-white p-2 rounded-full hover:bg-red-500/30 transition-colors"
          >
            <FaTimes />
          </button>
          <div className="absolute bottom-4 left-6">
            <h2 className="text-white font-bold text-2xl">{project.title}</h2>
            {!isIt && <p className="text-gold text-sm mt-1">{project.organization}</p>}
          </div>
        </div>

        <div className="p-6 space-y-5">
          {!isIt && project.period && (
            <div className="flex flex-wrap gap-4 text-[#777] text-sm">
              <span className="flex items-center gap-2"><FaCalendarAlt className="text-gold" />{project.period}</span>
              <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-gold" />{project.location}</span>
            </div>
          )}

          {isIt && project.tags && (
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag: string) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded bg-[#2a2a2a] text-[#aaa] border border-[#333]">{tag}</span>
              ))}
            </div>
          )}

          <div>
            <h4 className="text-white font-bold mb-2">{t.projects.descriptionLabel}</h4>
            <p className="text-[#aaa] text-sm leading-relaxed">{content.description}</p>
          </div>

          {content.details && content.details.length > 0 && (
            <div>
              <h4 className="text-white font-bold mb-3">{t.projects.narrativeLabel}</h4>
              <ProjectDetailsList details={content.details} t={t} />
            </div>
          )}

          {content.achievements && (
            <div>
              <h4 className="text-white font-bold mb-2">{t.projects.achievementsLabel}</h4>
              <ul className="space-y-1.5">
                {content.achievements.map((a: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-[#aaa] text-sm">
                    <span className="text-gold mt-1 text-xs">▸</span>{a}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h4 className="text-white font-bold mb-3">{t.projects.galleryLabel}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.gallery.map((img: string, i: number) => (
                  <div key={i} className="aspect-video rounded-lg overflow-hidden border border-[#333]">
                    <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {isIt && project.link && project.link !== '/' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold text-sm"
            >
              {t.projects.viewProject} <FaExternalLinkAlt className="text-xs" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Main Component ────────────────────────────────────────── */
const ProjectsExperiencesSection = () => {
  const [activeTab, setActiveTab] = useState<'it' | 'non-it'>('it');
  const [modalState, setModalState] = useState<{ project: any; content: any; isIt: boolean } | null>(null);
  const { t } = useLocale();

  const projectContent = getProjectContent(t);

  const openModal = (project: any, content: any, isIt: boolean) => {
    setModalState({ project, content, isIt });
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModalState(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="projects" className="py-24 px-6 sm:px-10 lg:px-20 xl:px-32 bg-[#111]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="section-divider" />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            {t.projects.title}{' '}
            <span className="text-gold">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-[#777] mt-3 max-w-xl">{t.projects.subtitle}</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 mb-10 border-b border-[#2a2a2a]">
          {[{ key: 'it', label: t.projects.itTab }, { key: 'non-it', label: t.projects.nonItTab }].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as 'it' | 'non-it')}
              className={`px-5 py-2.5 text-sm font-semibold border-b-2 transition-all -mb-px ${
                activeTab === key
                  ? 'border-gold text-gold'
                  : 'border-transparent text-[#555] hover:text-[#aaa]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* IT Projects grid */}
        {activeTab === 'it' && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {IT_PROJECTS.map((project, i) => {
              const content = projectContent[project.descKey];
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={project.featured ? 'sm:col-span-2' : ''}
                >
                  <ProjectCard
                    project={project}
                    content={content}
                    openModal={(p, c) => openModal(p, c, true)}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Non-IT grid */}
        {activeTab === 'non-it' && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {NON_IT_PROJECTS.map((project, i) => {
              const content = projectContent[project.descKey];
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <NonItCard
                    project={project}
                    content={content}
                    openModal={(p, c) => openModal(p, c, false)}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalState && (
          <DetailModal
            project={modalState.project}
            content={modalState.content}
            onClose={closeModal}
            isIt={modalState.isIt}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsExperiencesSection;