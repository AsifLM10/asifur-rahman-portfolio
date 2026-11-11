export const navItems = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/AsifLM10", icon: "code" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/asifur-rahman-74247213b", icon: "briefcase" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=m0fdm2kAAAAJ&hl=en", icon: "book" },
] as const;

export const skillGroups = [
  {
    title: "Programming Languages",
    items: [
      "C++",
      "Java",
      "Python",
      "C#",
      "JavaScript",
      "TypeScript",
      "PHP",
      "SQL",
      "R",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "AI, Machine Learning & Data Science",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Evaluation",
      "Explainable AI",
      "Causal Analysis",
      "Counterfactual Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "Libraries and Frameworks",
    items: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "SHAP",
      "EconML",
      "NestJS",
      "Next.js",
      "TypeORM",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Database",
    items: [
      "REST API Development",
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "SQL Server",
      "JWT Authentication",
      "Swagger / OpenAPI",
      "MVC Architecture",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git and GitHub",
      "Postman",
      "VS Code",
      "Visual Studio",
      "Google Colab",
      "Figma",
      "Trello",
      "Overleaf",
      "Cisco Packet Tracer",
      "VirtualBox",
    ],
  },
] as const;

export const projects = [
  {
    title: "DineSpace",
    category: "Team Collaboration Project",
    description:
      "A collaborative software engineering project involving a multi-restaurant management and online ordering platform. The repository reflects the team project work and demonstrates a real-world product mindset spanning business workflows and user-facing experiences.",
    tags: ["TypeScript", "NestJS", "PostgreSQL", "TypeORM", "JWT", "Swagger"],
    repo: "https://github.com/mubin25-dodu/DineSpace",
    accent: "rose",
  },
  {
    title: "Item Rental Management System",
    category: "Academic Web Application",
    description:
      "A web-based rental management system built around MVC architecture for managing inventory, bookings, earnings, user profiles, and authentication in an academic setting.",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "SQL", "MVC"],
    repo: null,
    accent: "amber",
  },
  {
    title: "Jungle Ruins",
    category: "2D Game Development",
    description:
      "A 2D platformer built with C++ and OpenGL, featuring movement, gravity, hazards, collectibles, scoring, health, lives, and level progression within a compact gameplay loop.",
    tags: ["C++", "OpenGL", "GLUT"],
    repo: null,
    accent: "emerald",
  },
  {
    title: "Hospital Management System",
    category: "Desktop Application",
    description:
      "A Windows Forms based hospital management system supporting patient and doctor management, appointments, admissions, prescriptions, medicines, facilities, ambulances, complaints, and payments.",
    tags: ["C#", ".NET Framework", "Windows Forms", "SQL Server", "ADO.NET"],
    repo: null,
    accent: "cyan",
  },
  {
    title: "RedLink",
    category: "OOP Application",
    description:
      "A Java-based blood donation management application focused on donor registration, blood group searches, and donation requests while applying core object-oriented principles such as inheritance and polymorphism.",
    tags: ["Java", "Object-Oriented Programming"],
    repo: null,
    accent: "violet",
  },
] as const;

export const publishedResearch = [
  {
    title:
      "Comparative Evaluation of Deep Learning Architectures for Underwater Semantic Segmentation Using the SUIM Dataset",
    venue: "ICIICE 2026, IEEE",
    authorPosition: "First Author",
    status: "Published",
    focus: "Comparative evaluation of deep learning architectures for underwater semantic segmentation.",
  },
];

export const acceptedResearch = [
  {
    title:
      "A Secure OAuth-Based Social Media Data Extractor Chatbot for Enhancing Cybersecurity Education",
    venue:
      "IEEE 2nd International Conference on AI and Emerging Technology for Sustainable Future (ICAISF-2026), University of Catania, Italy",
    authorPosition: "Fourth Author",
    status: "Accepted",
    focus: "OAuth-based social media data extraction and cybersecurity education.",
  },
  {
    title:
      "Design and Realization of a Moveable ECG Device Utilizing STM32F1 ARM Microcontroller",
    venue: "IEEE OMLET 2026",
    authorPosition: "Third Author",
    status: "Accepted",
    focus:
      "Portable cardiac monitoring using an STM32F1 microcontroller, AD8232 ECG sensor, MAX30102 heart-rate sensor, and OLED display.",
  },
];

export const ongoingResearch = [
  {
    title:
      "A Division-Sensitive Machine Learning Framework for Climate-Based Crop Yield Prediction in Bangladesh",
    authorPosition: "Fourth Author",
    status: "Submitted",
    venue: undefined,
    focus:
      "Climate-based crop yield prediction in Bangladesh using machine learning.",
  },
  {
    title:
      "A Machine Learning and Causal Analysis Framework for Road Accident Severity Prediction Using Large-Scale Traffic Data from Bangladesh",
    authorPosition: "Second Author",
    status: "Research project",
    venue: undefined,
    focus:
      "Large-scale traffic data analysis, machine learning, and causal analysis for road accident severity prediction.",
  },
  {
    title:
      "Heart Attack Risk Stratification Using Clinically Inspired Derived Labeling and Supervised Learning",
    authorPosition: "Research",
    status: "Ongoing",
    venue: undefined,
    focus:
      "Machine learning-based heart attack risk stratification using clinically inspired derived labels.",
  },
] as const;

export const education = {
  school: "American International University-Bangladesh (AIUB)",
  degree: "Bachelor of Science in Computer Science and Engineering",
  major: "Information Systems",
  minor: "Software Engineering",
  expectedGraduation: "January 2027",
  cgpa: "3.83 / 4.00",
  recognition: ["Academic Scholarship", "Dean's Award"],
};

export const beyondCode = [
  {
    title: "Gaming",
    text: "Enjoys games for the problem-solving, strategy, and immersive design they offer.",
  },
  {
    title: "Technology",
    text: "Naturally curious about how systems work and how ideas become practical tools.",
  },
  {
    title: "Motorcycles",
    text: "Finds movement, focus, and perspective in riding through everyday routes and longer trips.",
  },
  {
    title: "Travel",
    text: "Interested in exploring new places and learning from the spaces, people, and ideas they hold.",
  },
  {
    title: "Teaching",
    text: "Enjoys helping students clarify difficult concepts and seeing the moment understanding clicks.",
  },
] as const;

export const contactMethods = [
  { label: "Email", value: "asifurr38@gmail.com", href: "mailto:asifurr38@gmail.com" },
  { label: "GitHub", value: "github.com/AsifLM10", href: "https://github.com/AsifLM10" },
  { label: "LinkedIn", value: "linkedin.com/in/asifur-rahman-74247213b", href: "https://www.linkedin.com/in/asifur-rahman-74247213b" },
  { label: "Google Scholar", value: "Scholar profile", href: "https://scholar.google.com/citations?user=m0fdm2kAAAAJ&hl=en" },
] as const;
