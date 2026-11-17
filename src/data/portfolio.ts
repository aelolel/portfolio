/**
 * ============================================================
 *  PORTFOLIO DATA — edit everything here.
 *  Empty strings / empty arrays are fine: the site hides or
 *  shows a "coming soon" state for anything not filled in yet.
 *  Images go in /public/images/... and are referenced WITHOUT
 *  a leading slash, e.g. "images/projects/kai-dashboard.png".
 * ============================================================
 */

export const profile = {
  fullName: "Sebastian Rafael Bevan Setyawan",
  nickname: "Rafael",
  greeting: "Hello there!",
  role: "Frontend Developer & Data Analyst Enthusiast.",
  // Words wrapped in **double asterisks** render bold-italic.
  quote:
    "I build **responsive web** experiences and leverage **data analytics** to solve complex business problems.",
  bio: "Information Systems student at Universitas Airlangga who sits between the browser and the spreadsheet. I turn messy data into dashboards people actually read, and Figma designs into fast, responsive interfaces. Outside of code, I've led teams, run a small business, and placed in national business case competitions, so I care just as much about the business question as the technical answer.",
  location: "Surabaya, Indonesia",
  photo: "images/rafael.webp",
  cvUrl: "CV_Sebastian_Rafael_Bevan_Setyawan.pdf",
  heroSkills: [
    "SQL",
    "Power BI",
    "Looker",
    "Tableau",
    "Excel",
    "Google Sheets",
    "Laravel",
    "Next.js",
    "Tailwind CSS",
    "Python",
    "TypeScript",
  ],
};

export const socials = {
  email: "sebastian.setyawan.id@gmail.com",
  whatsapp: "+62 831-1355-5549",
  whatsappUrl: "https://wa.me/6283113555549",
  linkedin: "https://www.linkedin.com/in/sebastian-rafael-bevan/",
  instagram: "https://www.instagram.com/rafaelbevans/",
  github: "https://github.com/aelolel"
};

export const stats = [
  { value: "3.48", suffix: "/4.00", label: "Current GPA" },
  { value: "10", suffix: "", label: "Web & data projects" },
  { value: "7", suffix: "", label: "Case competitions placed" },
  { value: "573", suffix: "", label: "ELPT score (UNAIR)" },
];

/* ---------------- PROJECTS ---------------- */

export type ProjectCategory = "Web Development" | "Data Analytics" | "UI/UX" | "IoT";

export type Project = {
  title: string;
  tagline: string;
  category: ProjectCategory;
  context: string; // e.g. "Personal Project", "ISIT Course, UNAIR"
  date: string;
  points: string[];
  tech: string[];
  images: string[];
  links: { label: string; url: string }[];
};

export const projectCategories: ProjectCategory[] = [
  "Web Development",
  "Data Analytics",
  "UI/UX",
  "IoT",
];

export const projects: Project[] = [
  {
    title: "Oil & Products Pricing Monitor",
    tagline:
      "A two-page Power BI dashboard tracking crude prices and refining margins (2019–2026) from U.S. EIA data.",
    category: "Data Analytics",
    context: "Personal Mini Project",
    date: "2026",
    points: [
      "Business questions: where crude prices are heading, how wide the Brent–WTI spread is, whether refining margins are above normal, and which product earns the most per barrel.",
      "Built a Python pipeline that turns 93 months of EIA spot prices into crack spreads, the Brent–WTI spread and 5-year averages.",
      "Crude Market Review: Brent hit $114.2/bbl in Sep 2026, with the Brent–WTI spread at 3.5x its historical average.",
      "Refining Margin Monitor: the 3-2-1 crack is 80.9% above its 5-year norm, and diesel earns 3.1x more than gasoline.",
    ],
    tech: ["Python", "Pandas", "Excel", "Power BI"],
    images: [
      "images/projects/oil-1.webp",
      "images/projects/oil-2.webp",
      "images/projects/oil-demo.mp4",
    ],
    links: [
      {
        label: "Full Project",
        url: "https://drive.google.com/drive/folders/1EbcWEg7IwzJSbne_AzbahuGv8J8iicsn?usp=sharing",
      },
      {
        label: "Data Source (EIA)",
        url: "https://www.eia.gov/petroleum/prices/table.php?show_by=12_series&period=M&table_key=PET_PRI_SPT_S1_M",
      },
    ],
  },
  {
    title: "KAI Access Sentiment Analysis",
    tagline:
      "An end-to-end pipeline that turns 10,000 raw app reviews into an executive sentiment dashboard.",
    category: "Data Analytics",
    context: "Personal Mini Project",
    date: "2026",
    points: [
      "Cleaned 10,000 Access by KAI reviews in Python: missing values, timestamp formatting, and regex sanitizing of URLs, emojis and punctuation.",
      "Built rule-based sentiment labeling and keyword mapping that sorts free-text complaints into Booking, Login, Payment and App Performance issues.",
      "Found 57.53% negative sentiment, with Booking (2,175) and Login (1,407) as the top pain points, and showed version 6.11.2 reversed the negative trend.",
      "Designed the final dashboard in Figma with a semantic color palette (teal for positive, rose for negative, slate for neutral).",
    ],
    tech: ["Python", "Pandas", "Regex", "Tableau", "Figma"],
    images: [
      "images/projects/kai-dashboard.png",
      "images/projects/kai-cover.jpg",
    ],
    links: [
      {
        label: "Dataset",
        url: "https://www.kaggle.com/datasets/oktasn/data-review-kai-access",
      },
    ],
  },
  {
    title: "TEDxUniversitasAirlangga Website",
    tagline: "The official event website, built page by page from design handoff to deployment.",
    category: "Web Development",
    context: "TEDxUniversitasAirlangga",
    date: "2025",
    points: [
      "Developed and launched 4 key pages for the official website using Next.js and a RESTful API.",
      "Implemented a modern, responsive interface with Tailwind CSS.",
      "Translated design mockups into a functional, visually consistent web interface with the design and content teams.",
    ],
    tech: ["Next.js", "Tailwind CSS", "REST API"],
    images: [
      "images/projects/tedx-1.webp",
      "images/projects/tedx-2.webp",
      "images/projects/tedx-4.webp",
      "images/projects/tedx-5.webp",
    ],
    links: [], // repo is private
  },
  {
    title: "Faculty of Pharmacy UNAIR Website Redesign",
    tagline: "An end-to-end revamp of the faculty website and its study program portals, from Figma prototype to Laravel front end.",
    category: "UI/UX",
    context: "Internship, Faculty of Pharmacy UNAIR",
    date: "2026",
    points: [
      "Revamped the main faculty website and 4 study program portals (Bachelor's, Master's and Doctoral) in a 3-person team.",
      "Designed UI/UX wireframes and interactive prototypes in Figma to modernize the portal's look and user journey.",
      "Built the front end from scratch with Laravel and Tailwind CSS, turning high-fidelity designs into responsive pages.",
    ],
    tech: ["Figma", "Laravel", "Tailwind CSS"],
    images: ["images/projects/figma-farmasi.webp"],
    links: [
      {
        label: "Figma",
        url: "https://www.figma.com/design/E6Brz1jt6NjkfyHo70sf62/PKL?node-id=0-1",
      },
    ],
  },
  {
    title: "Student Academic Priority Dashboard",
    tagline: "Which faculties need attention first? A Looker Studio dashboard built on university student data.",
    category: "Data Analytics",
    context: "Data Analyst Bootcamp, Satu Data UNAIR",
    date: "",
    points: [
      "Analyzed a student dataset provided by Satu Data UNAIR as a bootcamp case study.",
      "Compared faculties on indicators such as GPA and late graduation to identify which ones should be prioritized for intervention.",
      "Built an interactive Looker Studio dashboard to present the comparison and the priority ranking.",
    ],
    tech: ["Looker Studio", "Google Sheets"],
    images: ["images/projects/looker-1.webp", "images/projects/looker-2.webp"],
    links: [
      {
        label: "View Dashboard",
        url: "https://datastudio.google.com/reporting/99ed1a5c-b574-47c1-b1cd-d9d47357d44d",
      },
    ],
  },
  {
    title: "SmartHolt",
    tagline: "An n8n automation integrated with a Telegram bot that helps farmers and growers manage plant care and watering.",
    category: "Web Development",
    context: "Information Systems & Technology Innovation (ISIT) Course",
    date: "",
    points: [
      "Built an automation workflow in n8n connected to a Telegram bot, so farmers can handle plant care and watering from a chat.",
      "Aimed at making plant handling and watering more effective for farmers and home growers.",
      "Designed the companion app interface in Figma.",
    ],
    tech: ["n8n", "Telegram Bot", "Figma"],
    images: [
      "images/projects/smartholt-1.webp",
      "images/projects/smartholt-2.webp",
      "images/projects/smartholt-3.webp",
      "images/projects/smartholt-4.webp",
      "images/projects/smartholt-5.webp",
      "images/projects/smartholt-6.webp",
      "images/projects/smartholt-telegrambot.webp",
    ],
    links: [
      {
        label: "Figma",
        url: "https://www.figma.com/design/mXudOCyz5dvvfIDRicYCnl/Smartholt?node-id=0-1",
      },
    ],
  },
  {
    title: "CERDAS",
    tagline:
      "Cerita Rakyat Digital untuk Anak: a gamified web app that builds children's digital literacy through Indonesian folk tales and poems.",
    category: "Web Development",
    context: "LIDM (Lomba Inovasi Digital Mahasiswa)",
    date: "",
    points: [
      "Interactive reading of folk tales and poems, kept engaging with XP, levels, a timer and page locking for focus.",
      "Story Maker word-arranging puzzles and a Story Telling mode where children read aloud to friends to earn XP.",
      "Progress monitoring for community reading-center (TBM) volunteers, and offline access as a Progressive Web App.",
    ],
    tech: ["Next.js", "Supabase", "PWA"],
    images: [
      "images/projects/cerdas-1.webp",
      "images/projects/cerdas-2.webp",
      "images/projects/cerdas-3.webp",
      "images/projects/cerdas-4.webp",
    ],
    links: [{ label: "Live Demo", url: "https://cerdas-silk.vercel.app" }],
  },
  {
    title: "Skillaby",
    tagline: "Extracts the skills a course teaches straight from its syllabus, using TF-IDF.",
    category: "Data Analytics",
    context: "Agile Software Development Practicum (PPL)",
    date: "2025",
    points: [
      "Users upload a syllabus (PDF or DOCX) and get back a ranked list of the skills it teaches.",
      "Each extracted skill is shown next to the source sentence it came from, highlighted for traceability.",
      "Results can be downloaded as a PDF, and each skill links to recommended online courses.",
    ],
    tech: ["Python", "TF-IDF", "NLP"],
    images: [
      "images/projects/skillaby-1.webp",
      "images/projects/skillaby-2.webp",
      "images/projects/skillaby-3.webp",
      "images/projects/skillaby-4.webp",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AgileSoftDev-2025/course-syllabus-skill-extraction",
      },
    ],
  },
  {
    title: "AgriSense",
    tagline: "An ESP32-based smart irrigation prototype that waters plants automatically based on sensor readings.",
    category: "IoT",
    context: "IS Project Management Course",
    date: "2025",
    points: [
      "Programmed an ESP32 to read a water-level sensor and switch a relay-driven pump on and off at calibrated thresholds.",
      "Added a cooldown timer so the pump doesn't rapidly toggle, with serial logging for monitoring and debugging.",
    ],
    tech: ["ESP32", "Arduino (C++)", "Sensors & Relay"],
    images: ["images/projects/agrisense-1.webp"],
    links: [],
  },
  {
    title: "BodyTrackr",
    tagline: "A health-tracking web app for logging daily meals and workouts and reviewing progress over time.",
    category: "Web Development",
    context: "Web Programming Project",
    date: "2025",
    points: [
      "Built daily food-intake and exercise logging, with a history view of past entries.",
      "Implemented user registration, login and profile settings, plus a separate admin dashboard.",
      "Designed responsive Blade views styled with Tailwind CSS and Alpine.js interactions.",
    ],
    tech: ["Laravel 12", "PHP", "Firebase", "Tailwind CSS", "Alpine.js", "Vite"],
    images: ["images/projects/bodytrackr-1.webp"],
    links: [],
  },
];

/* ---------------- EXPERIENCE ---------------- */

export type Experience = {
  org: string;
  role: string;
  date: string;
  location: string;
  points: string[];
  logo?: string; // optional: "images/logos/xxx.png"
};

export const workExperience: Experience[] = [
  {
    org: "Faculty of Pharmacy, Universitas Airlangga",
    role: "Front-End Developer Intern",
    date: "Jan 2026 – Apr 2026",
    location: "Surabaya, Indonesia",
    logo: "images/logos/unair.png",
    points: [
      "Revamped the main faculty website and 4 study program portals in a 3-person team.",
      "Designed wireframes and prototypes in Figma, then built the front end from scratch with Laravel and Tailwind CSS.",
    ],
  },
  {
    org: "CakapBerbicara.id",
    logo: "images/logos/cakapberbicara.png",
    role: "Customer Relationship Management Intern",
    date: "Sep 2025 – Mar 2026",
    location: "Surabaya, Indonesia",
    points: [
      "Handle client communications 2 days a week, keeping 10+ clients engaged weekly.",
      "Propose 2 promotional campaign ideas per month to lift client satisfaction and brand visibility.",
    ],
  },
  {
    org: "TEDxUniversitasAirlangga",
    logo: "images/logos/tedx.png",
    role: "Front-End Developer",
    date: "Jun 2025 – Nov 2025",
    location: "Surabaya, Indonesia",
    points: [
      "Shipped 4 key pages of the official website with Next.js, Tailwind CSS and a RESTful API.",
      "Owned each page end to end, from design handoff to deployment and maintenance.",
    ],
  },
  {
    org: "12Clean Shoe Laundry",
    logo: "images/logos/12clean.png",
    role: "Small Business Owner",
    date: "Mar 2024 – Feb 2025",
    location: "Surabaya, Indonesia",
    points: [
      "Ran digital marketing end to end, from social content to paid ad campaigns.",
      "Tracked all revenue and expenses independently to keep the business profitable.",
      "Served 50+ clients with a 98% customer satisfaction rating.",
    ],
  },
];

export const leadership: Experience[] = [
  {
    org: "BBK 7 International 2026, Universiti Teknologi Malaysia",
    role: "Community Service Participant & Event MC",
    date: "Dec 2025 – Feb 2026",
    location: "Johor, Malaysia",
    logo: "images/logos/bbk.png",
    points: [
      "Helped run an awareness event for Kampung Tanjung Langsat, focused on promoting the village's local cuisine.",
      "Hosted the event as opening and closing MC.",
    ],
  },
  {
    org: "Mark-Up",
    logo: "images/logos/markup.png",
    role: "Director of People Development",
    date: "Jan 2026 – Present",
    location: "Surabaya, Indonesia",
    points: [
      "Lead 3 staff with individual KPIs and performance monitoring.",
      "Built a growth-tracking database of performance metrics, surveys and progress reports for 30+ members.",
    ],
  },
  {
    org: "Digistar Club by Telkom Indonesia, UNAIR Chapter",
    logo: "images/logos/digistar.png",
    role: "Staff of Human Capital",
    date: "Nov 2025 – Present",
    location: "Surabaya, Indonesia",
    points: [
      "Plan and run bonding and internal engagement activities aligned with the club's culture.",
    ],
  },
  {
    org: "HIMSI UNAIR (Information Systems Student Association)",
    logo: "images/logos/himsi.png",
    role: "Head of Personalia Division",
    date: "Mar 2025 – Dec 2025",
    location: "Surabaya, Indonesia",
    points: [
      "Oversaw 6 programs reaching 60+ members, all completed on schedule.",
      "Mentored a team of 3 staff. Previously Staff of Personalia (Aug 2023 – Dec 2024).",
    ],
  },
  {
    org: "Information System Airlangga Competition (ISAC)",
    logo: "images/logos/isac.png",
    role: "Expert Staff, Public Relations & Licensing",
    date: "May 2025",
    location: "Surabaya, Indonesia",
    points: [
      "Led a 9-person team running nationwide outreach to 50+ high schools across 20+ provinces.",
      "Directed 5+ campaign contents averaging 1,000+ views each.",
    ],
  },
  {
    org: "POINTER HIMSI UNAIR",
    logo: "images/logos/pointer.png",
    role: "Expert Staff, Group Companion",
    date: "Jun – Sep 2025",
    location: "Surabaya, Indonesia",
    points: [
      "Supervised 10 student mentors guiding 100+ new students, and ran 5+ mentor training sessions.",
    ],
  },
];

/* ---------------- ACHIEVEMENTS ---------------- */

export type Achievement = {
  rank: string;
  event: string;
  date: string;
  title: string; // the solution / case name
  description: string;
  team: string;
  deckUrl: string;
  images?: string[];
  highlight?: boolean;
};

export const achievements: Achievement[] = [
  {
    rank: "2nd Place",
    event: "Mini Business Case Competition (MBCC) UNAIR",
    date: "2026",
    title: "The G.A.S.S. Blueprint",
    description:
      "A Get, Activate, Stay, Scale growth engine for Tempat Tumbuh, a financial-education platform: a #FirstPaycheck campaign, a self-service onboarding hub, and a B2B2C employee-wellness program.",
    team: "Team Pelari Kalcer",
    deckUrl: "https://drive.google.com/file/d/1xeCksfwIX1Zkdolr7uT7gwkm38FP3_HO/view",
    images: ["images/achievements/mbcc-1.webp", "images/achievements/mbcc-2.webp", "images/achievements/mbcc-3.webp"],
    highlight: true,
  },
  {
    rank: "Top 6",
    event: "Mini Case Competition, Dreamcareer × CRITENOUS",
    date: "2026",
    title: "O.N.E.: One Voice, Newsroom, Ecosystem",
    description:
      "Consolidated 35 brand assets under one positioning and designed a user-generated 'Newsroom' distribution loop for a youth education media brand.",
    team: "Team Pelari Kalcer",
    deckUrl: "https://drive.google.com/file/d/14RI7wepp0zPwbIMXJ3y5XDAmFIvpiScO/view",
    images: ["images/achievements/mccdc6-1.webp", "images/achievements/mccdc6-2.webp", "images/achievements/mccdc6-3.webp"],
  },
  {
    rank: "Top 8",
    event: "Mini Case Competition Career Insight (MCCCI)",
    date: "2026",
    title: "BLUE LOOP",
    description:
      "Redesigned Blibli's affiliate program into a self-reinforcing growth loop, shifting who funds creator rewards instead of raising platform commissions, with an evidence-gated rollout roadmap.",
    team: "Team Kalo Menang AC Nyala 24 Jam",
    deckUrl: "https://drive.google.com/file/d/1IFCnUy1xwqiQMPT8JUIUcA1hTaPstiHf/view",
    images: ["images/achievements/mccci-1.webp", "images/achievements/mccci-2.webp", "images/achievements/mccci-3.webp"],
  },
  {
    rank: "Top 10",
    event: "Mini Case Competition, UI Innovation War",
    date: "2026",
    title: "D.E.S.A.: Decentralized Energy for Sustainable Agriculture",
    description:
      "A cooperative SPV and ESCO financing scheme for a 350 kWp village solar plant anchored by a rice mill, staying bankable at 1.65× DSCR after subsidies end.",
    team: "Team Debutant",
    deckUrl: "https://drive.google.com/file/d/1VWwekcgiQxzEE5GCX8qGhqqDVrcJUxZR/view",
    images: ["images/achievements/mccuiiw-1.webp", "images/achievements/mccuiiw-2.webp", "images/achievements/mccuiiw-3.webp"],
  },
  {
    rank: "Finalist",
    event: "BMC Muslimpreneur, Telkom University Bandung",
    date: "2025",
    title: "",
    description: "",
    team: "",
    deckUrl: "",
  },
  {
    rank: "Semifinalist",
    event: "GBECC Universitas Indonesia",
    date: "",
    title: "",
    description: "",
    team: "",
    deckUrl: "",
  },
  {
    rank: "Semifinalist",
    event: "AECTION IPB University",
    date: "",
    title: "",
    description: "",
    team: "",
    deckUrl: "",
  },
];

/* ---------------- CERTIFICATIONS ---------------- */

export const certifications = [
  { name: "English Language Proficiency Test (ELPT): 573", issuer: "Universitas Airlangga", url: "" },
  { name: "EF SET English Certificate: 74/100 (C2 Proficient)", issuer: "EF SET", url: "" },
  { name: "Data Analysis with Google Looker Studio", issuer: "Ioda Academy · 2025", url: "" },
  { name: "Data Classification and Summarization Using IBM Granite", issuer: "IBM · 2025", url: "" },
  { name: "Digital Analytic and Marketing Certification", issuer: "RevoU · 2025", url: "" },
  { name: "NDG Linux Unhatched", issuer: "Cisco Networking Academy", url: "" },
];

/* ---------------- SKILLS ---------------- */

export const skillGroups = [
  {
    title: "Data Analytics",
    items: ["Python", "SQL", "Power BI", "Tableau", "Looker Studio", "Excel", "Google Sheets"],
  },
  {
    title: "Web Development",
    items: ["Next.js", "TypeScript", "Tailwind CSS", "Laravel", "PHP", "REST API"],
  },
  {
    title: "Design & Tools",
    items: ["Figma", "Canva", "CapCut", "Google Workspace", "Microsoft Office"],
  },
  {
    title: "Soft Skills",
    items: [
      "Leadership",
      "Project Management",
      "Public Speaking",
      "Problem-Solving",
      "Strategic Thinking",
      "Collaboration",
    ],
  },
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Proficient (ELPT 573 · EF SET C2)" },
];

/* ---------------- EDUCATION ---------------- */

export const education = [
  {
    school: "Universitas Airlangga",
    logo: "images/logos/unair.png",
    degree: "B.S. Information Systems",
    date: "Aug 2023 – Jul 2027 (expected)",
    location: "Surabaya, Indonesia",
    detail: "GPA 3.48/4.00 (126 credits, 6 semesters)",
    coursework: [
      "Database Systems",
      "Web Programming",
      "Business Intelligence & Data Warehousing",
      "Data Mining",
      "Statistics for Business",
      "Systems Analysis & Design",
      "Human-Computer Interaction",
      "IS Project Management",
      "Business Process Management",
    ],
  },
  {
    school: "SMA Negeri 98 Jakarta",
    logo: "images/logos/sman98.png",
    degree: "Mathematics & Natural Sciences",
    date: "2020 – 2023",
    location: "Jakarta, Indonesia",
    detail: "",
    coursework: [],
  },
];
