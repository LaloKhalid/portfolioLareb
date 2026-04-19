import { useState, useEffect } from 'react'

const roles = ['Frontend Developer', 'UI Enthusiast', 'React Developer', 'Web Creator']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(108,99,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,99,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float [animation-delay:3s]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-accent text-sm font-medium">Available for work</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              <span className="block text-white">Hi, I'm</span>
              <span className="block text-gradient">Lareb Khalid</span>
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-8 h-10">
              <span className="text-xl sm:text-2xl text-muted font-light">I'm a </span>
              <span className="text-xl sm:text-2xl font-semibold text-white">
                {displayed}
                <span className="animate-blink text-accent">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-muted text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Passionate about crafting stunning, responsive websites with a focus on
              clean code and exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-accent text-white font-semibold rounded-full hover:opacity-90 transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 text-sm"
              >
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-dark-border text-white font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-200 text-sm"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/lareb-k-572469166"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:lareb.usman@yahoo.com"
                className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
            </div>
          </div>

          {/* Visual / Avatar */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30 animate-spin-slow" style={{ margin: '-20px' }} />

              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-accent/5 blur-2xl scale-110" />

              {/* Avatar container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-accent/30 overflow-hidden bg-dark-card flex items-center justify-center">
                {/* Initials fallback with gradient background */}
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <span className="text-7xl sm:text-8xl font-black text-gradient select-none">LK</span>
                </div>
              </div>

              {/* Floating stats badges */}
              <div className="absolute -bottom-4 -left-8 bg-dark-card border border-dark-border rounded-2xl px-4 py-3 shadow-xl animate-float [animation-delay:1s]">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-white">5+</span>
                  <span className="text-xs text-muted leading-tight">Projects<br/>Completed</span>
                </div>
              </div>

              <div className="absolute -top-4 -right-8 bg-dark-card border border-dark-border rounded-2xl px-4 py-3 shadow-xl animate-float [animation-delay:2s]">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span className="text-xs text-muted">Frontend<br/>Dev</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-muted to-transparent" />
        </div>
      </div>
    </section>
  )
}
