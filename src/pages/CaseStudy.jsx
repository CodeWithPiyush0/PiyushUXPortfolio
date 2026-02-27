import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { projectColorMap } from "../utils/projectColors";

const CaseStudy = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [slug]);

  // This would normally come from an API or database
  const caseStudies = {
    exaltride: {
      title: "ExaltRide",
      subtitle: "E-commerce Ecosystem & Mobile-First Redesign",
      year: "2026",
      role: "UI/UX Designer",
      duration: "Ongoing",
      platform: "Web, Vendor & Admin Panels",
      tools: [
        "Figma",
        "Auto Layout",
        "Design Systems",
        "Information Architecture",
        "Mobile UX",
      ],
      color: "cyan",
      overview:
        "ExaltRide is an early-stage car accessories platform. My work spans the entire ecosystem: from the internal management tools to a complete mobile-first consumer redesign.",
      problem:
        'The startup needed a "brains of the operation" (Dashboard) to manage complex inventory while simultaneously requiring a consumer site that felt like a native iOS/Android app without the native development cost.',
      solution:
        "I adopted a modular design approach. First, I built the B2B infrastructure using a scalable Design System. Now, in Stage 3, I am applying PWA (Progressive Web App) principles to the storefront—using bottom-tab navigation and gesture-based UI to simulate a native app feel in the browser.",
      phases: [
        {
          title: "Admin Logic",
          desc: "Designed high-density data tables and verification workflows for platform security and oversight.",
        },
        {
          title: "Vendor UX",
          desc: 'Streamlined the "Add Product" flow for car accessories, using bulk-upload logic and variant-management systems.',
        },
        {
          title: "Mobile-First Storefront",
          desc: 'Redesigning the shopping experience with "thumb-zone" optimization and app-like transitions.',
        },
      ],
      results: [
        "Designed end-to-end Vendor Panel for inventory and order management",
        "Developed a comprehensive Admin Panel for platform oversight and control",
        "Leading the Stage 3 total redesign of the consumer website",
        'Architecting "App-in-Browser" UI patterns (Bottom Tabs, Gesture Navigation) to simulate a native mobile app experience',
      ],
      tags: ["B2B & B2C", "Dashboard Design", "Mobile-First", "E-commerce"],
    },
    frenley: {
      title: "Frenley",
      subtitle: "Social Connection & Premium Ecosystem",
      year: "2026",
      role: "UI/UX Designer",
      duration: "10 Days",
      platform: "Mobile App",
      tools: [
        "Figma",
        "Brand Kit Integration",
        "Design Sytems",
        "Interactive Prototyping",
      ],
      color: "orange",
      overview:
        "Originally started as a recruitment assignment for Eclipticon Pvt. Ltd., I expanded this project into a full product showcase. I designed the core social engagement screens to provide a holistic view of how the premium subscription flow integrates into the daily user journey.",
      problem:
        'A premium flow is only successful if it feels like a natural extension of the core app. I needed to design a free-to-paid bridge that maintained the "Frenley" brand voice—clean, warm, and trustworthy—across all touchpoints.',
      solution:
        'I architected a "Freemium" model where core social features (Swiping, Chatting) are free, while high-value insights (Who Liked You, Profile Boosts) are positioned as premium upgrades. This creates a clear value proposition for the user.',
      project_scope: [
        {
          title: "Phase 1: Recruitment Assignment",
          desc: 'Focused on the high-conversion subscription flow: Landing page, Plan selection with "Most Popular" highlighting, Secure Payment, and Success states.',
        },
        {
          title: "Phase 2: Portfolio Expansion",
          desc: 'Designed the core Onboarding flow, Home/Swipe interface, blurred "Likes" grid, and User Profile to demonstrate end-to-end product thinking.',
        },
      ],
      results: [
        "Successfully integrated a premium business model into a social user journey",
        "Developed a consistent design language using Nunito typography and a balanced #FF7A00 / #0075F2 palette",
        'Created strategic "Premium Triggers" in the Home and Profile sections to drive conversion',
        "Optimized the mobile interface for thumb-zone accessibility and intuitive navigation",
      ],
      tags: ["Mobile UI", "Social", "Dating", "Assignment"],
      figmaLink:
        "https://www.figma.com/design/caz72Q9IaJObwbHk8xsn9q/Frenley-Assignment",
    },
    onebanc: {
      title: "OneBanc UX Challenge",
      subtitle: "Premium Wealth Management Experience",
      year: "2026",
      role: "UI/UX Designer",
      duration: "1 week (Design Sprint)",
      platform: "Mobile",
      tools: ["Figma", "Auto Layout", "Components", "Prototyping"],
      color: "emerald",
      overview:
        "Completed as a high-stakes recruitment assignment, this project focused on defining a luxury visual language for a wealth management platform targeting high-net-worth individuals.",
      problem:
        'GMost fintech apps follow a generic "Neo-bank" aesthetic that fails to convey the trust and exclusivity required for premium wealth management',
      solution:
        'I executed a rapid 1-week sprint to redesign core high-impact screens: the Home Dashboard, AI-powered Insights, and Secure Vaults. I used a dark-emerald palette and sophisticated typography to establish a "Wealth Concierge" feel.',
      process: [
        {
          title: "Market Research",
          desc: "Analyzed luxury banking competitors to identify visual cues of exclusivity and security.",
        },
        {
          title: "System Architecture",
          desc: "Built an atomic design system with reusable components to ensure 100% consistency across the prototype.",
        },
        {
          title: "Visual Polish",
          desc: "Implemented an 8px grid system and subtle glassmorphism to enhance the premium depth of the UI.",
        },
      ],
      results: [
        "Created a high-fidelity prototype within a strict 1-week deadline",
        'Achieved a premium "luxury" aesthetic distinct from mass-market banking apps ',
        "Developed 20+ reusable components using Figma Auto Layout ",
        "Established a foundation for a scalable fintech design system ",
      ],
      tags: ["Industry Assignment", "Fintech", "Design System"],
      figmaLink:
        "https://www.figma.com/design/z9eATD3n4ZUNmz5IjEBsd3/OneBanc-UX-Assignment",
    },
    fintrack: {
      title: "FinTrack",
      subtitle: "Personal Finance Dashboard",
      year: "2025",
      role: "Product Designer & Developer",
      duration: "Personal Project (In Development)",
      platform: "Web (MERN)",
      tools: ["Figma", "React", "Node.js", "MongoDB", "Express"],
      color: "amber",
      overview:
        "FinTrack was born out of my own struggle to track expenses and understand my financial habits. I built this to transform manual, tedious expense logging into a visual, automated experience.",
      problem:
        "I found existing solutions either too complex or too manual, making it hard to maintain the habit of tracking money. I needed a tool that provided instant visual clarity with minimal data-entry friction.",
      solution:
        "I am building a centralized dashboard that uses interactive charts for immediate spending analysis. The project is currently in its Frontend-First phase, focusing on a high-fidelity user experience and data visualization logic while the MERN backend is being architected.",
      tech_highlight: [
        {
          title: "Frontend Architecture",
          desc: "Developed the core UI with React 19 and Tailwind CSS, featuring smooth state-driven animations via Framer Motion.",
        },
        {
          title: "UX Evolution",
          desc: "Currently refining the dashboard density and navigation based on direct recruiter feedback to meet industry standards.",
        },
        {
          title: "Backend Roadmap",
          desc: "Designing the MongoDB schema and RESTful API endpoints to handle complex transaction relationships and multi-account syncing.",
        },
      ],
      results: [
        "Translated a personal pain point into a high-fidelity interactive dashboard",
        "Engineered a comprehensive frontend feature set including transaction logs, budget progress, and goal tracking",
        "Currently iterating on UX based on industry professional feedback to ensure product-market fit",
        "Architecting a scalable MERN-stack foundation for future full-stack deployment",
      ],
      tags: ["Personal Project", "SaaS", "Full Stack", "Data Visualization"],
      figmaLink:
        "https://www.figma.com/design/kr1OZVLrmAlG4oQtK6D4wj/FinTrack?node-id=0-1&t=cCnBG1q0fu1o7xjc-1",
    },

    "investment-app": {
      title: "WealthUp",
      subtitle: "Gamified Investment Ecosystem",
      year: "2026",
      role: "Product Designer",
      duration: "48hr Assignment + Portfolio Expansion",
      platform: "Mobile (iOS/Android)",
      tools: ["Figma", "Prototyping", "Design Systems"],
      color: "emerald",
      overview:
        "Originally a 48-hour recruitment task, I expanded this project to explore how gamification and progressive disclosure can demystify complex financial markets for Gen-Z and Millennial investors.",
      problem:
        'Traditional brokerage apps are built for power users, overwhelming beginners with "information overload" and technical jargon that prevents them from making their first trade.',
      solution:
        'I designed a "Learning-First" trading experience. By breaking down the onboarding into bite-sized financial lessons and using gamified rewards, the app transforms the anxiety of investing into a rewarding habit-building journey.',
      expansion_phases: [
        {
          title: "Phase 1: The Core (Assignment)",
          desc: 'Simplified onboarding, basic line charts, and the primary "Buy/Sell" flow.',
        },
        {
          title: "Phase 2: Education Hub",
          desc: 'Integrated interactive "Learn-to-Earn" modules where users earn small stock credits for completing financial literacy quizzes.',
        },
        {
          title: "Phase 3: Social Trading",
          desc: 'Added a "Copy-Trade" feature allowing beginners to follow verified expert portfolios with transparency.',
        },
      ],
      results: [
        'Designed a high-fidelity interactive prototype with a "Premium-Dark" fintech aesthetic.',
        'Implemented "Progressive Disclosure" to hide complex data until the user is ready for it.',
        "Created a custom icon set and component library for rapid feature scaling.",
        'Optimized the "Thumb-Zone" for one-handed trading in high-mobility scenarios.',
      ],
      tags: ["Fintech", "Gamification", "Mobile App", "Assignment Expansion"],
    },
  };

  const project = caseStudies[slug];
  const colors = projectColorMap[project?.color] || projectColorMap.emerald;

  const dynamicSections = useMemo(() => {
    if (!project) {
      return null;
    }
    return (
      project.phases || project.process || project.expansion_phases || null
    );
  }, [project]);

  const nextProjectData = useMemo(() => {
    if (!project) {
      return null;
    }

    const slugs = Object.keys(caseStudies);
    const currentIndex = slugs.indexOf(slug);
    const nextIndex = (currentIndex + 1) % slugs.length;

    return {
      project: caseStudies[slugs[nextIndex]],
      slug: slugs[nextIndex],
    };
  }, [slug, project]);

  if (!project) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">
            Project Not Found
          </h1>
          <Link to="/work" className="btn-primary inline-block">
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-36 pb-24">
      <div className="container-custom px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Back Button */}
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-sm text-emerald-400 hover:gap-3 transition-all mb-8"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            BACK TO WORK
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`font-mono text-xs px-3 py-1 border ${colors.badge}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="font-mono text-2xl text-ash mb-12">
            {project.subtitle}
          </p>

          {/* Project Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 glass border border-zinc/50 mb-20">
            <Meta label="ROLE" value={project.role} />
            <Meta label="DURATION" value={project.duration} />
            <Meta label="PLATFORM" value={project.platform} />
            <Meta label="YEAR" value={project.year} />
          </div>
        </motion.div>

        {/* Overview Section */}
        <section className="mb-32 max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-8">Overview</h2>
          <p className="font-mono text-xl text-smoke leading-relaxed">
            {project.overview}
          </p>
        </section>

        {/* Problem/Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <GlassBlock title="THE PROBLEM" color="red">
            {project.problem}
          </GlassBlock>

          <GlassBlock title="THE SOLUTION" color="emerald">
            {project.solution}
          </GlassBlock>
        </div>

        {dynamicSections && (
          <section className="mb-32">
            <h2 className="font-display text-4xl font-bold mb-12">
              {project.phases
                ? "Project Ecosystem Roadmap"
                : project.process
                  ? "Design Process"
                  : "Scaling & Expansion"}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {dynamicSections.map((item, i) => (
                <div
                  key={i}
                  className="glass p-8 border border-white/5 hover:border-emerald-400/30 transition-all"
                >
                  <span className="font-mono text-emerald-400 text-sm mb-4 block">
                    0{i + 1}
                  </span>

                  <h4 className="font-display text-2xl font-bold mb-4">
                    {item.title}
                  </h4>
                  <p className="font-mono text-sm text-ash leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Results Section */}
        <section className="mb-32">
          <h2 className="font-display text-4xl font-bold mb-12">
            Results & Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.results.map((res, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 glass border border-zinc/50"
              >
                <div
                  className={`w-8 h-8 border-2 border-emerald-400 flex items-center justify-center shrink-0`}
                >
                  <svg
                    className="w-4 h-4 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-mono text-sm text-smoke">{res}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Figma CTA */}
        {project.figmaLink && (
          <a
            href={project.figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-12 glass border border-emerald-400/50 hover:border-emerald-400 transition-all group mb-32"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-mono text-emerald-400 font-semibold mb-2">
                  VIEW IN FIGMA
                </h3>
                <p className="font-mono text-2xl text-smoke group-hover:text-emerald-400 transition-colors">
                  Explore the Design Challenge Artifacts
                </p>
              </div>
              <svg
                className="w-12 h-12 text-emerald-400 group-hover:translate-x-2 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </a>
        )}

        {/* Next Project Footer */}
        {nextProjectData && (
          <section className="mt-32 pt-16 border-t border-white/10">
            <div className="flex flex-col items-center text-center">
              <span className="font-mono text-sm text-emerald-400 mb-4 tracking-widest">
                CONTINUE EXPLORING
              </span>

              <Link
                to={`/work/${nextProjectData.slug}`}
                className="group block max-w-2xl"
              >
                <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 group-hover:text-emerald-400 transition-colors">
                  {nextProjectData.project.title}
                </h2>

                <p className="font-mono text-ash group-hover:text-smoke transition-colors">
                  {nextProjectData.project.subtitle}
                </p>

                <div className="mt-12 flex justify-center">
                  <div className="w-16 h-16 border-2 border-white/20 flex items-center justify-center group-hover:border-emerald-400 transition-colors">
                    <svg
                      className="w-6 h-6 text-white group-hover:text-emerald-400 group-hover:translate-x-2 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

const Meta = ({ label, value }) => (
  <div>
    <div className="font-mono text-xs text-emerald-400 mb-2">{label}</div>
    <div className="font-mono text-sm text-smoke">{value}</div>
  </div>
);

const GlassBlock = ({ title, color, children }) => (
  <div className={`glass p-8 border-l-4 border-${color}-400`}>
    <h3 className={`font-mono text-${color}-400 font-bold mb-4`}>{title}</h3>
    <p className="font-mono text-ash leading-relaxed">{children}</p>
  </div>
);

export default CaseStudy;
