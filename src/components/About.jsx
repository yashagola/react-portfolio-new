import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { summary } from '../data'
import './About.css'

const aboutTags = ['Figma', 'ACF', 'WP_Query', 'WooCommerce', 'Elementor Pro', 'PHP', 'Speed Optimization']

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-texture" aria-hidden="true" />
      <div className="container">
        <motion.span
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={0}
        >
          About
        </motion.span>

        <div className="about-grid">
          <motion.div
            className="about-visual"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={0}
          >
            <div className="about-avatar">
              <span className="about-monogram">YA</span>
              <div className="about-avatar-ring" />
            </div>
            <span className="about-float-badge available">
              <span className="badge-dot" /> Available
            </span>
            <span className="about-float-badge code">
              <Sparkles size={13} /> Custom Code
            </span>
          </motion.div>

          <div className="about-content">
            <motion.h2
              className="about-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              custom={1}
            >
              Bridging <span className="gradient-text">design</span> and{' '}
              <span className="gradient-text">development</span> into one seamless experience.
            </motion.h2>

            <motion.p
              className="about-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              custom={2}
            >
              I'm an IT-focused WordPress Developer with 4+ years of experience crafting everything
              from pixel-perfect marketing sites to full WooCommerce stores. My work sits at the
              intersection of front-end design and custom PHP logic — HTML5, CSS3, ACF fields, and
              custom WP_Query code, out of my toolbox.
            </motion.p>

            <motion.p
              className="about-text accent"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              custom={3}
            >
              I care deeply about page speed, clean code, and making sites that actually convert.
              Based in Ahmedabad, I work with clients across time zones and handle everything from
              build to ongoing maintenance. I treat every project as if it's my own.
            </motion.p>

            <motion.div
              className="about-tags"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              custom={4}
            >
              {aboutTags.map(tag => (
                <span key={tag} className="about-tag">{tag}</span>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              custom={5}
            >
              <a href="#contact" className="btn btn-primary about-cta">
                Let's work together <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
