const en = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    iam: "I'M",
    name: "Steven Jonathan Sihombing",
    role: "Website Developer",
    bio: "Crafting digital experiences that blend aesthetics with functionality. Specializing in intuitive interfaces and memorable user experiences.",
    contactMe: "Contact Me",
    viewResume: "View Resume",
    scrollDown: "Scroll down",
    badgeYears: "1+ yrs",
    badgeYearsLabel: "Experience",
    badgeProjects: "7+",
    badgeProjectsLabel: "Projects",
  },
  about: {
    title: "About",
    titleHighlight: "Me",
    heading: "Who Am I?",
    bio1: "I'm Steven Jonathan Sihombing, a passionate Website Developer focused on creating intuitive and engaging user experiences. With expertise in both frontend and backend development, I strive to build digital solutions that combine aesthetics with functionality.",
    bio2: "Currently, I am a third-year Computer Science student at Diponegoro University, keenly interested in technology, particularly in Software Engineering and Data Science.",
    bio3: "Demonstrated strong collaboration, management, and communication skills through coordination experience. Shows a strong desire for continuous learning and self-development.",
    university: "Diponegoro University",
    faculty: "Faculty of Computer Science",
    period: "2023 - Present",
    skillsTitle: "My Skills",
  },
  projects: {
    title: "My",
    titleHighlight: "Projects",
    subtitle: "Showcasing my technical and non-technical projects.",
    itTab: "IT Projects",
    nonItTab: "Non-IT Projects",
    viewProject: "View Project",
    viewDetails: "View Details",
    viewMore: "View All Projects",
    descriptionLabel: "Description",
    achievementsLabel: "Key Achievements",
    galleryLabel: "Gallery",
    /* ── IT Project Content ───────────────────── */
    investsense: {
      description: "Architected scalable RESTful APIs in Node.js using Clean Architecture, integrating a multi-tier Redis cache with namespaced keys for stock quotes, RSI indicators, and RAG chatbot context, with fail-open error handling ensuring graceful degradation on cache outages. Built an automated daily data pipeline orchestrating Yahoo Finance OHLCV ingestion, RSI-14 calculation via a Python microservice, and AI-powered news sentiment analysis for watchlisted IDX stocks, with Supabase upsert idempotency to eliminate duplicate records.",
    },
    walletx: {
      description: "Architected scalable RESTful APIs in Golang using Clean Architecture on Vercel, integrating a multi-purpose Redis cache with namespaced keys and a NoOp fallback pattern for graceful degradation. Built a fault-tolerant transaction ingestion pipeline via IMAP and Telegram, combining bank-specific Regex with Gemini AI fallback and enforcing DB-level idempotency to prevent duplicate records.",
    },
    dcf2026: {
      description: "Engineered a high-performance participant registration portal using Next.js and Supabase, integrating Framer Motion for premium UI micro-interactions and Nodemailer for automated email workflows. Architected a scalable Computer-Based Test (CBT) infrastructure by containerizing Moodle, Nginx, and PostgreSQL via Docker, and validated system resilience using k6 automated load testing to guarantee zero downtime for 250 concurrent users during peak exam periods.",
    },
    capex: {
      description: "A full-stack monitoring platform used at Telkom Semarang for Fiber-to-the-Home (FTTH) network project management, featuring real-time dashboards, interactive chart visualizations, and Telegram bot integration for field divisions.",
    },
    portfolio: {
      description: "Personal portfolio built with Next.js and Tailwind CSS showcasing projects, skills, and experiences with smooth animations and full i18n support.",
    },
    boxsl: {
      description: "An e-commerce platform designed to showcase wedding products in an engaging and interactive format for potential customers.",
    },
    dcf: {
      description: "A web platform for the Diponegoro Chemistry Fair — serving as a central hub for participants to access event information, registration, and updates.",
    },
    /* ── Non-IT Project Content ───────────────── */
    informatics_orphanage: {
      description: "Led the Event Division in organizing activities for 50+ children from the orphanage.",
      achievements: ["Organized interactive games...", "Ensured smooth coordination...", "Created an inclusive environment..."],
    },
    informatics_care: {
      description: "Served as Project Leader for a two-day community service program in a village.",
      achievements: ["Distributed supplies to 40+ families", "Led tech education sessions for residents", "Promoted community empathy through direct interaction"],
    },
    // ── REMOVED: telkom_journalism (non-technical internship, deleted)
    // ── REMOVED: telkom_webdev (non-technical internship, deleted)
  },

  experience: {
    title: "My",
    titleHighlight: "Experience",
    getInTouch: "Get In Touch",
    present: "Present",
    items: [
      // ── KEPT: Telkom Regional 4 (Full Stack Developer Intern) ─────────
      {
        year: "2026",
        title: "Full Stack Developer Intern",
        company: "Telkom Regional 4 · Semarang, Indonesia",
        period: "January 2026 – February 2026",
        description: [
          "Architected and deployed a production-ready FTTH monitoring dashboard from scratch, streamlining project tracking for field divisions. Implemented defensive UX design and robust error handling to mitigate slow client networks, which significantly reduced user complaints and simplified tasks for non-technical workers.",
          "Secured internal corporate data access by engineering a Telegram bot integration featuring a strict, database-driven phone number authentication system, successfully ensuring 100% authorized usage.",
        ],
        current: false,
      },
      // ── KEPT: DBS Foundation Coding Camp (Full-Stack Web Developer) ───
      {
        year: "2026",
        title: "Full-Stack Web Developer",
        company: "DBS Foundation Coding Camp · Remote",
        period: "February 2026 – July 2026",
        description: [
          "Selected as 1 of only 3,000 competitive participants from 67,000+ national applicants (~4.4% acceptance rate) to undergo an intensive, high-standard digital talent development program.",
          "Invested 943+ hours mastering comprehensive software engineering, covering modern frontend (React, Vite, Zustand), scalable backend (Node.js, Express, RESTful APIs), database management (PostgreSQL/Supabase), Redis caching, and AWS cloud.",
          "Co-developed \"InvestSense AI\" (an AI-powered investment assistant platform) by architecting modular APIs, orchestrating microservices integration with Python (FastAPI), and implementing adaptive Redis caching strategies.",
        ],
        current: false,
      },
      // ── NEW: Diponegoro Chemistry Fair 2026 (Project Manager / Lead Dev) ──
      {
        year: "2026",
        title: "Project Manager / Lead Developer",
        company: "Diponegoro Chemistry Fair (DCF) 2026 · Semarang, Indonesia",
        period: "March 2026 – September 2026",
        description: [
          "Engineered a high-performance participant registration portal using Next.js and Supabase, integrating Framer Motion for premium UI micro-interactions and Nodemailer for automated email workflows.",
          "Architected a scalable Computer-Based Test (CBT) infrastructure by containerizing Moodle, Nginx, and PostgreSQL via Docker, and validated system resilience using k6 automated load testing to guarantee zero downtime for 250 concurrent users during peak exam periods.",
        ],
        current: false,
      },
      // ── PRESERVED: Staf Divisi Sosial (kept exactly as-is) ───────────
      {
        year: "2024",
        title: "Staff – Social Division",
        company: "Himpunan Mahasiswa Informatika",
        period: "Jan 2024 – Jan 2025",
        description: "Led flagship social initiatives and coordinated community-focused programs within the Informatics student body.",
        current: false,
      },
    ],
  },
  contact: {
    title: "Contact",
    titleHighlight: "Me",
    subtitle: "Have a project in mind? Let's talk and make it happen.",
    infoTitle: "Get In Touch",
    followMe: "Follow Me",
    formTitle: "Send a Message",
    name: "Your Name",
    namePlaceholder: "Enter your name",
    email: "Email Address",
    emailPlaceholder: "your@email.com",
    subject: "Subject",
    subjectPlaceholder: "What's this about?",
    message: "Message",
    messagePlaceholder: "Your message here...",
    submit: "Send Message",
    submitting: "Sending...",
    successTitle: "Message sent successfully!",
    successDesc: "WhatsApp should open shortly.",
    errorTitle: "There was an issue",
    errorDesc: "Please check the form and try again.",
    validation: {
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Email is invalid",
      subjectRequired: "Subject is required",
      messageRequired: "Message is required",
    },
    location: "Semarang, Indonesia",
    whatsapp: "+62 857-5506-9891",
    emailAddress: "stevenjonathanalfredo785@gmail.com",
    footer: "Thanks for Scrolling",
    copyright: "© 2025 Steven Jonathan Sihombing. All rights reserved.",
  },
};

export default en;
