import { motion } from 'framer-motion'
import { Briefcase, Calendar, GraduationCap, Award } from 'lucide-react'
import { experience, education } from '../data'
import './Journey.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
}

export default function Journey() {
  return (
    <section id="journey" className="journey">
      <div className="container">
        <motion.div
          className="journey-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span className="section-label" variants={fadeUp} custom={0}>
            Journey
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp} custom={1}>
            Experience & <span className="highlight">education.</span>
          </motion.h2>
        </motion.div>

        <div className="journey-grid">
          <div className="journey-col">
            <motion.div
              className="journey-col-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              custom={0}
            >
              <Briefcase size={17} /> Experience
            </motion.div>

            <div className="exp-list">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  className="exp-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="exp-card-top">
                    <span className="exp-period">
                      <Calendar size={13} /> {exp.period}
                    </span>
                    <span className="exp-company">{exp.company}</span>
                  </div>

                  <h3 className="exp-role">{exp.role}</h3>

                  <ul className="exp-points">
                    {exp.points.slice(0, 3).map((point, j) => (
                      <li key={j}>
                        <span className="point-dot" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="journey-col">
            <motion.div
              className="journey-col-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              custom={0}
            >
              <GraduationCap size={17} /> Education
            </motion.div>

            <div className="edu-list">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="edu-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="edu-card-head">
                    <span className="edu-degree">{edu.degree}</span>
                    <span className="edu-date">{edu.date}</span>
                  </div>
                  <p className="edu-school">{edu.school}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="journey-highlight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={2}
            >
              <Award size={20} />
              <div>
                <strong>4+ Years Building —</strong> 45+ projects shipping modern WordPress and
                pixel-perfect front-ends across time zones.
              </div>
            </motion.div>

            <motion.div
              className="journey-languages"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={3}
            >
              <span className="chip-label">Languages</span>
              <div className="chip-list">
                <span className="chip">Hindi</span>
                <span className="chip">Gujrati</span>
                <span className="chip">English</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
