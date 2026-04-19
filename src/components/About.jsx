const skills = [
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'Git & GitHub', icon: '🔧' },
  { name: 'REST APIs', icon: '🔗' },
  { name: 'Responsive Design', icon: '📱' },
]

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '2+', label: 'Years Learning' },
  { value: '100%', label: 'Passion Driven' },
]

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      {/* Section background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(108,99,255,0.06),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Who I Am</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-accent rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-white">
              A Frontend Developer who loves building{' '}
              <span className="text-gradient">beautiful interfaces</span>
            </h3>
            <div className="space-y-4 text-muted leading-relaxed text-[15px]">
              <p>
                I'm a passionate Frontend Developer with a keen eye for detail and a love for creating
                engaging user experiences. My journey in web development has equipped me with the skills
                to build responsive, accessible, and visually appealing websites.
              </p>
              <p>
                I thrive on challenges and continuously seek to improve my craft through learning and
                experimentation. Whether it's a pixel-perfect landing page or a dynamic React app with
                API integrations — I bring both technical skill and creative energy to every project.
              </p>
              <p>
                I specialize in building responsive, user-friendly websites that not only look great
                but also perform well across all devices and screen sizes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-dark-card border border-dark-border rounded-2xl p-4 text-center hover:border-accent/40 transition-colors"
                >
                  <div className="text-3xl font-black text-gradient mb-1">{value}</div>
                  <div className="text-xs text-muted leading-tight">{label}</div>
                </div>
              ))}
            </div>

            {/* Resume link */}
            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/lareb-k-572469166"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:underline"
              >
                View my LinkedIn profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Skills */}
          <div className="animate-on-scroll">
            <h3 className="text-lg font-semibold text-white mb-6">
              Technologies & Tools
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 bg-dark-card border border-dark-border rounded-xl px-4 py-3.5 card-hover group"
                >
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-muted group-hover:text-white transition-colors">
                    {name}
                  </span>
                </div>
              ))}
            </div>

            {/* Currently learning */}
            <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-accent text-sm font-semibold">Currently Learning</span>
              </div>
              <p className="text-muted text-sm">
                TypeScript, Next.js, and advanced React patterns to deepen my frontend expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
