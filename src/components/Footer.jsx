import { motion } from 'framer-motion'
import { Code2, Linkedin, Github, ArrowUp } from 'lucide-react'
import { personalInfo } from '../data'
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); scrollToTop() }}>
            <span className="logo-icon"><Code2 size={16} /></span>
            <span>Yash <span className="gradient-text">Agola</span></span>
          </a>
          <p className="footer-copy">
            © {year} {personalInfo.name} · WordPress Developer
          </p>
        </div>

        <nav className="footer-links">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={15} /> LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`}>
            Email
          </a>
          <button className="footer-top-link" onClick={scrollToTop}>
            <ArrowUp size={15} /> Back to top
          </button>
        </nav>
      </div>
    </footer>
  )
}
