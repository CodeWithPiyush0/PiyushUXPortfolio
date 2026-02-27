import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectColorMap } from "../utils/projectColors";
import { useState } from "react";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "ExaltRide",
      description:
        "Designing high-complexity Vendor and Admin panels for a specialized car accessories e-commerce platform.",
      tags: ["Professional", "E-commerce", "Dashboard", "B2B"],
      year: "2026",
      color: "cyan",
      slug: "exaltride",
      featured: true,
    },
    {
      title: "Frenley",
      description:
        "Designing a high-conversion subscription flow and core social experience for a modern dating app.",
      tags: ["Dating", "Mobile UI", "Social"],
      year: "2026",
      color: "orange",
      slug: "frenley",
      featured: false,
    },
    {
      title: "FinTrack",
      description:
        "Personal Project: A full-stack personal finance dashboard built to solve budgeting friction.",
      tags: ["SaaS", "Web", "MERN Stack", "Data Viz"],
      year: "2025",
      color: "amber",
      slug: "fintrack",
      featured: false,
    },
    {
      title: "OneBanc",
      description:
        "Selected Industry Assignment: Redesigning the wealth management experience for high-net-worth individuals.",
      tags: ["Fintech", "Mobile", "Design System", "Assignment"],
      year: "2026",
      color: "emerald",
      slug: "onebanc",
      featured: false,
    },
    {
      title: "WealthUp",
      description:
        "UX Assignment: Exploring gamified trading interfaces for beginner investors.",
      tags: ["Fintech", "Mobile", "Assignment"],
      year: "2026",
      color: "emerald",
      slug: "investment-app",
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) =>
            tag.toLowerCase().includes(activeFilter.toLowerCase()),
          ),
        );

  return (
    <div className="pt-36 pb-24">
      <div className="container-custom px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-emerald-400" />
            <span className="font-mono text-sm text-emerald-400 tracking-[0.2em]">
              PORTFOLIO
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            Selected Work
          </h1>

          <p className="font-mono text-lg md:text-xl text-ash max-w-3xl">
            A collection of projects showcasing my approach to solving complex
            design challenges through research, iteration, and attention to
            detail.
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16 pb-8 border-b border-zinc/50"
        >
          {["All", "Fintech", "E-commerce", "Mobile", "Dashboard"].map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 font-mono text-sm transition-all ${
                  activeFilter === filter
                    ? "bg-emerald-400 text-coal"
                    : "bg-zinc/20 text-ash hover:bg-zinc/40"
                }`}
              >
                {filter}
              </button>
            ),
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => {
            const colors =
              projectColorMap[project.color] || projectColorMap.emerald;

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className={project.featured ? "lg:col-span-2" : ""}
              >
                <Link
                  to={`/work/${project.slug}`}
                  className="project-card block h-full group"
                >
                  <div
                    className={`relative ${
                      project.featured ? "h-96" : "h-80"
                    } bg-linear-to-br overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 ${colors.badge} opacity-20`}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`w-32 h-32 border-4 ${
                          project.color === "cyan"
                            ? "border-cyan-400"
                            : project.color === "orange"
                              ? "border-orange-400"
                              : project.color === "amber"
                                ? "border-amber-400"
                                : "border-emerald-400"
                        } rotate-45 group-hover:rotate-90 transition-transform duration-700`}
                      />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-coal/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="font-display text-2xl text-emerald-400">
                        VIEW CASE STUDY →
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className={`font-mono text-xs px-3 py-1 border ${colors.badge}`}
                      >
                        {project.year}
                      </span>

                      {project.tags.map((tag) => (
                        <span key={tag} className="font-mono text-xs text-ash">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-mono text-ash leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-emerald-400 font-mono text-sm">
                      <span>View Project</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-2 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 glass border border-emerald-400/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-br from-emerald-400/10 to-transparent" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing
            </h2>

            <p className="font-mono text-lg text-ash mb-8">
              I'm always interested in hearing about new projects and
              opportunities. Whether you need a complete product design or want
              to collaborate on something exciting.
            </p>

            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              START A CONVERSATION
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
