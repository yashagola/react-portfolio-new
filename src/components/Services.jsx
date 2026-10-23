import { motion } from 'framer-motion'
import { PenTool, Code2, ShoppingCart, Zap, Palette, Shield } from 'lucide-react'
import { services } from '../data'
import './Services.css'

const icons = {
  figma: <PenTool size={22} />,
  code: <Code2 size={22} />,
  cart: <ShoppingCart size={22} />,
  zap: <Zap size={22} />,
  palette: <Palette size={22} />,
  shield: <Shield size={22} />,
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: (i % 3) * 0.1 } }),
}

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div
          className="services-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span className="section-label" variants={fadeUp} custom={0}>
            Services
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp} custom={1}>
            What I actually do, <span className="highlight">day to day.</span>
          </motion.h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.article
              key={service.num}
              className="service-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i}
            >
              <div className="service-top">
                <span className="service-num">{service.num}</span>
                <span className="service-icon">{icons[service.icon]}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
