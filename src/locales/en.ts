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
    challengeLabel: "Challenge",
    solutionLabel: "Solution",
    learningLabel: "Learning",
    skillLabel: "Skill Gained",
    narrativeLabel: "Challenges & Solutions",
    achievementsLabel: "Key Achievements",
    galleryLabel: "Gallery",
    /* ── IT Project Content ───────────────────── */
    capex: {
      description: "A full-stack monitoring platform used at Telkom Semarang for Fiber-to-the-Home (FTTH) network project management, featuring real-time dashboards, interactive chart visualizations, and Telegram bot integration for field divisions.",
      details: [
        {
          challenge: "This was my first client-facing project. Occasional errors and complaints turned out to be caused not by the code, but by external factors like the client's slow internet connection.",
          solution: "Added clear loading states, informative UI error handling, and educated the client on how to use the system properly.",
          skillGained: "Learned to communicate effectively with non-technical clients and understood the importance of Defensive UX Design — building interfaces that handle poor network conditions gracefully."
        },
        {
          challenge: "Ensuring the security of the Telegram bot. Since it was for internal Telkom use, we needed to prevent unauthorized access and usage of the bot.",
          solution: "Implemented a database validation system at the start of the interaction. The bot checks if the user's phone number is registered in the database before granting access to the chat and data.",
          skillGained: "Gained practical experience in securing third-party API integrations (Telegram) and implementing phone number-based user authentication on the backend."
        },
        {
          challenge: "Creating data visualizations (charts) that perfectly matched the mentor's specific needs, ensuring the monitored data was highly relevant, targeted, and easy to access.",
          solution: "Communicated intensively with the mentor to understand the exact metrics required, then translated those needs into interactive charts on the dashboard.",
          skillGained: "Learned how to extract and translate business requirements from stakeholders into highly functional UI/UX features."
        }
      ]
    },
    portfolio: {
      description: "Personal portfolio built with Next.js and Tailwind CSS showcasing projects, skills, and experiences with smooth animations and full i18n support.",
      details: [
        {
          challenge: "Designing a site that feels premium without a UI designer on the team — needed to iterate through multiple design systems.",
          solution: "Gathered inspiration from premium SaaS products and settled on a charcoal + gold palette with glassmorphism micro-interactions.",
          skillGained: "Design systems thinking — deliberate, research-backed design decisions produce a stronger visual identity than ad-hoc choices.",
        },
        {
          challenge: "Implementing full i18n without a heavy library, ensuring instant language switching across all dynamic data (not just static labels).",
          solution: "Built a custom React Context locale system backed by locale dictionary files, then moved all dynamic data strings into the dictionaries so the entire page switches at once.",
          skillGained: "Deepened understanding of React Context patterns for global state and the architecture needed for scalable i18n in a data-driven app.",
        },
      ],
    },
    boxsl: {
      description: "An e-commerce platform designed to showcase wedding products in an engaging and interactive format for potential customers.",
      details: [
        {
          challenge: "Working on a live commercial product meant every deployment carried high risk, with real customers relying on service availability.",
          solution: "Added clear loading states, informative error handling, and maintained close communication with the client during the release process.",
          skillGained: "Learned effective communication with non-technical clients and realized the importance of Defensive UX Design."
        },
        {
          challenge: "Ensuring backend stability and smooth performance, as the application was live in production and accessed directly by the public, meaning poor performance or downtime would be fatal.",
          solution: "Conducted thorough API testing, managed endpoints efficiently, and ensured seamless frontend-to-backend integration before release.",
          skillGained: "Understood production-level application standards and the importance of maintaining reliable backend architecture in a real-world setting."
        },
        {
          challenge: "This was my first collaborative web development project. Merging code from multiple developers easily leads to code conflicts (merge conflicts) if not managed properly.",
          solution: "Implemented a structured collaborative workflow using GitHub, including feature branching, disciplined commit messages, and conducting code reviews before merging.",
          skillGained: "Significantly improved my practical skills in using Git/GitHub (Version Control System) and working effectively within a team (Teamwork)."
        },
        {
          challenge: "Ensuring consistent cross-browser rendering for complex product layouts on both mobile and desktop devices.",
          solution: "Adopted a mobile-first CSS approach and conducted systematic testing across Chrome, Safari, and Firefox before every release.",
          skillGained: "Strengthened cross-browser debugging skills and discipline in mobile-first responsive design."
        }
      ]
    },
    dcf: {
      description: "A web platform for the Diponegoro Chemistry Fair — serving as a central hub for participants to access event information, registration, and updates.",
      details: [
        {
          challenge: "The initial database structure I designed was not fully optimized. I realized that if the application scaled to handle much higher production traffic, this poor structure would cause slow queries or even system crashes.",
          solution: "Conducted a thorough evaluation of the existing database schema, identified bottlenecks, and studied how to design more efficient data relationships (Entity Relationships).",
          skillGained: "Realized the critical importance of proper Database Design from the very beginning of a project, and learned how to structure backend architecture for better scalability and performance."
        },
        {
          challenge: "Managing a real-time registration system with Supabase amidst unexpected traffic spikes during the announcement period.",
          solution: "Implemented optimistic UI updates and graceful error degradation to ensure the page remained usable and responsive even when the database was under heavy load.",
          skillGained: "Scalability-oriented design — learned to anticipate traffic patterns and design systems that remain robust under pressure (graceful degradation)."
        },
        {
          challenge: "Coordinating the website development amidst a full academic schedule and other organizational commitments.",
          solution: "Enforced strict feature scoping and time-boxed sprints to keep the project on schedule without compromising the quality of the code.",
          skillGained: "Improved project management skills and the ability to set clear scope boundaries under tight time constraints."
        }
      ]
    },
    /* ── Non-IT Project Content ───────────────── */
    informatics_orphanage: {
      description: "Led the Event Division in organizing activities for 50+ children from the orphanage.",
      achievements: ["Organized interactive games...", "Ensured smooth coordination...", "Created an inclusive environment..."],
    },
    informatics_care: {
      description: "Served as Project Leader for a two-day community service program in a village.",
      achievements: ["Distributed supplies to 40+ families", "Led tech education sessions for residents", "Promoted community empathy through direct interaction"],
      details: [
        {
          challenge: "Frequent miscommunication with village officials during field coordination made planning difficult.",
          solution: "Adapted communication style, took a more personal approach, and ensured every piece of information was delivered clearly and in writing.",
          skillGained: "Significantly improved interpersonal communication skills and learned how to manage expectations with non-technical stakeholders.",
        },
        {
          challenge: "Motivating volunteers to maintain energy and commitment across a two-day outdoor program.",
          solution: "Structured the schedule with clear roles, briefing sessions before each activity, and built in debrief moments to keep the team aligned.",
          skillGained: "Developed practical team leadership skills and the ability to sustain team morale during extended, high-effort events.",
        },
      ],
    },
    telkom_journalism: {
      description: "Covered and documented company activities...",
      achievements: ["Documented corporate events", "Wrote and edited news articles", "Collaborated across multiple divisions"],
    },
    telkom_webdev: {
      description: "Completed a 3-month internship as a Website Developer at Telkom Regional 4 Semarang, focusing on the development of a Fiber-to-the-Home (FTTH) Project Monitoring Dashboard.",
      achievements: [
        "Built a full-stack monitoring dashboard from scratch to a production-ready state for field divisions.",
        "Enhanced cross-functional team collaboration skills between developers and stakeholders (internal mentors/clients).",
        "Implemented secure Telegram bot integration for real-time data reporting."
      ],
      details: [
        {
          challenge: "Adapting to professional work standards in a large corporate environment and translating complex business requirements into code.",
          solution: "Engaged in proactive communication with mentors, regularly requested feedback (code reviews), and broke down large features into measurable, smaller tasks (Agile mindset).",
          skillGained: "Understood professional workflows (SDLC), team expectation management, and drastically improved my ability to write clean, structured code."
        }
      ]
    },
  },
  experience: {
    title: "My",
    titleHighlight: "Experience",
    getInTouch: "Get In Touch",
    present: "Present",
    items: [
      {
        year: "2026",
        title: "Full Stack Developer Intern",
        company: "Telkom Regional 4, Semarang",
        period: "January – February 2026",
        description: "Architected a robust FTTH monitoring dashboard from scratch and integrated Telegram bot for database-driven security.",
        current: false,
      },
      {
        year: "2026",
        title: "Software Engineer",
        company: "WalletX (Personal Project)",
        period: "February 2026 – Present",
        description: "Developing scalable RESTful APIs in Golang with Redis caching and automated transaction parsing via Telegram Webhooks.",
        current: true,
      },
      {
        year: "2025",
        title: "Digital Content & Journalism Intern",
        company: "Telkom Regional 4, Semarang",
        period: "June – August 2025",
        description: "Covered corporate activities and authored high-quality internal news articles through cross-divisional collaboration.",
        current: false,
      },
      {
        year: "2025",
        title: "Frontend Developer",
        company: "BoxSL",
        period: "April – August 2025",
        description: "Developed core e-commerce features utilizing Next.js with a focus on mobile-first CSS and layout fidelity.",
        current: false,
      },
      {
        year: "2025",
        title: "Website Manager",
        company: "DCF Undip 2025",
        period: "April – May 2025",
        description: "Managed event registration platform, optimized database schemas in Supabase, and handled real-time data flows.",
        current: false,
      },
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
