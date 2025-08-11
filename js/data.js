const portfolioData = {
  name: "Alex Johnson",
  title: "CS Student · Full‑Stack Developer",
  about:
    "I’m a Computer Science student passionate about building accessible, performant web apps and ML‑powered tools. Looking for SWE internships and junior roles.",
  avatarUrl: "", // leave empty to hide avatar - no demo SVG will be shown
  resumeUrl: "", // optional

  social: {
    github: "https://github.com/alex-johnson",
    linkedin: "https://www.linkedin.com/in/alex-johnson/",
    website: "https://alex.dev",
    twitter: "",
  },

  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "Python",
    "Flask",
    "PostgreSQL",
    "MongoDB",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Git",
    "Docker",
  ],

  projects: [
    {
      title: "Campus Navigator",
      description:
        "Progressive web app for indoor/outdoor campus navigation with offline maps and real‑time events.",
      tags: ["TypeScript", "React", "Mapbox", "Workbox"],
      link: "https://example.com/campus-navigator",
      repo: "https://github.com/alex-johnson/campus-navigator",
      image: "",
    },
    {
      title: "AlgoPlayground",
      description:
        "Interactive visualizations for 25+ algorithms with adjustable speeds and step‑through debugging.",
      tags: ["JavaScript", "D3.js"],
      link: "https://example.com/algoplayground",
      repo: "https://github.com/alex-johnson/algoplayground",
      image: "",
    },
    {
      title: "MealMate API",
      description:
        "REST API that suggests recipes from pantry items; includes auth, rate limiting, and caching.",
      tags: ["Node.js", "Express", "Redis", "PostgreSQL"],
      link: "https://example.com/mealmate",
      repo: "https://github.com/alex-johnson/mealmate-api",
      image: "",
    },
    {
      title: "Portfolio Template",
      description:
        "Responsive, data‑driven portfolio template optimized for GitHub Pages.",
      tags: ["HTML", "CSS", "Vanilla JS"],
      link: "https://example.com/portfolio-template",
      repo: "https://github.com/alex-johnson/portfolio-template",
      image: "",
    },
  ],

  // For students without experience, either leave this empty array or remove it entirely
  // The experience section will be automatically hidden
  experience: [
    // Uncomment the below if you have work experience:
    // {
    //   role: "Software Engineering Intern",
    //   company: "CloudScale",
    //   url: "https://cloudscale.example.com",
    //   start: "Jun 2024",
    //   end: "Aug 2024",
    //   location: "Remote",
    //   description:
    //     "Built internal dashboards and optimized APIs for analytics pipelines.",
    //   highlights: [
    //     "Reduced query latency by 38% via caching and indexes",
    //     "Shipped role‑based access control across services",
    //   ],
    // },
    // {
    //   role: "Undergrad Research Assistant",
    //   company: "State University AI Lab",
    //   url: "https://cs.example.edu/ai-lab",
    //   start: "Jan 2024",
    //   end: "May 2024",
    //   location: "On‑campus",
    //   description:
    //     "Implemented preprocessing and training scripts for a small NLP project.",
    //   highlights: [
    //     "Improved F1 score by 6% with better tokenization",
    //     "Automated experiment tracking with Weights & Biases",
    //   ],
    // },
  ],

  education: [
    {
      school: "State University",
      degree: "B.Sc. Computer Science",
      start: "2021",
      end: "2025",
      location: "City, Country",
      gpa: "3.8/4.0",
      highlights: ["Dean’s List (4x)", "ACM officer", "Hackathon winner"],
    },
  ],

  contact: {
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567", // optional - leave empty to hide
    linkedin: "https://www.linkedin.com/in/alex-johnson/",
    github: "https://github.com/alex-johnson",
  },
};

export default portfolioData;
