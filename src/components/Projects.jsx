import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data'
import './Projects.css'

const gradients = [
  'linear-gradient(135deg, #1a0a2e 0%, #3d1a78 100%)',
  'linear-gradient(135deg, #0a1a2e 0%, #1a3a78 100%)',
  'linear-gradient(135deg, #2e0a1a 0%, #781a4d 100%)',
  'linear-gradient(135deg, #0a2e1a 0%, #1a7848 100%)',
  'linear-gradient(135deg, #2e1a0a 0%, #78481a 100%)',
]

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08 } }),
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span className="section-label" variants={fadeUp} custom={0}>
            Selected Work
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp} custom={1}>
            Recent projects, <span className="highlight">real results.</span>
          </motion.h2>
        </motion.div>

        <div className="projects-masonry">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card ${i % 3 === 0 ? 'tall' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i}
            >
              <div className="project-thumb" style={{ background: gradients[i % gradients.length] }}>
                <div className="project-browser">
                  <div className="project-browser-bar">
                    <span /><span /><span />
                    <div className="project-url">{project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</div>
                  </div>
                  <div className="project-screen">
                    <div className="project-screen-line w60" />
                    <div className="project-screen-line w90" />
                    <div className="project-screen-line w75" />
                    <div className="project-screen-block" />
                  </div>
                </div>
                <span className="project-open"><ArrowUpRight size={18} /></span>
              </div>

              <div className="project-body">
                <span className="project-cat">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
