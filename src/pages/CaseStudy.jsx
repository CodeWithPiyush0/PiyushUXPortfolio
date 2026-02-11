import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const CaseStudy = () => {
  const { slug } = useParams();

  // This would normally come from an API or database
  const caseStudies = {
    'exaltride': {
      title: 'ExaltRide',
      subtitle: 'Vendor & Admin Ecosystem',
      year: '2026',
      role: 'UI/UX Designer',
      duration: 'Ongoing',
      platform: 'Web Dashboard',
      tools: ['Figma', 'Auto Layout', 'Design Systems'],
      color: 'cyan',
      overview: 'ExaltRide is an e-commerce platform for car accessories. While the main storefront was pre-designed, I was tasked with building the "brains" of the operation—the Vendor and Admin panels.',
      problem: 'The platform needed a robust way for vendors to manage inventory and for admins to oversee transactions without a steep learning curve.',
      solution: 'Designed a comprehensive dashboard system with real-time analytics, order tracking, and inventory management modules using a clean, scalable design system.',
      results: [
        'Designed complete Vendor onboarding and management flow',
        'Created high-fidelity Admin Panel for platform oversight',
        'Standardized dashboard components for future scalability',
        'Optimized data-heavy tables for better readability'
      ],
      tags: ['E-commerce', 'Dashboard', 'B2B'],
    },
    'onebanc': {
      title: 'OneBanc',
      subtitle: 'Premium Wealth Management Experience',
      year: '2024',
      role: 'UI/UX Designer',
      duration: '2 weeks',
      platform: 'Web & Mobile',
      tools: ['Figma', 'Auto Layout', 'FigJam'],
      color: 'emerald',
      overview: 'OneBanc needed to differentiate itself in the crowded digital banking space by targeting growth-oriented high-net-worth individuals. I redesigned the Home, Insights, and Vaults screens with a premium aesthetic and proactive financial intelligence.',
      problem: 'Generic banking apps don\'t inspire confidence or reflect the premium service that wealthy clients expect. They offer passive data display without actionable insights.',
      solution: 'Created a distinctive luxury brand experience using emerald and gold palette, smart insights, and wealth-centric dashboards that provide proactive financial intelligence.',
      results: [
        'Unique visual identity with 100% distinction from competitors',
        'Comprehensive component library with 50+ reusable elements',
        'Consistent 8px grid system throughout',
        'WCAG AA compliant contrast ratios'
      ],
      tags: ['Fintech', 'Design System', 'Web', 'Mobile'],
      figmaLink: 'https://www.figma.com/design/z9eATD3n4ZUNmz5IjEBsd3/OneBanc-UX-Assignment',
    },
    'fintrack': {
      title: 'FinTrack',
      subtitle: 'Personal Finance Dashboard',
      year: '2024',
      role: 'Product Designer & Developer',
      duration: 'Ongoing',
      platform: 'Web (Responsive)',
      tools: ['Figma', 'React', 'Node.js', 'MongoDB'],
      color: 'cyan',
      overview: 'Built FinTrack as a comprehensive personal finance platform to solve budgeting challenges. Unlike existing solutions, FinTrack emphasizes user control and visual clarity.',
      problem: 'Existing finance apps like Mint are cluttered, YNAB has steep learning curve. Users abandon apps because they require too much effort.',
      solution: 'Created an intuitive dashboard with instant visual feedback, interactive charts, and simplified data entry to make finance management enjoyable.',
      results: [
        'Clean, modern interface with emphasis on data visualization',
        'Comprehensive feature set: transactions, budgets, goals',
        'Responsive design for all devices',
        'End-to-end MERN stack implementation'
      ],
      tags: ['SaaS', 'Full Stack', 'Data Visualization'],
    },
    'investment-app': {
      title: 'Investment App',
      subtitle: 'Beginner-Friendly Trading Platform',
      year: '2024',
      role: 'UI/UX Designer',
      duration: '2 weeks',
      platform: 'Mobile (iOS/Android)',
      tools: ['Figma', 'FigJam'],
      color: 'amber',
      overview: 'Designed a mobile-first investment app that uses clear visuals, gamified rewards, and progressive disclosure to make investing accessible to beginners.',
      problem: 'Young professionals want to start investing but feel overwhelmed by complex financial jargon and intimidating interfaces.',
      solution: 'Created beginner-friendly interface with educational tooltips, visual learning, gamification rewards system, and clear action outcomes.',
      results: [
        'Simplified onboarding reducing complexity',
        'Gamified rewards system to encourage consistent investing',
        'Clear user flows from onboarding to portfolio tracking',
        'Mobile-first design optimized for thumb-friendly navigation'
      ],
      tags: ['Fintech', 'Mobile', 'Gamification'],
    },
  };

  const project = caseStudies[slug];

  if (!project) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/work" className="btn-primary inline-block">
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <div className="container-custom px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Back Button */}
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-sm text-emerald-400 hover:gap-3 transition-all mb-8"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            BACK TO WORK
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`font-mono text-xs px-3 py-1 bg-${project.color}-400/10 text-${project.color}-400 border border-${project.color}-400/20`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="font-mono text-2xl text-ash mb-12">
            {project.subtitle}
          </p>

          {/* Project Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 glass border border-zinc/50">
            <div>
              <div className="font-mono text-xs text-emerald-400 mb-2">ROLE</div>
              <div className="font-mono text-sm text-smoke">{project.role}</div>
            </div>
            <div>
              <div className="font-mono text-xs text-emerald-400 mb-2">DURATION</div>
              <div className="font-mono text-sm text-smoke">{project.duration}</div>
            </div>
            <div>
              <div className="font-mono text-xs text-emerald-400 mb-2">PLATFORM</div>
              <div className="font-mono text-sm text-smoke">{project.platform}</div>
            </div>
            <div>
              <div className="font-mono text-xs text-emerald-400 mb-2">YEAR</div>
              <div className="font-mono text-sm text-smoke">{project.year}</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-32"
      >
        <div className={`h-[60vh] bg-gradient-to-br from-${project.color}-400/20 to-transparent relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-64 h-64 border-4 border-${project.color}-400 rotate-45`} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-ash">[Project Hero Image]</span>
          </div>
        </div>
      </motion.div>

      <div className="container-custom px-6 md:px-12">
        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 max-w-4xl"
        >
          <h2 className="font-display text-4xl font-bold mb-8">Overview</h2>
          <p className="font-mono text-xl text-smoke leading-relaxed">
            {project.overview}
          </p>
        </motion.section>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 border border-zinc/50 border-l-4 border-l-red-400"
          >
            <h3 className="font-mono text-red-400 font-semibold mb-4 text-sm tracking-wider">
              THE PROBLEM
            </h3>
            <p className="font-mono text-ash leading-relaxed">
              {project.problem}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 border border-zinc/50 border-l-4 border-l-emerald-400"
          >
            <h3 className="font-mono text-emerald-400 font-semibold mb-4 text-sm tracking-wider">
              THE SOLUTION
            </h3>
            <p className="font-mono text-ash leading-relaxed">
              {project.solution}
            </p>
          </motion.div>
        </div>

        {/* Design Process (Placeholder) */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="font-display text-4xl font-bold mb-8">Design Process</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {['Research', 'Ideation', 'Execution'].map((phase, index) => (
              <div key={phase} className="glass p-8 border border-zinc/50">
                <div className="font-mono text-emerald-400 mb-2">0{index + 1}</div>
                <h4 className="font-display text-2xl font-bold mb-4">{phase}</h4>
                <p className="font-mono text-sm text-ash">
                  [Add process description and images here]
                </p>
              </div>
            ))}
          </div>

          {/* Process Images Placeholder */}
          <div className="aspect-video bg-steel/50 border border-zinc/50 flex items-center justify-center">
            <span className="font-mono text-ash">[Process Images / Wireframes]</span>
          </div>
        </motion.section>

        {/* Final Designs (Placeholder) */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="font-display text-4xl font-bold mb-8">Final Designs</h2>
          
          <div className="space-y-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-video bg-steel/50 border border-zinc/50 flex items-center justify-center">
                <span className="font-mono text-ash">[High-Fidelity Design {item}]</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="font-display text-4xl font-bold mb-8">Results & Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="flex gap-4 p-6 glass border border-zinc/50">
                <div className={`w-8 h-8 border-2 border-${project.color}-400 flex items-center justify-center flex-shrink-0`}>
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-mono text-sm text-smoke">{result}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Figma Link */}
        {project.figmaLink && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <a
              href={project.figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-12 glass border border-emerald-400/50 hover:border-emerald-400 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-mono text-emerald-400 font-semibold mb-2 text-sm tracking-wider">
                    VIEW IN FIGMA
                  </h3>
                  <p className="font-mono text-2xl text-smoke group-hover:text-emerald-400 transition-colors">
                    Explore the Full Design
                  </p>
                </div>
                <svg className="w-12 h-12 text-emerald-400 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </motion.section>
        )}

        {/* Next Project */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="border-t border-zinc/50 pt-12">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-sm text-ash mb-2">NEXT PROJECT</div>
                <Link to="/work" className="font-display text-3xl font-bold hover:text-emerald-400 transition-colors">
                  View All Work →
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CaseStudy;
