import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = [
    { category: 'Research', items: ['User Interviews', 'Personas', 'Competitive Analysis', 'Usability Testing'] },
    { category: 'Design', items: ['Wireframing', 'Prototyping', 'UI Design', 'Design Systems', 'Dashboard Design', 'Interaction Design'] },
    { category: 'Tools', items: ['Figma', 'FigJam', 'AI Video Tools'] },
    { category: 'Development', items: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS', 'MERN Stack', 'PHP'] },
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Chandigarh University',
      period: '2023 - 2025',
      grade: '7.1 CGPA'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'BRABU (Babasaheb Bhimrao Ambedkar Bihar University)',
      period: '2019 - 2023',
      grade: '80% Marks'
    }
  ];

  const experience = [
    {
      role: 'UI/UX Designer (Intern)',
      company: 'ExaltRide',
      period: 'Jan 2026 - Present',
      description: 'Leading the end-to-end design of the Vendor and Admin panels for a newly launched e-commerce platform specializing in car accessories. Focused on streamlining complex dashboard workflows for platform management.'
    },
    {
      role: 'Software Design Engineer - UX/UI',
      company: 'CeroED Technologies Pvt Ltd',
      period: 'Aug 2025 - Oct 2025',
      description: 'Responsible for designing web applications using Figma, maintaining the company website (PHP/WordPress), and creating high-impact marketing and product videos using AI tools.'
    }
  ];

  return (
    <div className="pt-32 pb-20">
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
              ABOUT ME
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-8">
            Designing with
            <br />
            <span className="gradient-text">Purpose & Passion</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 mb-32">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="font-mono text-xl leading-relaxed text-smoke">
              I am a Software Design Engineer specializing in UI/UX, focused on bridging complex technical requirements with intuitive user experiences.
            </p>

            <p className="font-mono text-lg leading-relaxed text-ash">
              With professional experience across fintech and e-commerce ecosystems, I build scalable design systems and streamlined admin environments that simplify high-density data workflows.
            </p>

            <p className="font-mono text-lg leading-relaxed text-ash">
              When I'm not designing, I explore emerging design trends, strengthen my frontend skills, and work on personal projects that push my creative boundaries. I believe in continuous learning and staying curious.
            </p>

            <div className="pt-8">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                LET'S WORK TOGETHER
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square bg-linear-to-br from-emerald-400/20 to-cyan-400/20 relative overflow-hidden rounded-2xl p-4 md:p-6">
              {/* Geometric pattern overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-4 border-emerald-400/10 rotate-45" />
                <div className="absolute w-48 h-48 border-4 border-cyan-400/10 -rotate-12" />
              </div>
              
              {/* Replace with actual photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/image2.png" 
                  alt="Piyush - UI/UX Designer" 
                  className="w-full h-full object-cover object-[center_20%] rounded-2xl transition-transform duration-700 group-hover:scale-[1.03]" 
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400/20 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-emerald-400/30 -z-10" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity:0, y: 30 }}
          whileInView={{ opacity:1, y: 0 }}
          viewport={{ once: true }}
          className='mb-32'
        >
          <h2 className='font-display text-4xl md:text-5xl font-bold mb-12'>Experience</h2>
          <div className='space-y-8'>
            {experience.map((job, index) => (
              <motion.div
                key={index}
                className='glass p-8 border border-zinc/50 border-l-4 border-l-emerald-400'
              >
                <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                  <div>
                    <h3 className='font-display text-2xl font-bold mb-1'>{job.role}</h3>
                    <p className='font-mono text-emerald-400 text-sm mb-1'>{job.company}</p>
                  </div>
                  <span className='font-mono text-sm text-ash mt-2 md:mt-0'>
                    {job.period}
                  </span>
                </div>
                <p className='font-mono text-ash leading-relaxed'>{job.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity:0, y: 30 }}
          whileInView={{ opacity:1, y: 0 }}
          viewport={{ once: true }}
          className='mb-32'
        >
          <h2 className='font-display text-4xl md:text-5xl font-bold mb-12'>Education</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {education.map((edu, index) => (
              <div key={index} className='glass p-8 border border-zinc/50'>
                <span className='font-mono text-emerald-400 text-sm'>{edu.period}</span>
                <h3 className='font-display text-2xl font-bold mt-2'>{edu.degree}</h3>
                <p className='font-mono text-smoke'>{edu.institution}</p>
                <p className='font-mono text-ash text-sm mt-4'>Result: {edu.grade}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 border border-zinc/50 hover:border-emerald-400/50 transition-all group"
              >
                <h3 className="font-mono text-emerald-400 font-semibold mb-4 text-sm tracking-wider">
                  {skillGroup.category.toUpperCase()}
                </h3>
                
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="font-mono text-sm text-ash group-hover:text-smoke transition-colors">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            My Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-zinc/20">
            {[
              { step: '01', title: 'Research', desc: 'Understanding users and business goals through interviews and analysis' },
              { step: '02', title: 'Ideate', desc: 'Exploring solutions through wireframes and rapid prototyping' },
              { step: '03', title: 'Design', desc: 'Creating high-fidelity designs with attention to detail' },
              { step: '04', title: 'Iterate', desc: 'Testing and refining based on feedback and data' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-steel p-8 hover:bg-iron transition-all group"
              >
                <div className="font-mono text-emerald-400 text-sm mb-2">
                  {phase.step}
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                  {phase.title}
                </h3>
                
                <p className="font-mono text-sm text-ash leading-relaxed">
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
