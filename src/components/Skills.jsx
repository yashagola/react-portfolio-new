import { motion } from 'framer-motion'
import { skillBars, coreSkills, basicKnowledge } from '../data'
import './Skills.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-grid">
          <div className="skills-left">
            <motion.span
              className="section-label"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={0}
            >
              Toolkit
            </motion.span>
            <motion.h2
              className="section-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={1}
            >
              Skills that <span className="highlight">ship.</span>
            </motion.h2>
            <motion.p
              className="section-desc"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={2}
            >
              The stack I use daily to design, build, and optimize high-performing WordPress sites.
            </motion.p>

            <motion.div
              className="skills-chips"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              custom={3}
            >
              <div className="chip-group">
                <span className="chip-label">Core</span>
                <div className="chip-list">
                  {coreSkills.map(s => <span key={s} className="chip">{s}</span>)}
                </div>
              </div>
              <div className="chip-group">
                <span className="chip-label">Design</span>
                <div className="chip-list">
                  {basicKnowledge.map(s => <span key={s} className="chip">{s}</span>)}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="skills-right">
            {skillBars.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="skill-bar"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={i}
              >
                <div className="skill-bar-head">
                  <span className="skill-bar-name">{skill.name}</span>
                  <span className="skill-bar-level">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
