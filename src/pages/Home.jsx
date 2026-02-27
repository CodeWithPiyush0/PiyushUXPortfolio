import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectColorMap } from "../utils/projectColors";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const projects = [
    {
      title: "ExaltRide",
      subtitle: "B2B Ecosystem & Mobile-First Redesign",
      color: "cyan",
      year: "2026",
      tags: ["E-commerce", "B2B", "Dashboard"],
      slug: "exaltride",
    },
    {
      title: "Frenley",
      subtitle: "Social Connection & Premium Ecosystem",
      color: "orange",
      year: "2026",
      tags: ["Mobile", "Social", "Dating"],
      slug: "frenley",
    },
    {
      title: "FinTrack",
      subtitle: "Finance Dashboard",
      color: "cyan",
      year: "2025",
      tags: ["SaaS", "Web", "MERN"],
      slug: "fintrack",
    },
    {
      title: "WealthUp",
      subtitle: "Gamified Investment Ecosystem",
      color: "emerald",
      year: "2026",
      tags: ["Fintech", "Mobile"],
      slug: "investment-app",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-28">
        {/* Animated background elements */}
        <motion.div
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className="absolute inset-0 opacity-20 md:opacity-30"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-emerald-400/20 rotate-45" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-cyan-400/20 -rotate-12" />
        </motion.div>

        <div className="container-custom px-6 md:px-12 relative z-10">
          <div className="max-w-4xl xl:max-w-5xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6 md:mb-8"
            >
              <div className="h-px w-12 bg-emerald-400" />
              <span className="font-mono text-xs md:text-sm text-emerald-400 tracking-[0.2em]">
                UI/UX DESIGNER
              </span>
            </motion.div>

            {/* Main Heading - Staggered Animation */}
            <div className="space-y-2 md:space-y-4 mb-6 md:mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-none"
              >
                CRAFTING
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 md:gap-6"
              >
                <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-none">
                  DIGITAL
                </h1>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="hidden lg:block w-20 h-20 border-2 border-amber-400 relative"
                >
                  <div className="absolute inset-2 bg-amber-400/20" />
                </motion.div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-none gradient-text"
              >
                EXPERIENCES
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-base md:text-lg text-ash max-w-xl md:max-w-2xl mb-10 md:mb-12 leading-relaxed"
            >
              Currently designing scalable{" "}
              <span className="text-emerald-400">B2B ecosystems</span> and
              high-density dashboard experiences at{" "}
              <span className="text-amber-400">ExaltRide</span>, with a focus on
              mobile-first product thingking and design systems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/work"
                className="btn-primary group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  VIEW WORK
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent shimmer" />
              </Link>

              <Link to="/contact" className="btn-secondary group">
                LET'S TALK
                <svg
                  className="w-5 h-5 inline-block ml-2 group-hover:rotate-45 transition-transform"
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
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section-padding relative pt-16 md:pt-24">
        <div className="container-custom px-6 md:px-12">
          {/* ✅ NEW — Section Header */}
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-px w-12 bg-emerald-400" />
                <span className="font-mono text-sm text-emerald-400 tracking-[0.2em]">
                  SELECTED WORK
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl md:text-5xl font-bold"
              >
                Recent Projects
              </motion.h2>
            </div>

            {/* ✅ NEW — View All button */}
            <Link
              to="/work"
              className="hidden md:flex items-center gap-2 font-mono text-sm text-emerald-400 hover:gap-4 transition-all"
            >
              VIEW ALL
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

          <div className="space-y-6 mb-16">
            {projects.map((project, index) => {
              const colors = projectColorMap[project.color];
              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/work/${project.slug}`}
                    className="project-card block group"
                  >
                    <div className="p-6 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          {/* CHANGE: Tailwind-safe badge */}
                          <span
                            className={`font-mono text-xs px-3 py-1 border ${colors.badge}`}
                          >
                            {project.year}
                          </span>

                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-xs text-ash"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3 className="font-display text-2xl md:text-5xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h3>

                        <p className="font-mono text-sm md:text-lg text-ash">
                          {project.subtitle}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 border-2 flex items-center justify-center transition-all ${colors.arrow}`}
                        >
                          <svg
                            className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
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
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-zinc/50 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-12">
              {[
                "User Research",
                "Wireframing",
                "Prototyping",
                "UI Design",
                "Design Systems",
                "Figma",
                "React",
                "Tailwind",
              ].map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-2xl md:text-4xl text-zinc"
                >
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
