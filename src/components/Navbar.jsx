import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Sun, Moon, Mail, Phone, ArrowUpRight } from 'lucide-react'
import { navLinks, personalInfo } from '../data'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#about')
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const ids = navLinks.map(l => l.href.slice(1))
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 140) {
          setActive('#' + ids[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNav = (href) => {
    setOpen(false)
    setActive(href)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className={`navbar ${scrolled || open ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
        <div className="container nav-inner">
          <a href="#about" className="nav-logo" onClick={(e) => { e.preventDefault(); handleNav('#about') }}>
            <span className="logo-icon"><Code2 size={18} /></span>
            <span className="logo-text">Yash<span className="gradient-text">Agola</span></span>
          </a>

          <nav className="nav-links">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${active === link.href ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
              >
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              <span className="theme-icon">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </span>
            </button>

            <a href="#contact" className="btn btn-primary nav-cta" onClick={(e) => { e.preventDefault(); handleNav('#contact') }}>
              Get in touch
            </a>
          </div>

          {/* premium burger */}
          <button
            className={`burger ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="burger-line top" />
            <span className="burger-line mid" />
            <span className="burger-line bottom" />
          </button>
        </div>
      </header>

      {/* full-screen menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="menu-blob b1" />
            <div className="menu-blob b2" />

            <div className="menu-inner">
              <nav className="menu-links">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={`menu-link ${active === link.href ? 'active' : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="menu-index">0{i + 1}</span>
                    <span className="menu-label">{link.label}</span>
                    <span className="menu-arrow"><ArrowUpRight size={22} /></span>
                    <span className="menu-underline" />
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="menu-footer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <div className="menu-contact">
                  <a href={`mailto:${personalInfo.email}`}><Mail size={16} /> {personalInfo.email}</a>
                  <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}><Phone size={16} /> {personalInfo.phone}</a>
                </div>
                <div className="menu-socials">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href={`mailto:${personalInfo.email}`}>Email</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
