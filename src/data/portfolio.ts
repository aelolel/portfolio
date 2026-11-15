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
  photo: "images/rafael.png", // TODO: replace with a high-res transparent PNG
  cvUrl: "", // TODO: put your CV in /public (e.g. "cv-rafael.pdf") and write the file name here
  heroSkills: [
    "SQL",
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
  { value: "9", suffix: "", label: "Web & data projects" },
  { value: "7", suffix: "", label: "Case competitions placed" },
  { value: "573", suffix: "", label: "ELPT score (UNAIR)" },
];

/* ---------------- PROJECTS ---------------- */

export type ProjectCategory = "Web Development" | "Data Analytics" | "UI/UX";

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
];

export const projects: Project[] = [
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
    images: [], // TODO: add screenshots
    links: [
      {
        label: "GitHub",
        url: "https://github.com/webdevtedxuniversitasairlangga2025/tedxuniversitasairlangga2025",
      },
    ],
  },
  {
    title: "Faculty of Pharmacy UNAIR Website Redesign",
    tagline: "A full redesign of the faculty website, from UI design to front-end slicing.",
    category: "UI/UX",
    context: "Internship, Faculty of Pharmacy UNAIR",
    date: "",
    points: [
      "Redesigned the faculty website's interface in Figma.",
      "Sliced the new design into a working, responsive front end.",
    ],
    tech: ["Figma"], // TODO: add the stack used for slicing
    images: [],
    links: [
      {
        label: "Figma",
        url: "https://www.figma.com/design/E6Brz1jt6NjkfyHo70sf62/PKL?node-id=0-1",
      },
    ],
  },
  {
    title: "Looker Studio Dashboard",
    tagline: "",
    category: "Data Analytics",
    context: "Bootcamp Project",
    date: "",
    points: [],
    tech: ["Looker Studio"],
    images: [],
    links: [
      {
        label: "View Dashboard",
        url: "https://datastudio.google.com/reporting/99ed1a5c-b574-47c1-b1cd-d9d47357d44d",
      },
    ],
  },
  {
    title: "SmartHolt",
    tagline: "",
    category: "UI/UX",
    context: "Information Systems & Technology Innovation (ISIT) Course",
    date: "",
    points: [],
    tech: ["Figma"],
    images: [],
    links: [
      {
        label: "Figma",
        url: "https://www.figma.com/design/mXudOCyz5dvvfIDRicYCnl/Smartholt?node-id=0-1",
      },
    ],
  },
  {
    title: "CERDAS",
    tagline: "",
    category: "Web Development",
    context: "LIDM (Lomba Inovasi Digital Mahasiswa)",
    date: "",
    points: [],
    tech: [],
    images: [],
    links: [{ label: "GitHub", url: "https://github.com/mferdian/CERDAS" }],
  },
  {
    title: "Skillaby",
    tagline: "Extracts the skills a course teaches straight from its syllabus, using TF-IDF.",
    category: "Data Analytics",
    context: "Agile Software Development Practicum (PPL)",
    date: "2025",
    points: [],
    tech: ["Python", "TF-IDF"],
    images: [],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AgileSoftDev-2025/course-syllabus-skill-extraction",
      },
    ],
  },
  {
    title: "AgriSense",
    tagline: "",
    category: "UI/UX",
    context: "IS Project Management Course",
    date: "",
    points: [],
    tech: [],
    images: [],
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
    tech: ["Laravel 12", "PHP", "Tailwind CSS", "Alpine.js", "Vite"],
    images: [],
    links: [{ label: "GitHub", url: "https://github.com/aelolel/BodyTrackr" }],
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
    role: "Web Developer Intern",
    date: "", // TODO
    location: "Surabaya, Indonesia",
    logo: "images/logos/unair.png",
    points: [
      "Redesigned and rebuilt the faculty website, covering both UI design and front-end slicing.",
    ],
  },
  {
    org: "CakapBerbicara.id",
    role: "Customer Relationship Management Intern",
    date: "Sep 2025 – Present",
    location: "Surabaya, Indonesia",
    points: [
      "Handle client communications 2 days a week, keeping 10+ clients engaged weekly.",
      "Propose 2 promotional campaign ideas per month to lift client satisfaction and brand visibility.",
    ],
  },
  {
    org: "TEDxUniversitasAirlangga",
    role: "Frontend Developer",
    date: "Jun 2025",
    location: "Surabaya, Indonesia",
    points: [
      "Shipped 4 key pages of the official website with Next.js, Tailwind CSS and a RESTful API.",
      "Owned each page end to end, from design handoff to deployment and maintenance.",
    ],
  },
  {
    org: "12Clean Shoe Laundry",
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
    org: "Mark-Up",
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
    role: "Staff of Human Capital",
    date: "Nov 2025 – Present",
    location: "Surabaya, Indonesia",
    points: [
      "Plan and run bonding and internal engagement activities aligned with the club's culture.",
    ],
  },
  {
    org: "HIMSI UNAIR (Information Systems Student Association)",
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
  highlight?: boolean;
};

export const achievements: Achievement[] = [
  {
    rank: "2nd Place",
    event: "Mini Business Case Competition (MBCC) UNAIR",
    date: "",
    title: "The G.A.S.S. Blueprint",
    description:
      "A Get, Activate, Stay, Scale growth engine for Tempat Tumbuh, a financial-education platform: a #FirstPaycheck campaign, a self-service onboarding hub, and a B2B2C employee-wellness program.",
    team: "Team Pelari Kalcer",
    deckUrl: "https://drive.google.com/file/d/1xeCksfwIX1Zkdolr7uT7gwkm38FP3_HO/view",
    highlight: true,
  },
  {
    rank: "Top 6",
    event: "Mini Case Competition, Dreamcareer × CRITENOUS",
    date: "",
    title: "O.N.E.: One Voice, Newsroom, Ecosystem",
    description:
      "Consolidated 35 brand assets under one positioning and designed a user-generated 'Newsroom' distribution loop for a youth education media brand.",
    team: "Team Pelari Kalcer",
    deckUrl: "https://drive.google.com/file/d/14RI7wepp0zPwbIMXJ3y5XDAmFIvpiScO/view",
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
  },
  {
    rank: "Top 10",
    event: "Mini Case Competition, UI Innovation War",
    date: "",
    title: "D.E.S.A.: Decentralized Energy for Sustainable Agriculture",
    description:
      "A cooperative SPV and ESCO financing scheme for a 350 kWp village solar plant anchored by a rice mill, staying bankable at 1.65× DSCR after subsidies end.",
    team: "Team Debutant",
    deckUrl: "https://drive.google.com/file/d/1VWwekcgiQxzEE5GCX8qGhqqDVrcJUxZR/view",
  },
  {
    rank: "Finalist",
    event: "BMC Muslimpreneur, Telkom University Bandung",
    date: "",
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
  { name: "Data Analysis with Google Looker Studio", issuer: "", url: "" },
  { name: "Data Classification and Summarization Using IBM Granite", issuer: "IBM", url: "" },
  { name: "Digital Analytic and Marketing Certification", issuer: "", url: "" },
  { name: "NDG Linux Unhatched", issuer: "Cisco Networking Academy", url: "" },
];

/* ---------------- SKILLS ---------------- */

export const skillGroups = [
  {
    title: "Data Analytics",
    items: ["Python", "SQL", "Tableau", "Looker Studio", "Excel", "Google Sheets"],
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
    date: "2023 – 2027",
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
    logo: "",
    degree: "Mathematics & Natural Sciences",
    date: "2020 – 2023",
    location: "Jakarta, Indonesia",
    detail: "",
    coursework: [],
  },
];
