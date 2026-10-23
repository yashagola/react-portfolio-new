import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react'
import { personalInfo } from '../data'
import './Contact.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    const form = e.target
    const data = {
      _subject: `New Portfolio Inquiry — ${form.topic.value || 'General'} (from ${form.name.value})`,
      Name: form.name.value,
      Email: form.email.value,
      Topic: form.topic.value,
      Message: form.message.value,
    }

    try {
      await fetch('https://formsubmit.co/ajax/yashagola1234@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })
      setSent(true)
      form.reset()
      setTimeout(() => setSent(false), 4000)
    } catch {
      window.location.href = `mailto:yashagola1234@gmail.com?subject=${encodeURIComponent(data.Topic)}&body=${encodeURIComponent(`Name: ${data.Name}\nEmail: ${data.Email}\n\n${data.Message}`)}`
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left">
            <motion.span
              className="section-label"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={0}
            >
              Contact
            </motion.span>

            <motion.h2
              className="contact-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={1}
            >
              Have a project<br />
              <span className="gradient-text">in mind?</span>
            </motion.h2>

            <motion.p
              className="contact-desc"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={2}
            >
              I'm open to full-time roles, contract projects, and freelance work. Drop me a
              message — I reply within 24 hours.
            </motion.p>

            <div className="contact-items">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="contact-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                custom={3}
              >
                <span className="contact-item-icon"><Mail size={18} /></span>
                <span className="contact-item-text">
                  <span className="contact-item-label">Email</span>
                  {personalInfo.email}
                </span>
              </motion.a>

              <motion.a
                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                className="contact-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                custom={4}
              >
                <span className="contact-item-icon"><Phone size={18} /></span>
                <span className="contact-item-text">
                  <span className="contact-item-label">Phone</span>
                  {personalInfo.phone}
                </span>
              </motion.a>

              <motion.div
                className="contact-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                custom={5}
              >
                <span className="contact-item-icon"><MapPin size={18} /></span>
                <span className="contact-item-text">
                  <span className="contact-item-label">Location</span>
                  {personalInfo.location}
                </span>
              </motion.div>
            </div>
          </div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div className="form-row" variants={fadeUp} custom={0}>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
            </motion.div>

            <motion.div className="form-group" variants={fadeUp} custom={1}>
              <label htmlFor="topic">What's this about?</label>
              <select id="topic" name="topic" defaultValue="" required>
                <option value="" disabled>Choose a topic</option>
                <option value="New website project">New website project</option>
                <option value="WordPress development">WordPress development</option>
                <option value="WooCommerce store">WooCommerce store</option>
                <option value="Speed / SEO optimization">Speed / SEO optimization</option>
                <option value="Full-time / Contract role">Full-time / Contract role</option>
                <option value="Something else">Something else</option>
              </select>
            </motion.div>

            <motion.div className="form-group" variants={fadeUp} custom={2}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." required />
            </motion.div>

            <motion.button
              type="submit"
              className="btn btn-primary form-submit"
              variants={fadeUp}
              custom={3}
              disabled={sending}
            >
              {sending ? (
                <><Loader2 size={16} className="spin" /> Sending...</>
              ) : sent ? (
                <><CheckCircle size={16} /> Message Sent!</>
              ) : (
                <>Send Message <Send size={16} /></>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
