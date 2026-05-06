import { BarChart3, Code2, Gauge, Layers3, Mail, Map, Medal, Palette, Rocket, ShieldCheck, Sparkles, Users } from 'lucide-react';

export type Skill = { name: string; level: string; description: string; progress: number };
export type SkillCategory = { name: string; summary: string; skills: Skill[] };
export type Project = { slug: string; title: string; status: string; difficulty: string; impact: string; stack: string[]; problem: string; solution: string; demoUrl: string; githubUrl: string; role: string; process: string[]; decisions: string[]; screenshots: string[] };
export type Milestone = { year: string; title: string; description: string; unlocked: boolean; icon: string };
export type Experience = { period: string; company: string; role: string; description: string; highlights: string[] };

export const portfolio = {
  name: 'xdil',
  role: 'Frontend Engineer & Interface Specialist',
  levelTitle: 'Senior Frontend Engineer',
  currentLevel: 8,
  xp: { current: 7420, next: 9000 },
  availability: 'Terbuka untuk proyek produk, dashboard, dan design system',
  bio: 'Saya membantu tim produk merapikan antarmuka yang kompleks menjadi pengalaman yang cepat, jelas, dan mudah dirawat. Fokus saya ada di frontend architecture, detail interaksi, performa, dan sistem UI yang bisa dipakai tim tanpa saling menunggu.',
  location: 'Jakarta / Remote',
  email: 'halo@xdil.dev',
  socials: [
    { label: 'GitHub', href: 'https://github.com/xdil' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/xdil' },
    { label: 'Email', href: 'mailto:halo@xdil.dev' }
  ],
  recruiter: {
    summary: 'Frontend engineer dengan selera UI kuat, terbiasa mengubah kebutuhan produk yang berantakan menjadi interface yang stabil, cepat, dan enak dipakai. Nyaman bekerja dekat dengan designer, PM, dan backend engineer.',
    strongestSkills: ['React dan Next.js', 'Design system', 'Dashboard kompleks', 'Performance tuning', 'Frontend architecture'],
    cta: 'Kirim brief singkat atau jadwalkan obrolan 20 menit. Saya akan balas dengan konteks yang jelas, bukan template.'
  },
  milestones: [
    { year: '2019', title: 'Masuk jalur produk digital', description: 'Mulai membangun UI dashboard internal dan belajar membaca kebutuhan operasional.', unlocked: true, icon: 'Rocket' },
    { year: '2021', title: 'Frontend system owner', description: 'Mengambil alih struktur komponen, state, dan standar review untuk tim kecil.', unlocked: true, icon: 'Layers3' },
    { year: '2023', title: 'Design system production', description: 'Merilis komponen lintas produk dengan dokumentasi dan token yang konsisten.', unlocked: true, icon: 'ShieldCheck' },
    { year: '2025', title: 'Interface specialist', description: 'Fokus pada dashboard, data-heavy UI, dan pengalaman rekruter yang langsung terbaca.', unlocked: true, icon: 'Sparkles' }
  ] as Milestone[],
  skills: [
    { name: 'Frontend', summary: 'Fondasi aplikasi modern yang stabil dan mudah diubah.', skills: [
      { name: 'Next.js App Router', level: 'Advanced', description: 'Routing, server component boundary, metadata, dan rendering strategy.', progress: 92 },
      { name: 'React Architecture', level: 'Advanced', description: 'Komposisi komponen, state boundary, dan pola data yang tidak rapuh.', progress: 90 },
      { name: 'TypeScript', level: 'Advanced', description: 'Contract jelas untuk config, komponen, dan layer data.', progress: 88 }
    ]},
    { name: 'UI Engineering', summary: 'Detail visual yang rapi tanpa mengorbankan aksesibilitas.', skills: [
      { name: 'Responsive Systems', level: 'Advanced', description: 'Layout mobile-first untuk dashboard dan halaman marketing.', progress: 91 },
      { name: 'Interaction Design', level: 'Senior', description: 'Transisi pendek, state jelas, dan tombol yang punya konsekuensi nyata.', progress: 86 }
    ]},
    { name: 'Performance', summary: 'Mengukur sebelum mengoptimalkan.', skills: [
      { name: 'Core Web Vitals', level: 'Advanced', description: 'Audit LCP, CLS, INP, dan strategi perbaikan bertahap.', progress: 84 },
      { name: 'Bundle Hygiene', level: 'Intermediate+', description: 'Memotong dependency dan menjaga client boundary tetap kecil.', progress: 80 }
    ]},
    { name: 'Design System', summary: 'Komponen yang bisa dipakai tim, bukan hanya cantik di demo.', skills: [
      { name: 'Token & Component API', level: 'Advanced', description: 'Varian komponen yang konsisten dan tidak over-configured.', progress: 89 },
      { name: 'Documentation', level: 'Advanced', description: 'Panduan penggunaan yang membantu reviewer dan engineer baru.', progress: 82 }
    ]},
    { name: 'Product Thinking', summary: 'Membaca dampak produk dari keputusan kecil di UI.', skills: [
      { name: 'Dashboard UX', level: 'Advanced', description: 'Prioritas informasi, empty state, dan flow kerja harian.', progress: 87 },
      { name: 'Cross-functional Delivery', level: 'Senior', description: 'Menjembatani trade-off antara desain, data, dan timeline.', progress: 85 }
    ]}
  ] as SkillCategory[],
  projects: [
    { slug: 'orbit-crm', title: 'Orbit CRM', status: 'Shipped', difficulty: 'Level 8', impact: 'Memangkas input prospek dari 6 menit menjadi kurang dari 2 menit.', stack: ['Next.js','TypeScript','TanStack Query','Tailwind'], problem: 'Tim sales kecil kehilangan konteks karena data prospek tersebar di spreadsheet dan chat.', solution: 'Dashboard CRM ringkas dengan pipeline visual, quick update, dan ringkasan follow-up harian.', demoUrl: 'https://example.com/orbit-crm', githubUrl: 'https://github.com/xdil/orbit-crm', role: 'Lead frontend dan UI system owner', process: ['Memetakan alur sales harian', 'Membuat prototype tabel-pipeline', 'Menguji quick action dengan 5 pengguna internal'], decisions: ['Client state dibatasi untuk filter dan draft', 'Komponen tabel dipisah dari data fetching', 'Empty state memberi next action yang spesifik'], screenshots: ['Pipeline ringkas', 'Detail prospek', 'Follow-up queue'] },
    { slug: 'satumeja', title: 'SatuMeja', status: 'Pilot', difficulty: 'Level 7', impact: 'Mengurangi bentrok reservasi meja sebesar 41% pada minggu uji coba.', stack: ['React','Next.js','Radix UI','PostgreSQL'], problem: 'Host restoran sulit melihat ketersediaan meja saat jam ramai.', solution: 'Interface floor plan sederhana dengan status meja, durasi reservasi, dan konflik yang terlihat jelas.', demoUrl: 'https://example.com/satumeja', githubUrl: 'https://github.com/xdil/satumeja', role: 'Frontend engineer dan interaction designer', process: ['Observasi shift makan malam', 'Menyederhanakan status meja menjadi 4 kondisi', 'Menguji flow walk-in dan reservasi'], decisions: ['Tidak memakai map 3D agar cepat dibaca', 'Konflik tampil sebagai teks dan ikon, bukan warna saja'], screenshots: ['Floor overview', 'Reservation drawer', 'Conflict state'] },
    { slug: 'kelasrapi', title: 'KelasRapi', status: 'Launched', difficulty: 'Level 8', impact: 'Menaikkan completion setup kelas dari 54% ke 78%.', stack: ['Next.js','TypeScript','Framer Motion','Stripe'], problem: 'Creator Indonesia sering berhenti di tengah proses membuat kelas karena form terlalu panjang.', solution: 'Dashboard setup bertahap dengan preview konten, checklist, dan validasi yang tidak mengintimidasi.', demoUrl: 'https://example.com/kelasrapi', githubUrl: 'https://github.com/xdil/kelasrapi', role: 'Frontend architect', process: ['Audit funnel setup', 'Memecah form menjadi milestone', 'Menulis microcopy validasi yang natural'], decisions: ['Progress disimpan per tahap', 'Preview dibuka berdampingan di desktop dan stacked di mobile'], screenshots: ['Course setup', 'Creator dashboard', 'Preview mode'] },
    { slug: 'flowpay', title: 'FlowPay', status: 'Shipped', difficulty: 'Level 9', impact: 'Mempercepat investigasi pembayaran gagal dari 18 menit menjadi 5 menit.', stack: ['Next.js','TypeScript','Chart.js','Node.js'], problem: 'Tim finance sulit menemukan pola pembayaran gagal pada bisnis subscription.', solution: 'Monitoring dashboard dengan timeline event, filter penyebab, dan ringkasan risiko harian.', demoUrl: 'https://example.com/flowpay', githubUrl: 'https://github.com/xdil/flowpay', role: 'Senior frontend engineer', process: ['Menyusun taxonomy error pembayaran', 'Merancang tabel investigasi cepat', 'Mengoptimalkan render chart besar'], decisions: ['Filter penting masuk URL agar mudah dibagikan', 'Virtualisasi dipakai pada event list panjang'], screenshots: ['Risk overview', 'Failed payment detail', 'Event timeline'] }
  ] as Project[],
  achievements: [
    { title: 'Built Design System', description: 'Menyatukan 38 komponen inti untuk dua produk aktif.', icon: 'Layers3' },
    { title: 'Improved Core Web Vitals', description: 'Menurunkan LCP halaman dashboard dari 4,1s ke 1,8s.', icon: 'Gauge' },
    { title: 'Shipped SaaS Dashboard', description: 'Merilis dashboard operasional yang dipakai tim harian.', icon: 'BarChart3' },
    { title: 'Led Frontend Refactor', description: 'Memecah modul legacy tanpa menghentikan delivery fitur.', icon: 'Code2' }
  ],
  experience: [
    { period: '2023 — Sekarang', company: 'Independent Product Studio', role: 'Frontend Engineer', description: 'Mengerjakan dashboard, design system, dan halaman produk untuk tim SaaS tahap awal.', highlights: ['Membuat struktur komponen reusable', 'Memperbaiki performa halaman data-heavy', 'Mendampingi handoff desain ke produksi'] },
    { period: '2021 — 2023', company: 'NusaCloud', role: 'Frontend Developer', description: 'Membangun UI internal untuk billing, support, dan observability.', highlights: ['Mengurangi bug visual lintas halaman', 'Menerapkan review checklist aksesibilitas', 'Menyusun standar form dan tabel'] }
  ] as Experience[],
  testimonials: [
    { quote: 'xdil rapi dalam mengambil keputusan UI. Diskusi jadi pendek karena ia bisa menjelaskan trade-off dengan jelas.', author: 'Raka Pradipta', role: 'Product Manager' },
    { quote: 'Komponen yang dibuat bukan hanya bagus dilihat, tapi enak dipakai engineer lain.', author: 'Maya Putri', role: 'Design Lead' }
  ]
};

export const iconMap = { Rocket, Layers3, ShieldCheck, Sparkles, Gauge, BarChart3, Code2, Medal, Palette, Users, Map, Mail };
