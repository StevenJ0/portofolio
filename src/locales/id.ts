const id = {
  nav: {
    home: "Beranda",
    about: "Tentang",
    projects: "Proyek",
    experience: "Pengalaman",
    contact: "Kontak",
  },
  hero: {
    iam: "SAYA",
    name: "Steven Jonathan Sihombing",
    role: "Website Developer",
    bio: "Merancang pengalaman digital yang memadukan estetika dengan fungsionalitas. Spesialisasi dalam antarmuka yang intuitif dan pengalaman pengguna yang berkesan.",
    contactMe: "Hubungi Saya",
    viewResume: "Lihat Resume",
    scrollDown: "Gulir ke bawah",
    badgeYears: "1+ thn",
    badgeYearsLabel: "Pengalaman",
    badgeProjects: "7+",
    badgeProjectsLabel: "Proyek",
  },
  about: {
    title: "Tentang",
    titleHighlight: "Saya",
    heading: "Siapa Saya?",
    bio1: "Saya Steven Jonathan Sihombing, seorang Website Developer yang bersemangat dalam menciptakan pengalaman pengguna yang intuitif dan menarik. Dengan keahlian di bidang frontend dan backend, saya berupaya membangun solusi digital yang memadukan estetika dengan fungsionalitas.",
    bio2: "Saat ini saya adalah mahasiswa Ilmu Komputer tahun ketiga di Universitas Diponegoro, dengan minat besar di bidang Rekayasa Perangkat Lunak dan Ilmu Data.",
    bio3: "Memiliki kemampuan kolaborasi, manajemen, dan komunikasi yang kuat melalui pengalaman koordinasi. Menunjukkan keinginan kuat untuk terus belajar dan berkembang.",
    university: "Universitas Diponegoro",
    faculty: "Fakultas Ilmu Komputer",
    period: "2023 - Sekarang",
    skillsTitle: "Keahlian Saya",
  },
  projects: {
    title: "Proyek",
    titleHighlight: "Saya",
    subtitle: "Menampilkan proyek teknis dan non-teknis saya.",
    itTab: "Proyek IT",
    nonItTab: "Proyek Non-IT",
    viewProject: "Lihat Proyek",
    viewDetails: "Lihat Detail",
    viewMore: "Lihat Semua Proyek",
    descriptionLabel: "Deskripsi",
    achievementsLabel: "Pencapaian Utama",
    galleryLabel: "Galeri",
    /* ── Konten Proyek IT ─────────────────────── */
    investsense: {
      description: "Merancang RESTful API skalabel di Node.js menggunakan Clean Architecture, mengintegrasikan Redis cache multi-tier dengan namespaced keys untuk kutipan saham, indikator RSI, dan konteks chatbot RAG, dengan fail-open error handling yang menjamin degradasi yang anggun saat cache mati. Membangun pipeline data harian otomatis yang mengorkestrasikan ingestion OHLCV Yahoo Finance, perhitungan RSI-14 melalui microservice Python, dan analisis sentimen berita berbasis AI untuk saham IDX yang di-watchlist, dengan idempotensi upsert Supabase untuk menghilangkan duplikasi data.",
    },
    walletx: {
      description: "Merancang RESTful API skalabel di Golang menggunakan Clean Architecture di Vercel, mengintegrasikan Redis cache serbaguna dengan namespaced keys dan pola fallback NoOp untuk degradasi yang anggun. Membangun pipeline ingestion transaksi yang fault-tolerant melalui IMAP dan Telegram, mengkombinasikan Regex spesifik bank dengan fallback Gemini AI dan menerapkan idempotensi level database untuk mencegah duplikasi data.",
    },
    dcf2026: {
      description: "Mengembangkan portal pendaftaran peserta berperforma tinggi menggunakan Next.js dan Supabase, mengintegrasikan Framer Motion untuk micro-interaction UI premium dan Nodemailer untuk alur kerja email otomatis. Merancang infrastruktur Computer-Based Test (CBT) yang skalabel dengan mengkontainerisasi Moodle, Nginx, dan PostgreSQL melalui Docker, serta memvalidasi ketahanan sistem menggunakan k6 automated load testing untuk menjamin zero downtime bagi 250 pengguna bersamaan pada periode ujian puncak.",
    },
    capex: {
      description: "Platform monitoring full-stack yang digunakan di Telkom Semarang untuk manajemen proyek jaringan Fiber-to-the-Home (FTTH), dilengkapi dashboard real-time, visualisasi grafik interaktif, dan integrasi bot Telegram untuk divisi lapangan.",
    },
    portfolio: {
      description: "Portofolio pribadi yang dibangun dengan Next.js dan Tailwind CSS, menampilkan proyek, keterampilan, dan pengalaman dengan animasi halus serta dukungan i18n penuh.",
    },
    boxsl: {
      description: "Platform e-commerce yang dirancang untuk memamerkan produk pernikahan dengan format interaktif yang menarik bagi calon pelanggan.",
    },
    dcf: {
      description: "Platform web untuk Diponegoro Chemistry Fair — pusat informasi bagi peserta untuk mengakses info acara, pendaftaran, dan pembaruan.",
    },
    /* ── Konten Proyek Non-IT ─────────────────── */
    informatics_orphanage: {
      description: "Memimpin Divisi Acara dalam mengorganisir kegiatan untuk 50+ anak dari panti asuhan.",
      achievements: ["Mengorganisir permainan interaktif...", "Memastikan koordinasi yang lancar...", "Menciptakan lingkungan yang inklusif..."],
    },
    informatics_care: {
      description: "Menjabat sebagai Project Leader untuk program pengabdian masyarakat dua hari di sebuah desa.",
      achievements: ["Mendistribusikan kebutuhan untuk 40+ keluarga", "Memimpin sesi edukasi teknologi untuk warga", "Mendorong empati komunitas melalui interaksi langsung"],
    },
    // ── DIHAPUS: telkom_journalism (magang non-teknis, dihapus)
    // ── DIHAPUS: telkom_webdev (magang non-teknis, dihapus)
  },

  experience: {
    title: "Pengalaman",
    titleHighlight: "Saya",
    getInTouch: "Hubungi Saya",
    present: "Sekarang",
    items: [
      // ── DIPERTAHANKAN: Telkom Regional 4 (Full Stack Developer Intern) ──
      {
        year: "2026",
        title: "Full Stack Developer Intern",
        company: "Telkom Regional 4 · Semarang, Indonesia",
        period: "Januari 2026 – Februari 2026",
        description: [
          "Merancang dan men-deploy dashboard monitoring FTTH siap produksi dari nol, memperlancar pemantauan proyek untuk divisi lapangan. Menerapkan Defensive UX Design dan penanganan error yang andal untuk memitigasi jaringan klien yang lambat, yang secara signifikan mengurangi keluhan pengguna dan menyederhanakan pekerjaan bagi pekerja non-teknis.",
          "Mengamankan akses data korporat internal dengan membangun integrasi bot Telegram yang dilengkapi sistem autentikasi nomor telepon berbasis database yang ketat, berhasil memastikan 100% penggunaan yang terotorisasi.",
        ],
        current: false,
      },
      // ── DIPERTAHANKAN: DBS Foundation Coding Camp (Full-Stack Web Developer) ──
      {
        year: "2026",
        title: "Full-Stack Web Developer",
        company: "DBS Foundation Coding Camp · Remote",
        period: "Februari 2026 – Juli 2026",
        description: [
          "Terpilih sebagai 1 dari hanya 3.000 peserta kompetitif dari 67.000+ pelamar nasional (tingkat penerimaan ~4,4%) untuk menjalani program pengembangan talenta digital yang intensif dan berstandar tinggi.",
          "Menginvestasikan 943+ jam untuk menguasai rekayasa perangkat lunak secara komprehensif, mencakup frontend modern (React, Vite, Zustand), backend skalabel (Node.js, Express, RESTful APIs), manajemen database (PostgreSQL/Supabase), Redis caching, dan AWS cloud.",
          "Turut mengembangkan \"InvestSense AI\" (platform asisten investasi berbasis AI) dengan merancang API modular, mengorkestrasikan integrasi layanan mikro dengan Python (FastAPI), dan menerapkan strategi Redis caching yang adaptif.",
        ],
        current: false,
      },
      // ── BARU: Diponegoro Chemistry Fair 2026 (Project Manager / Lead Dev) ──
      {
        year: "2026",
        title: "Project Manager / Lead Developer",
        company: "Diponegoro Chemistry Fair (DCF) 2026 · Semarang, Indonesia",
        period: "Maret 2026 – September 2026",
        description: [
          "Mengembangkan portal pendaftaran peserta berperforma tinggi menggunakan Next.js dan Supabase, mengintegrasikan Framer Motion untuk micro-interaction UI premium dan Nodemailer untuk alur kerja email otomatis.",
          "Merancang infrastruktur Computer-Based Test (CBT) yang skalabel dengan mengkontainerisasi Moodle, Nginx, dan PostgreSQL melalui Docker, serta memvalidasi ketahanan sistem menggunakan k6 automated load testing untuk menjamin zero downtime bagi 250 pengguna bersamaan pada periode ujian puncak.",
        ],
        current: false,
      },
      // ── DIPERTAHANKAN: Staf Divisi Sosial (disimpan persis apa adanya) ──
      {
        year: "2024",
        title: "Staf – Divisi Sosial",
        company: "Himpunan Mahasiswa Informatika",
        period: "Januari 2024 – Januari 2025",
        description: "Memimpin inisiatif sosial dan pengabdian masyarakat, serta mengoordinasikan eksekusi program kerja divisi.",
        current: false,
      },
    ],
  },
  contact: {
    title: "Kontak",
    titleHighlight: "Saya",
    subtitle: "Punya proyek? Mari kita diskusikan dan wujudkan bersama.",
    infoTitle: "Hubungi Saya",
    followMe: "Ikuti Saya",
    formTitle: "Kirim Pesan",
    name: "Nama Anda",
    namePlaceholder: "Masukkan nama Anda",
    email: "Alamat Email",
    emailPlaceholder: "email@anda.com",
    subject: "Subjek",
    subjectPlaceholder: "Perihal pesan?",
    message: "Pesan",
    messagePlaceholder: "Pesan Anda di sini...",
    submit: "Kirim Pesan",
    submitting: "Mengirim...",
    successTitle: "Pesan berhasil dikirim!",
    successDesc: "WhatsApp akan terbuka sebentar lagi.",
    errorTitle: "Terjadi kesalahan",
    errorDesc: "Periksa formulir dan coba lagi.",
    validation: {
      nameRequired: "Nama wajib diisi",
      emailRequired: "Email wajib diisi",
      emailInvalid: "Email tidak valid",
      subjectRequired: "Subjek wajib diisi",
      messageRequired: "Pesan wajib diisi",
    },
    location: "Semarang, Indonesia",
    whatsapp: "+62 857-5506-9891",
    emailAddress: "stevenjonathanalfredo785@gmail.com",
    footer: "Terima Kasih Sudah Scroll",
    copyright: "© 2025 Steven Jonathan Sihombing. Hak cipta dilindungi.",
  },
};

export default id;
