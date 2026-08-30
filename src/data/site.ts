/**
 * Site content, single source of truth for the whole site.
 *
 * Voice rule: user visible text never uses an em dash, a hyphen, or a
 * semicolon. Founder name is canonicalized to Maifi Setya Cahyani
 * (short form Maifi) everywhere. Rupiah uses the Indonesian dot format.
 */

export type CtaKind = "primary" | "secondary" | "quiet";

export type Cta = {
  label: string;
  href: string;
  kind: CtaKind;
};

export type NamedItem = {
  name: string;
  body: string;
};

export type ContributeItem = NamedItem & { cta?: Cta };

export type JourneyMonth = {
  month: string;
  title: string;
  story: string[];
  impact: { category: string; total: string }[];
};

export type FaqItem = {
  q: string;
  a: string;
};

const whatsappBase = "https://wa.me/6281282730367";
const waMessage = (text: string) => `${whatsappBase}?text=${encodeURIComponent(text)}`;

/** Prefilled WhatsApp links used by volunteer / collaboration CTAs. */
const wa = {
  volunteer: waMessage("Halo Hadir Sejenak, saya ingin menjadi volunteer."),
  collaborate: waMessage("Halo Hadir Sejenak, saya ingin berkolaborasi."),
  support: waMessage("Halo Hadir Sejenak, saya ingin mendukung sebuah program."),
  general: waMessage("Halo Hadir Sejenak."),
};

export const site = {
  org: {
    name: "Hadir Sejenak",
    tagline: "Sejenak hadir, selamanya berarti.",
    description: "A social space built on presence, empathy, and meaningful action.",
    foundedBy: "Maifi Setya Cahyani",
    foundedLine: "Founded by Maifi Setya Cahyani, May 2026",
    instagram: "@hadirsejenakk",
    instagramUrl: "https://instagram.com/hadirsejenakk",
    founderInstagram: "@maifiisc",
    founderInstagramUrl: "https://instagram.com/maifiisc",
    email: "maifisocialproject@gmail.com",
    whatsappDisplay: "0812 8273 0367",
    whatsappUrl: whatsappBase,
    websiteUrl: "https://hadirsejenak.vercel.app",
    websiteDisplay: "hadirsejenak.vercel.app",
  },

  /** Prefilled WhatsApp links used by volunteer / collaboration CTAs. */
  wa,

  nav: [
    { label: "Tentang", href: "/tentang" },
    { label: "Kegiatan", href: "/kegiatan" },
    { label: "Perjalanan", href: "/perjalanan" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontak", href: "/kontak" },
  ],

  footerNav: [
    { label: "About", href: "/tentang" },
    { label: "What We Do", href: "/kegiatan" },
    { label: "Our Journey", href: "/perjalanan" },
    { label: "Volunteer", href: "/bergabung" },
    { label: "Collaboration", href: "/kolaborasi" },
    { label: "Contact", href: "/kontak" },
  ],

  /* 01 HOME */
  hero: {
    eyebrow: "Official Website",
    intro: [
      "Hadir Sejenak adalah ruang sosial yang mengajak setiap individu untuk hadir, peduli, dan memberikan kebermanfaatan bagi sesama.",
      "Kami percaya bahwa kebaikan tidak selalu harus dimulai dari sesuatu yang besar. Terkadang, semuanya dimulai dari sesuatu yang sederhana: waktu, perhatian, tenaga, kemampuan, dan kemauan untuk hadir. Karena mungkin bagi kita hanya sejenak, tetapi bagi seseorang, kehadiran itu dapat menjadi sesuatu yang berarti jauh lebih lama.",
    ],
  },

  /* 02 APA ITU HADIR SEJENAK? */
  whatIs: {
    heading: "APA ITU HADIR SEJENAK?",
    note: "About Hadir Sejenak",
    story: [
      "Hadir Sejenak adalah sebuah ruang sosial yang didirikan untuk menjadi wadah bagi individu untuk menghadirkan kepedulian dalam bentuk yang nyata.",
      "Hadir Sejenak membuka ruang bagi siapa pun untuk berkontribusi melalui waktu, tenaga, perhatian, kemampuan, maupun sumber daya yang dimiliki.",
      "Kami percaya bahwa kebermanfaatan tidak memiliki satu bentuk. Ia dapat hadir melalui kegiatan sosial, volunteer, edukasi, interaksi, kreativitas, kampanye, kolaborasi, maupun tindakan sederhana yang dilakukan dengan tulus.",
      "Hadir Sejenak hadir untuk mempertemukan orang orang yang memiliki satu keinginan yang sama: untuk memberikan arti bagi sesama.",
    ],
  },

  /* 05 WHY WE EXIST */
  whyWeExist: {
    heading: "WHY WE EXIST",
    note: "Mengapa Hadir Sejenak Dibangun?",
    intro: [
      "Di tengah kehidupan yang semakin cepat, terkadang kita lupa untuk berhenti sejenak dan melihat orang orang di sekitar kita. Banyak yang ingin hadir dalam kegiatan sosial, tetapi bingung untuk memulai, dengan siapa mereka ingin memulai, dan bagaimana mereka bisa memulai.",
      "Hadir Sejenak dibangun untuk menciptakan ruang bagi hal hal sederhana tersebut.",
      "Kami percaya bahwa setiap orang memiliki sesuatu yang dapat diberikan. Tidak harus memiliki banyak uang. Tidak harus memiliki jabatan. Tidak harus memiliki kemampuan luar biasa. Kita dapat memulai dari apa yang kita punya:",
    ],
    bullets: ["Waktu.", "Tenaga.", "Pengetahuan.", "Kreativitas.", "Perhatian.", "Kepedulian."],
    closing:
      "Karena ketika hal hal kecil tersebut dipertemukan, sesuatu yang lebih besar dapat tercipta.",
  },

  /* Home teaser strip */
  impactTeaser: {
    stats: [
      { value: "65", label: "total volunteer" },
      { value: "110", label: "anak / penerima manfaat" },
      { value: "Rp 5.058.000", label: "total donasi" },
    ],
    cta: { label: "Lihat perjalanan kami", href: "/perjalanan", kind: "secondary" } satisfies Cta,
  },

  about: {
    /* 03 OUR BEGINNING */
    beginning: {
      heading: "OUR BEGINNING",
      note: "The Beginning of Hadir Sejenak",
      story: [
        "Hadir Sejenak didirikan oleh Maifi pada Mei 2026.",
        "Hadir Sejenak berawal dari sebuah gagasan sederhana untuk menciptakan ruang bagi siapa pun, terutama bagi anak anak muda, yang memungkinkan lebih banyak orang melakukan sesuatu yang berarti bagi sesama. Pada tahap awal, Maifi menjadi orang yang menggagas, membangun, dan menjalankan Hadir Sejenak secara langsung.",
        "Mulai dari merumuskan ide, membangun identitas, menentukan arah, menyusun konsep kegiatan, mengelola berbagai kebutuhan, membangun komunikasi dan kolaborasi, hingga menjalankan kegiatan, semuanya menjadi bagian dari proses awal membangun Hadir Sejenak.",
        "Namun, Hadir Sejenak sejak awal tidak dimaksudkan untuk menjadi perjalanan seorang diri. Apa yang dimulai oleh satu orang diharapkan dapat tumbuh menjadi ruang yang dapat diisi, dikembangkan, dan dijalankan bersama oleh banyak orang.",
      ],
      closing: "Started by one. Built for many.",
    },

    /* 04 FOUNDER */
    founder: {
      heading: "FOUNDER",
      note: "The Founder Behind Hadir Sejenak",
      name: "Maifi Setya Cahyani",
      role: "Founder & Initiator of Hadir Sejenak",
      story: [
        "Maifi adalah pendiri dan inisiator Hadir Sejenak yang menggagas dan membangun Hadir Sejenak sejak Mei 2026.",
        "Hadir Sejenak lahir dari keinginannya untuk menciptakan ruang sosial yang memungkinkan kepedulian diwujudkan melalui tindakan nyata.",
        "Sebagai founder, Maifi menjadi bagian dari proses awal Hadir Sejenak secara langsung, mulai dari membangun identitas dan konsep, menentukan arah gerakan, merancang kegiatan, membangun kolaborasi, mengelola komunikasi, hingga menjalankan berbagai proses di balik setiap kegiatan.",
        "Seiring berjalannya waktu, Hadir Sejenak akan terus berkembang bersama volunteer, partner, komunitas, dan individu yang memiliki nilai dan semangat yang sama.",
      ],
      closing: "What started with one person is built to be carried by many.",
    },

    /* 06 OUR PURPOSE */
    purpose: {
      heading: "OUR PURPOSE",
      note: "What We Aim to Create",
      intro: "Hadir Sejenak bertujuan untuk:",
      items: [
        {
          name: "Menghadirkan Kepedulian",
          body: "Mendorong lebih banyak individu untuk melihat, memahami, dan peduli terhadap lingkungan di sekitarnya.",
        },
        {
          name: "Mengubah Kepedulian Menjadi Aksi",
          body: "Membantu setiap orang mengubah niat baik menjadi tindakan nyata.",
        },
        {
          name: "Menciptakan Pengalaman Bermakna",
          body: "Menghadirkan pengalaman positif yang dapat memberikan arti bagi setiap orang yang terlibat.",
        },
        {
          name: "Menghubungkan Banyak Orang",
          body: "Mempertemukan individu, volunteer, komunitas, organisasi, dan berbagai pihak melalui semangat yang sama.",
        },
        {
          name: "Menjadi Ruang untuk Bertumbuh",
          body: "Menjadikan proses memberi sebagai ruang untuk belajar, berinteraksi, dan berkembang.",
        },
      ] satisfies NamedItem[],
    },

    /* 07 OUR VISION */
    vision: {
      heading: "OUR VISION",
      note: "Our Vision",
      body: "Menjadi ruang sosial yang mendorong setiap individu untuk hadir, peduli, dan berkontribusi dalam menciptakan kebermanfaatan yang berkelanjutan bagi sesama.",
    },

    /* 08 OUR MISSION */
    mission: {
      heading: "OUR MISSION",
      note: "Our Mission",
      items: [
        {
          name: "Create",
          body: "Menciptakan ruang dan pengalaman yang membawa nilai positif bagi sesama.",
        },
        {
          name: "Connect",
          body: "Menghubungkan individu, komunitas, organisasi, dan berbagai pihak melalui kepedulian dan kolaborasi.",
        },
        {
          name: "Empower",
          body: "Mendorong setiap individu untuk menyadari bahwa dirinya memiliki sesuatu yang dapat diberikan.",
        },
        {
          name: "Inspire",
          body: "Menumbuhkan budaya untuk saling peduli dan berkontribusi.",
        },
        {
          name: "Grow",
          body: "Menjadi ruang bagi individu untuk belajar, bertumbuh, dan menemukan makna melalui proses memberi.",
        },
      ] satisfies NamedItem[],
    },

    /* 09 OUR VALUES */
    values: {
      heading: "OUR VALUES",
      note: "What We Believe",
      items: [
        {
          name: "Presence",
          body: "Hadir dengan tulus dan memberikan perhatian, bukan sekadar datang.",
        },
        {
          name: "Empathy",
          body: "Berusaha melihat, mendengar, dan memahami sebelum bertindak.",
        },
        {
          name: "Meaningful Action",
          body: "Mengubah kepedulian menjadi tindakan yang nyata.",
        },
        {
          name: "Collaboration",
          body: "Percaya bahwa dampak yang lebih besar dapat tercipta ketika banyak orang bergerak bersama.",
        },
        {
          name: "Inclusivity",
          body: "Setiap orang memiliki kesempatan untuk berkontribusi, terlepas dari latar belakangnya.",
        },
        {
          name: "Consistency",
          body: "Kebermanfaatan bukan hanya tentang satu kegiatan, tetapi tentang memilih untuk terus peduli.",
        },
      ] satisfies NamedItem[],
    },

    /* 21 FOUNDER MESSAGE */
    founderMessage: {
      heading: "FOUNDER MESSAGE",
      note: "A Message from the Founder",
      body: [
        "Hadir Sejenak dimulai dari sebuah hal sederhana: keinginan untuk hadir dan memberikan arti.",
        "Saya percaya bahwa kita tidak harus menunggu memiliki banyak hal untuk dapat memberikan sesuatu kepada orang lain. Kita dapat memulai dari apa yang kita punya. Dari waktu yang kita luangkan. Dari tenaga yang kita berikan. Dari perhatian yang kita tunjukkan. Dari kemampuan yang kita bagikan.",
        "Hadir Sejenak saya bangun sebagai ruang untuk mempertemukan hal hal sederhana tersebut.",
        "Apa yang dimulai pada Mei 2026 sebagai sebuah inisiatif pribadi, saya harap dapat terus tumbuh menjadi ruang yang lebih besar dan dapat dijalankan bersama banyak orang.",
        "Karena pada akhirnya, Hadir Sejenak bukan tentang satu orang. Ini tentang apa yang dapat kita ciptakan ketika kita memilih untuk hadir bersama.",
      ],
      signature: "Maifi Setya Cahyani",
      signatureRole: "Founder & Initiator of Hadir Sejenak",
    },
  },

  /* 10 WHAT WE DO */
  whatWeDo: {
    heading: "WHAT WE DO",
    note: "Bagaimana Hadir Sejenak Bergerak?",
    intro:
      "Hadir Sejenak tidak dibatasi oleh satu jenis kegiatan. Seiring berkembangnya kebutuhan dan kesempatan, bentuk kegiatan Hadir Sejenak dapat terus berkembang.",
    items: [
      {
        name: "Social Initiatives",
        body: "Menghadirkan berbagai kegiatan dan aksi sosial yang memberikan manfaat bagi masyarakat.",
      },
      {
        name: "Volunteer Activities",
        body: "Membuka ruang bagi individu untuk terlibat langsung melalui waktu, tenaga, dan kemampuan.",
      },
      {
        name: "Community Activities",
        body: "Menciptakan ruang interaksi dan kebersamaan bagi berbagai individu dan komunitas.",
      },
      {
        name: "Education & Awareness",
        body: "Menghadirkan kegiatan yang mendorong pengetahuan dan kesadaran terhadap berbagai isu.",
      },
      {
        name: "Creative Activities",
        body: "Menggunakan kreativitas, seni, permainan, dan berbagai medium sebagai sarana menciptakan pengalaman bermakna.",
      },
      {
        name: "Social Campaigns",
        body: "Mengangkat pesan dan isu tertentu untuk meningkatkan kepedulian masyarakat.",
      },
      {
        name: "Collaboration",
        body: "Bekerja bersama berbagai pihak untuk menciptakan program yang lebih luas dan berkelanjutan.",
      },
    ] satisfies NamedItem[],
  },

  /* 11 WHO CAN BE PART OF HADIR SEJENAK? */
  whoCanBePart: {
    heading: "WHO CAN BE PART OF HADIR SEJENAK?",
    note: "Everyone Has Something to Give",
    intro: "Hadir Sejenak terbuka bagi siapa pun yang ingin mengambil bagian.",
    items: [
      {
        name: "Individuals",
        body: "Bagi siapa pun yang ingin memberikan kontribusi sesuai kemampuan.",
      },
      {
        name: "Volunteers",
        body: "Bagi mereka yang ingin terlibat langsung dalam berbagai kegiatan.",
      },
      {
        name: "Communities",
        body: "Bagi komunitas yang ingin bertemu, belajar, dan bergerak bersama.",
      },
      {
        name: "Organizations & Institutions",
        body: "Bagi organisasi dan institusi yang memiliki tujuan yang sejalan.",
      },
      {
        name: "Brands & Businesses",
        body: "Bagi brand, bisnis, dan UMKM yang ingin mendukung atau membangun program sosial.",
      },
      {
        name: "Partners",
        body: "Bagi berbagai pihak yang ingin membangun kolaborasi bersama Hadir Sejenak.",
      },
    ] satisfies NamedItem[],
  },

  /* 12 HOW TO CONTRIBUTE */
  howToContribute: {
    heading: "HOW TO CONTRIBUTE",
    note: "How Can You Be Part of It?",
    intro:
      "Tidak semua orang dapat memberikan hal yang sama. Namun, setiap orang dapat memberikan sesuatu.",
    items: [
      {
        name: "Volunteer",
        body: "Berikan waktu, tenaga, dan kemampuan dengan terlibat langsung dalam kegiatan.",
        cta: { label: "Join as Volunteer", href: wa.volunteer, kind: "primary" },
      },
      {
        name: "Donate",
        body: "Berikan dukungan finansial untuk membantu kebutuhan program sosial.",
        cta: { label: "Support Our Program", href: "/donasi", kind: "secondary" },
      },
      {
        name: "In Kind Contribution",
        body: "Kontribusi dapat berupa barang, perlengkapan, konsumsi, fasilitas, maupun kebutuhan lain yang relevan.",
      },
      {
        name: "Skills & Expertise",
        body: "Gunakan kemampuan yang kamu miliki, seperti desain, dokumentasi, fotografi, videografi, edukasi, komunikasi, maupun keahlian lainnya.",
      },
      {
        name: "Share",
        body: "Bantu menyebarkan informasi dan cerita Hadir Sejenak agar semakin banyak orang mengetahui dan dapat mengambil bagian.",
      },
    ] satisfies ContributeItem[],
  },

  /* 13 DONATION */
  donation: {
    heading: "DONATION",
    note: "Support a Meaningful Action",
    intro:
      "Setiap dukungan memiliki arti. Donasi yang diberikan dapat digunakan untuk mendukung kebutuhan program dan kegiatan sosial Hadir Sejenak.",
    steps: [
      {
        step: "01.",
        title: "Choose",
        body: "Pilih program atau kegiatan yang ingin kamu dukung.",
      },
      {
        step: "02.",
        title: "Contribute",
        body: "Lakukan donasi melalui kanal resmi Hadir Sejenak.",
      },
      {
        step: "03.",
        title: "Confirm",
        body: "Simpan atau kirim bukti transaksi sesuai ketentuan program.",
      },
      {
        step: "04.",
        title: "Stay Updated",
        body: "Informasi mengenai kegiatan dan penggunaan dukungan akan disampaikan melalui kanal resmi Hadir Sejenak sesuai kebutuhan.",
      },
    ],
    important:
      "Informasi rekening dan kanal donasi resmi hanya akan dicantumkan melalui media resmi Hadir Sejenak.",
  },

  /* 14 COLLABORATION */
  collaboration: {
    heading: "COLLABORATION",
    note: "Let's Create an Impact Together",
    intro:
      "Hadir Sejenak percaya bahwa kebermanfaatan tidak harus dilakukan sendirian. Kami terbuka untuk membangun kolaborasi dengan:",
    partners: [
      "Komunitas",
      "Yayasan",
      "Organisasi",
      "Institusi pendidikan",
      "Brand",
      "Bisnis",
      "UMKM",
      "Media",
      "Individu",
      "Volunteer community",
    ],
    forms: [
      "Social programs",
      "Fundraising",
      "Educational programs",
      "Campaigns",
      "Event collaboration",
      "Sponsorship",
      "In kind support",
      "Media & documentation",
      "Creative collaboration",
    ],
    cta: { label: "Collaborate With Us", href: wa.collaborate, kind: "primary" },
  },

  /* 15 to 19, the journey */
  journey: {
    heading: "OUR JOURNEY",
    note: "May until now",
    intro:
      "Empat bulan pertama menjadi bagian penting dari perjalanan Hadir Sejenak. Dimulai pada Mei 2026 sebagai sebuah inisiatif yang dibangun oleh Maifi, Hadir Sejenak perlahan berkembang melalui keterlibatan lebih banyak orang dan dukungan dari berbagai pihak.",
    months: [
      {
        month: "MAY 2026",
        title: "The Beginning",
        story: [
          "Mei 2026 menjadi awal perjalanan Hadir Sejenak. Pada bulan ini, Hadir Sejenak resmi dimulai sebagai sebuah inisiatif sosial yang didirikan dan diinisiasi oleh Maifi.",
        ],
        impact: [
          { category: "Volunteer", total: "12" },
          { category: "Children / Beneficiaries", total: "20" },
          { category: "Donation", total: "Rp 850.000" },
        ],
      },
      {
        month: "JUNE 2026",
        title: "Growing Together",
        story: [
          "Memasuki bulan Juni, Hadir Sejenak mulai berkembang melalui keterlibatan lebih banyak individu dan dukungan dari berbagai pihak.",
          "Setiap kontribusi menjadi bagian dari proses membangun ruang sosial yang terus bertumbuh.",
        ],
        impact: [
          { category: "Volunteer", total: "13" },
          { category: "Children / Beneficiaries", total: "15" },
          { category: "Donation", total: "Rp 550.000" },
        ],
      },
      {
        month: "JULY 2026",
        title: "More People, More Moments",
        story: [
          "Pada bulan Juli, perjalanan Hadir Sejenak terus berlanjut melalui kegiatan dan keterlibatan volunteer.",
          "Lebih banyak orang mulai hadir dan menjadi bagian dari momen momen yang diciptakan bersama.",
        ],
        impact: [
          { category: "Volunteer", total: "15" },
          { category: "Children / Beneficiaries", total: "40" },
          { category: "Donation", total: "Rp 1.295.000" },
        ],
      },
      {
        month: "AUGUST 2026",
        title: "Growing Impact",
        story: [
          "Memasuki Agustus 2026, Hadir Sejenak terus memperluas keterlibatan dan menghadirkan lebih banyak ruang untuk berkontribusi.",
          "Setiap dukungan yang diberikan menjadi bagian dari perjalanan yang terus berkembang.",
        ],
        impact: [
          { category: "Volunteer", total: "25" },
          { category: "Children / Beneficiaries", total: "35" },
          { category: "Donation", total: "Rp 2.363.000" },
        ],
      },
    ] satisfies JourneyMonth[],

    /* 16 TOTAL IMPACT */
    totalImpact: {
      heading: "TOTAL IMPACT",
      note: "May to August 2026",
      rows: [
        { category: "Total Volunteer", total: "65" },
        { category: "Total Children / Beneficiaries", total: "110" },
        { category: "Total Donation", total: "Rp 5.058.000" },
      ],
    },

    /* 17 A NOTE FROM HADIR SEJENAK */
    noteBlock: {
      heading: "A NOTE FROM HADIR SEJENAK",
      body: [
        "Empat bulan pertama mungkin baru menjadi awal. Namun, setiap angka di dalam perjalanan ini memiliki cerita.",
        "Ada volunteer yang meluangkan waktunya. Ada donatur yang mempercayakan dukungannya. Ada orang orang yang memilih untuk hadir. Dan ada momen momen sederhana yang mungkin berlangsung hanya sementara, tetapi meninggalkan arti yang jauh lebih lama.",
        "Sejenak hadir, selamanya berarti.",
      ],
    },

    /* 18 CONTINUING THE JOURNEY */
    continuing: {
      heading: "CONTINUING THE JOURNEY",
      body: [
        "Perjalanan Hadir Sejenak tidak berhenti pada Agustus 2026. Data dan cerita akan terus diperbarui seiring bertambahnya kegiatan, volunteer, penerima manfaat, donatur, dan kolaborasi.",
        "Mei 2026 menjadi titik awal. Bulan bulan berikutnya menjadi bagian dari perjalanan. Dan setiap orang yang hadir menjadi bagian dari cerita Hadir Sejenak.",
      ],
    },

    /* 19 OUR FUTURE */
    future: {
      heading: "OUR FUTURE",
      note: "Where We Are Going",
      body: [
        "Hadir Sejenak dimulai dari sebuah gagasan sederhana pada Mei 2026. Namun perjalanan ini tidak berhenti pada satu kegiatan, satu kelompok, atau satu periode.",
        "Hadir Sejenak ingin terus berkembang menjadi ruang yang lebih luas bagi individu untuk hadir, berkontribusi, belajar, dan menciptakan kebermanfaatan bersama.",
        "Bentuknya dapat berubah. Programnya dapat berkembang. Orang orang yang terlibat dapat terus bertambah. Namun satu hal akan tetap menjadi dasar:",
      ],
      closing: "The willingness to be present.",
      closingNote:
        "Karena bagi Hadir Sejenak, kebermanfaatan tidak harus selalu besar. Yang penting adalah terus memilih untuk hadir.",
    },
  },

  /* 20 JOIN HADIR SEJENAK */
  join: {
    heading: "JOIN HADIR SEJENAK",
    note: "Your Presence Matters",
    intro: [
      "Mungkin kamu memiliki waktu. Mungkin kamu memiliki kemampuan. Mungkin kamu memiliki sumber daya. Mungkin kamu hanya memiliki keinginan untuk membantu.",
      "Apa pun yang kamu punya, ada ruang untukmu di Hadir Sejenak.",
    ],
    closing:
      "You don't have to do something big to make a difference. Sometimes, you just have to show up.",
    ctas: [
      { label: "Become a Volunteer", href: wa.volunteer, kind: "primary" },
      { label: "Collaborate With Us", href: wa.collaborate, kind: "secondary" },
      { label: "Support Our Programs", href: "/donasi", kind: "quiet" },
    ] satisfies Cta[],
  },

  /* 22 FAQ */
  faq: {
    heading: "FAQ",
    note: "Frequently Asked Questions",
    items: [
      {
        q: "Apa itu Hadir Sejenak?",
        a: "Hadir Sejenak adalah ruang sosial yang mengajak individu untuk hadir, peduli, dan berkontribusi melalui berbagai bentuk aksi dan kolaborasi.",
      },
      {
        q: "Kapan Hadir Sejenak didirikan?",
        a: "Hadir Sejenak didirikan oleh Maifi pada Mei 2026.",
      },
      {
        q: "Siapa founder Hadir Sejenak?",
        a: "Hadir Sejenak didirikan dan diinisiasi oleh Maifi.",
      },
      {
        q: "Siapa yang dapat bergabung?",
        a: "Siapa pun yang memiliki keinginan untuk berkontribusi dapat menjadi bagian dari Hadir Sejenak.",
      },
      {
        q: "Apakah harus memiliki pengalaman sebagai volunteer?",
        a: "Tidak. Kemauan untuk belajar, bekerja sama, dan berkontribusi adalah hal yang utama.",
      },
      {
        q: "Apakah menjadi volunteer dikenakan biaya?",
        a: "Sejauh ini pendaftaran tidak dipungut biaya apa pun, namun ketentuan dapat berbeda pada setiap program dan akan selalu diinformasikan secara terbuka pada saat pendaftaran.",
      },
      {
        q: "Bagaimana cara berdonasi?",
        a: "Donasi dapat dilakukan melalui kanal resmi yang dicantumkan pada program atau halaman donasi Hadir Sejenak, dan laporan keuangan akan diberikan secara transparan kepada para donatur.",
      },
      {
        q: "Apakah kontribusi harus berupa uang?",
        a: "Tidak. Kontribusi dapat berupa waktu, tenaga, barang, keahlian, fasilitas, maupun dukungan lainnya.",
      },
      {
        q: "Apakah bisa mengajak Hadir Sejenak berkolaborasi?",
        a: "Ya. Hadir Sejenak terbuka untuk berbagai bentuk kolaborasi yang memiliki tujuan dan nilai yang sejalan.",
      },
    ] satisfies FaqItem[],
  },

  /* 23 CONTACT */
  contact: {
    heading: "CONTACT",
    note: "Let's Stay Connected",
    intro:
      "Punya ide? Ingin menjadi volunteer? Ingin berkolaborasi? Ingin mendukung sebuah program? Atau ingin mengenal Hadir Sejenak lebih jauh? Kami terbuka untuk mendengar.",
    channels: [
      { label: "Instagram", value: "@hadirsejenakk", href: "https://instagram.com/hadirsejenakk" },
      {
        label: "Founder & Initiator",
        value: "Maifi Setya Cahyani, @maifiisc",
        href: "https://instagram.com/maifiisc",
      },
      { label: "Email", value: "maifisocialproject@gmail.com", href: "mailto:maifisocialproject@gmail.com" },
      { label: "WhatsApp", value: "0812 8273 0367", href: wa.general },
      { label: "Website", value: "hadirsejenak.vercel.app", href: "https://hadirsejenak.vercel.app" },
    ],
  },

  footer: {
    tagline: "Sejenak hadir, selamanya berarti.",
    description: "A social space built on presence, empathy, and meaningful action.",
    instagramLine: "Instagram: @hadirsejenakk",
    foundedLine: "Founded by Maifi Setya Cahyani, May 2026",
    copyright: "© 2026 Hadir Sejenak. All Rights Reserved.",
  },

  privacy: {
    heading: "Kebijakan privasi",
    updated: "Diperbarui Agustus 2026",
    sections: [
      {
        title: "Data yang kami kumpulkan",
        body: "Data relawan (nama, nomor WhatsApp, email, umur, domisili) dan data donatur (nama, kontak untuk kuitansi). Kami tidak mengumpulkan data pribadi anak dalam bentuk apa pun.",
      },
      {
        title: "Tujuan penggunaan",
        body: "Data dipakai untuk koordinasi kegiatan, penerbitan e sertifikat, dan pengiriman kuitansi donasi.",
      },
      {
        title: "Masa penyimpanan",
        body: "Data relawan dan donatur disimpan selama satu tahun setelah kegiatan, lalu dihapus.",
      },
      {
        title: "Permintaan penghapusan",
        body: "Kamu bisa meminta penghapusan data kapan saja lewat email maifisocialproject@gmail.com. Kami proses dalam 30 hari.",
      },
      {
        title: "Notifikasi pelanggaran",
        body: "Jika terjadi pelanggaran data, kami memberi tahu pihak yang terdampak sesuai ketentuan yang berlaku.",
      },
    ],
  },

  safeguarding: {
    heading: "Perlindungan anak",
    sections: [
      {
        title: "Tanpa data anak",
        body: "Sistem tidak menyimpan nama, usia, metadata foto, atau lokasi yang terhubung ke anak tertentu.",
      },
      {
        title: "Izin sebelum tayang",
        body: "Setiap set foto yang diunggah harus memiliki izin tertulis dari pihak mitra sebelum dipublikasikan.",
      },
      {
        title: "Tanpa identitas gabungan",
        body: "Nama lengkap, wajah, dan lokasi tidak pernah tampil bersamaan. Laporan memakai nama depan saja, atau tanpa nama.",
      },
      {
        title: "Penarikan foto",
        body: "Pihak mitra atau wali bisa meminta penghapusan foto, dan penghapusan berlaku dalam 48 jam di seluruh kanal.",
      },
      {
        title: "Standar citra",
        body: "Tidak ada citra yang menyedihkan, kemiskinan yang dipentaskan, atau penyuntingan gelap. Ditinjau sebelum tayang.",
      },
    ],
  },
};
