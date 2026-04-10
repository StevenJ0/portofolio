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
    badgeYears: "2+ thn",
    badgeYearsLabel: "Pengalaman",
    badgeProjects: "15+",
    badgeProjectsLabel: "Proyek",
  },
  about: {
    title: "Tentang",
    titleHighlight: "Saya",
    heading: "Siapa Saya?",
    bio1: "Saya Steven Jonathan Sihombing, seorang Website Developer yang bersemangat dalam menciptakan pengalaman pengguna yang intuitif dan menarik. Dengan keahlian di bidang frontend dan backend, saya berupaya membangun solusi digital yang memadukan estetika dengan fungsionalitas.",
    bio2: "Saat ini saya adalah mahasiswa Ilmu Komputer tahun kedua di Universitas Diponegoro, dengan minat besar di bidang Rekayasa Perangkat Lunak dan Ilmu Data.",
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
    challengeLabel: "Kendala",
    solutionLabel: "Solusi",
    learningLabel: "Pelajaran",
    skillLabel: "Skill yang Didapat",
    narrativeLabel: "Tantangan & Solusi",
    achievementsLabel: "Pencapaian Utama",
    galleryLabel: "Galeri",
    /* ── Konten Proyek IT ─────────────────────── */
    capex: {
      description: "Platform monitoring full-stack yang digunakan di Telkom Semarang untuk manajemen proyek jaringan Fiber-to-the-Home (FTTH), dilengkapi dashboard real-time, visualisasi grafik interaktif, dan integrasi bot Telegram untuk divisi lapangan.",
      details: [
        {
          challenge: "Ini adalah website pertama saya yang berhubungan langsung dengan klien. Terkadang muncul error atau komplain yang ternyata bukan dari kode, melainkan faktor eksternal seperti koneksi internet klien yang lambat.",
          solution: "Menambahkan loading state yang jelas, error handling yang informatif pada UI, dan mengedukasi klien mengenai cara penggunaan sistem dengan benar.",
          skillGained: "Belajar cara berkomunikasi efektif dengan klien non-teknis dan menyadari pentingnya Defensive UX Design — merancang antarmuka yang siap menghadapi kondisi jaringan buruk."
        },
        {
          challenge: "Memastikan keamanan bot Telegram. Karena ini untuk internal Telkom, kami tidak ingin sembarang orang bisa mengakses dan menggunakan bot tersebut.",
          solution: "Membangun sistem validasi ke database di awal interaksi. Bot akan mengecek apakah nomor telepon pengguna (sender) sudah terdaftar di database sebelum mengizinkan percakapan dan akses data.",
          skillGained: "Memahami cara mengamankan integrasi API pihak ketiga (Telegram) dan menerapkan autentikasi pengguna berbasis nomor telepon di sisi backend."
        },
        {
          challenge: "Menyajikan visualisasi data (grafik) yang benar-benar sesuai dengan keinginan mentor agar data monitoring yang ditampilkan relevan, tepat sasaran, dan mudah diakses.",
          solution: "Berkomunikasi secara intensif dengan mentor untuk memahami metrik apa saja yang paling dibutuhkan, lalu menerjemahkannya menjadi grafik interaktif di dashboard.",
          skillGained: "Belajar cara menggali dan menerjemahkan kebutuhan bisnis (business requirements) dari stakeholder menjadi fitur UI/UX yang fungsional."
        }
      ]
    },
    portfolio: {
      description: "Portofolio pribadi yang dibangun dengan Next.js dan Tailwind CSS, menampilkan proyek, keterampilan, dan pengalaman dengan animasi halus serta dukungan i18n penuh.",
      details: [
        {
          challenge: "Merancang situs yang terasa premium tanpa desainer UI di tim — perlu beriterasi melalui beberapa sistem desain.",
          solution: "Mengumpulkan inspirasi dari produk SaaS premium dan memilih palet charcoal + gold dengan micro-interaction glassmorphism.",
          skillGained: "Pemikiran sistem desain — keputusan desain yang disengaja dan berbasis riset menghasilkan identitas visual yang lebih kuat daripada pilihan ad-hoc.",
        },
        {
          challenge: "Mengimplementasikan i18n penuh tanpa library berat, memastikan pergantian bahasa instan di semua data dinamis (bukan hanya label statis).",
          solution: "Membangun sistem locale React Context kustom yang didukung file kamus locale, lalu memindahkan semua string data dinamis ke dalam kamus agar seluruh halaman berganti sekaligus.",
          skillGained: "Memperdalam pemahaman tentang pola React Context untuk state global dan arsitektur yang diperlukan untuk i18n yang dapat diskalakan dalam aplikasi berbasis data.",
        },
      ],
    },
    boxsl: {
      description: "Platform e-commerce yang dirancang untuk memamerkan produk pernikahan dengan format interaktif yang menarik bagi calon pelanggan.",
      details: [
        {
          challenge: "Bekerja pada produk komersial langsung berarti setiap deployment berisiko tinggi dengan pelanggan nyata yang bergantung pada ketersediaan layanan.",
          solution: "Menambahkan loading state yang jelas, error handling yang informatif, dan menjaga komunikasi yang erat dengan klien selama proses rilis.",
          skillGained: "Belajar berkomunikasi efektif dengan klien non-teknis dan menyadari pentingnya Defensive UX Design."
        },
        {
          challenge: "Memastikan stabilitas dan kelancaran backend, mengingat aplikasi ini langsung diakses oleh publik (production) sehingga performa yang buruk atau downtime akan sangat fatal.",
          solution: "Melakukan pengujian API secara menyeluruh, mengelola endpoint dengan efisien, dan memastikan integrasi antara frontend dan backend berjalan tanpa hambatan sebelum rilis.",
          skillGained: "Memahami standar kualitas aplikasi level production dan pentingnya menjaga keandalan arsitektur backend di dunia nyata."
        },
        {
          challenge: "Ini adalah proyek pertama saya yang melibatkan kerja sama tim dalam pengembangan web. Menggabungkan kode dari beberapa developer sangat rentan menimbulkan konflik (merge conflict).",
          solution: "Menerapkan alur kerja kolaborasi yang terstruktur menggunakan GitHub, seperti pembagian branch (percabangan), disiplin dalam penulisan commit, dan melakukan review sebelum menggabungkan kode.",
          skillGained: "Sangat meningkatkan keterampilan praktis saya dalam menggunakan Git/GitHub (Version Control System) dan kemampuan bekerja sama dalam tim (Teamwork)."
        },
        {
          challenge: "Memastikan rendering lintas browser yang konsisten untuk tata letak produk yang kompleks di perangkat mobile maupun desktop.",
          solution: "Mengadopsi pendekatan CSS mobile-first dan melakukan pengujian sistematis di Chrome, Safari, dan Firefox sebelum setiap rilis.",
          skillGained: "Memperkuat kemampuan debugging lintas browser dan kedisiplinan dalam desain responsif mobile-first."
        }
      ]
    },
    dcf: {
      description: "Platform web untuk Diponegoro Chemistry Fair — pusat informasi bagi peserta untuk mengakses info acara, pendaftaran, dan pembaruan.",
      details: [
        {
          challenge: "Struktur database awal yang saya rancang kurang optimal. Saya menyadari bahwa jika aplikasi ini mencapai skala production yang lebih besar, struktur ini akan menyebabkan query menjadi lambat atau bahkan membuat sistem kewalahan (crash).",
          solution: "Melakukan evaluasi mendalam terhadap skema database yang ada, mengidentifikasi bottleneck, dan mulai mempelajari cara merancang relasi data (Entity Relationship) yang lebih efisien.",
          skillGained: "Menyadari betapa krusialnya perancangan arsitektur database (Database Design) sejak awal proyek, serta belajar menstrukturkan backend agar lebih scalable dan berkinerja tinggi."
        },
        {
          challenge: "Mengelola sistem pendaftaran real-time dengan Supabase di tengah lonjakan traffic yang tidak terduga selama periode pengumuman.",
          solution: "Mengimplementasikan pembaruan UI optimistik (Optimistic UI) dan error handling yang baik untuk memastikan halaman tetap responsif meski database sedang terbebani.",
          skillGained: "Desain berorientasi skalabilitas — belajar mengantisipasi pola traffic dan merancang sistem yang tetap stabil di bawah tekanan (graceful degradation)."
        },
        {
          challenge: "Mengkoordinasikan pengembangan website di tengah jadwal akademik perkuliahan yang padat dan komitmen organisasi lainnya.",
          solution: "Menerapkan pembatasan fitur yang ketat dan sprint berbatas waktu (time-boxing) untuk menjaga penyelesaian proyek tetap sesuai tenggat waktu tanpa mengorbankan kualitas kode.",
          skillGained: "Meningkatkan kemampuan manajemen proyek (Project Management) dan disiplin dalam menetapkan batasan ruang lingkup (scope) di bawah tekanan waktu."
        }
      ]
    },
    /* ── Konten Proyek Non-IT ─────────────────── */
    informatics_orphanage: {
      description: "Memimpin Divisi Acara dalam mengorganisir kegiatan untuk 50+ anak dari panti asuhan.",
      achievements: ["Mengorganisir permainan interaktif...", "Memastikan koordinasi yang lancar...", "Menciptakan lingkungan yang inklusif..."],
    },
    informatics_care: {
      description: "Menjabat sebagai Project Leader untuk program pengabdian masyarakat dua hari di sebuah desa.",
      achievements: ["Mendistribusikan kebutuhan untuk 40+ keluarga", "Memimpin sesi edukasi teknologi untuk warga", "Mendorong empati komunitas melalui interaksi langsung"],
      details: [
        {
          challenge: "Sering terjadi miskomunikasi dengan perangkat desa saat koordinasi kegiatan lapangan.",
          solution: "Menyesuaikan gaya bahasa, melakukan pendekatan yang lebih personal, dan memastikan setiap informasi tersampaikan dengan sangat jelas dan tertulis.",
          skillGained: "Meningkatkan skill komunikasi interpersonal secara signifikan dan belajar cara me-manage ekspektasi serta komunikasi dengan pemangku kepentingan (stakeholder).",
        },
        {
          challenge: "Menjaga motivasi relawan agar tetap bersemangat dan berkomitmen selama program dua hari di lapangan.",
          solution: "Menyusun jadwal dengan peran yang jelas, sesi briefing sebelum setiap kegiatan, dan momen debrief untuk menjaga keselarasan tim.",
          skillGained: "Mengembangkan keterampilan kepemimpinan tim secara praktis dan kemampuan mempertahankan semangat tim dalam acara yang panjang dan penuh upaya.",
        },
      ],
    },
    telkom_journalism: {
      description: "Meliput dan mendokumentasikan kegiatan perusahaan...",
      achievements: ["Mendokumentasikan acara perusahaan", "Menulis dan menyunting artikel berita", "Berkolaborasi di berbagai divisi"],
    },
    telkom_webdev: {
      description: "Menjalani magang selama 3 bulan sebagai Website Developer di Telkom Regional 4 Semarang, berfokus pada pengembangan Dashboard Monitoring Proyek Fiber-to-the-Home (FTTH).",
      achievements: [
        "Membangun dashboard monitoring full-stack dari nol hingga siap digunakan oleh divisi lapangan.",
        "Meningkatkan kemampuan kolaborasi lintas divisi (cross-functional team) antara developer dan pemangku kepentingan (mentor/klien internal).",
        "Mengimplementasikan integrasi bot Telegram yang aman untuk pelaporan data real-time."
      ],
      details: [
        {
          challenge: "Beradaptasi dengan standar kerja profesional di perusahaan korporat besar dan menerjemahkan kebutuhan bisnis yang kompleks ke dalam kode.",
          solution: "Melakukan komunikasi proaktif dengan mentor, rutin meminta feedback (code review), dan memecah fitur besar menjadi tugas-tugas kecil yang terukur (Agile mindset).",
          skillGained: "Memahami alur kerja profesional (SDLC), manajemen ekspektasi tim, dan secara drastis meningkatkan kemampuan penulisan kode yang bersih dan terstruktur (Clean Code)."
        }
      ]
    },
  },
  experience: {
    title: "Pengalaman",
    titleHighlight: "Saya",
    getInTouch: "Hubungi Saya",
    present: "Sekarang",
    items: [
      {
        year: "2025",
        title: "Magang Jurnalistik & Konten Digital",
        company: "Telkom Regional 4, Semarang",
        period: "Juni – Agustus 2025",
        description: "Meliput kegiatan perusahaan, menulis dan menyunting berita untuk saluran komunikasi, berkolaborasi lintas divisi.",
        current: false,
      },
      {
        year: "2025",
        title: "Frontend Developer",
        company: "BoxSL",
        period: "April 2025",
        description: "Mengembangkan dan mengelola fitur e-commerce untuk platform web produk pernikahan menggunakan Next.js.",
        current: false,
      },
      {
        year: "2025",
        title: "Website Manager",
        company: "DCF Undip 2025",
        period: "April – Mei 2025",
        description: "Mengelola dan mengembangkan website untuk Diponegoro Chemistry Fair menggunakan Next.js dan Supabase.",
        current: false,
      },
      {
        year: "2024",
        title: "Staf – Divisi Sosial",
        company: "Himpunan Mahasiswa Informatika",
        period: "Jan 2024 – Jan 2025",
        description: "Berkolaborasi dalam inisiatif sosial, memimpin acara utama, dan memastikan kelancaran pelaksanaan program.",
        current: false,
      },
      {
        year: "2023",
        title: "Mahasiswa Ilmu Komputer",
        company: "Universitas Diponegoro",
        period: "2023 – Sekarang",
        description: "Mempelajari Informatika dengan fokus pada rekayasa perangkat lunak dan ilmu data.",
        current: true,
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
