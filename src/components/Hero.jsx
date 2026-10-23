import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { personalInfo, stats, summary, marqueeItems } from '../data'
import './Hero.css'

const resumeHighlights = [
  'From Figma to full WooCommerce stores.',
];

export default function Hero() {
  const marqueeRef = useRef(null)

  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid-texture" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-top">
          <motion.span
            className="hero-badge"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-dot" />
            Available for work · 2026
          </motion.span>
        </div>

        <div className="hero-main">
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="hero-title">
              WordPress<br />
              <span className="gradient-text">Developer</span><br />
              &amp; Problem Solver.
            </h1>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <p className="hero-intro">
              I'm <strong>{personalInfo.name}</strong> — building fast, custom,
              conversion-focused WordPress websites for 4+ years.{' '}
              {resumeHighlights[0]}
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                See my work <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Get in Touch
              </a>
            </div>

            <div className="hero-stats">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="hero-stat"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <a href="#about" className="hero-scroll" aria-label="Scroll down">
          <ArrowDown size={16} />
        </a>
      </div>

      <div className="marquee" ref={marqueeRef} aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              <span className="marquee-sep">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
