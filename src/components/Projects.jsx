import moviesImg from '../../MoviesProject.png'
import scrumImg from '../../ScrumBoard.png'
import jokeImg from '../../jokeGenerator.png'
import travelImg from '../../TravelApp.png'
import agdaImg from '../../agda.png'

const projects = [


  {
  title: 'AGDA Training App',
  description:
    'A fitness training application designed to help users track workouts, manage training programs, and monitor their fitness progress through an intuitive and responsive interface.',
  image: agdaImg,
  tags: [ 'JavaScript', 'CSS', 'Fitness'],
  link: 'https://agda-training-app.vercel.app/',
  featured: true,
},
  {
    title: 'Grit Movies',
    description:
      'A dynamic movie discovery app that allows users to search and explore movies using The Movie Database (TMDb) API.',
    image: moviesImg,
    tags: ['JavaScript', 'API', 'CSS'],
    link: 'https://mygritmovies123.netlify.app',
    featured: true,
  },
  {
    title: 'Scrum Board',
    description:
      'A dynamic Scrum board for managing tasks, tracking progress, and streamlining agile workflows.',
    image: scrumImg,
    tags: ['JavaScript', 'Drag & Drop', 'CSS'],
    link: 'https://mygritscrumboard.netlify.app/',
    featured: true,
  },
  {
    title: 'Travel App',
    description:
      'A travel web app to discover and explore destinations, helping users plan their next adventure with ease.',
    image: travelImg,
    tags: ['JavaScript', 'CSS', 'HTML', 'React'],
    link: 'https://nimble-dango-da37a6.netlify.app/',
    featured: false,
  },
  {
    title: 'Joke Generator',
    description:
      'A fun web app that fetches random jokes from an API and delivers a new laugh every time you hit the button!',
    image: jokeImg,
    tags: ['JavaScript', 'API', 'HTML'],
    link: 'https://venerable-fox-d601e6.netlify.app',
    featured: false,
  },
]

function ProjectCard({ project, index }) {
  return (
    <div
      className="animate-on-scroll group relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden card-hover flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9] bg-dark">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-accent/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-dark font-bold text-sm px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          ) : (
            <span className="bg-white/20 text-white text-sm px-6 py-3 rounded-full font-medium">
              No Live Demo
            </span>
          )}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-accent text-white text-xs font-semibold rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-dark-border flex items-center justify-between">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:underline"
            >
              View Project
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ) : (
            <span className="text-muted text-sm italic">Demo unavailable</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(108,99,255,0.06),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">My Work</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-accent rounded-full mx-auto mb-6" />
          <p className="text-muted text-lg max-w-xl mx-auto">
            Here are some of my recent projects showcasing my skills in web development,
            API integrations, and UI design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
