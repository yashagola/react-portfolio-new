import { useEffect, useRef } from 'react'

export default function Effects() {
  const glowRef = useRef(null)
  const dotRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    // mouse move -> cursor glow + dot
    let raf
    const move = (e) => {
      const x = e.clientX
      const y = e.clientY
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (glowRef.current) glowRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
        if (dotRef.current) dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      })
    }
    window.addEventListener('mousemove', move)

    // hover state for interactive elements
    const over = (e) => {
      const t = e.target
      if (t.closest('a, button, .btn, input, select, textarea, .project-card, .service-card')) {
        dotRef.current?.classList.add('hover')
      } else {
        dotRef.current?.classList.remove('hover')
      }
    }
    window.addEventListener('mouseover', over)

    // hide when leaving window
    const enter = () => {
      glowRef.current?.classList.remove('hidden')
      dotRef.current?.classList.remove('hidden')
    }
    const leave = () => {
      glowRef.current?.classList.add('hidden')
      dotRef.current?.classList.add('hidden')
    }
    document.addEventListener('mouseenter', enter)
    document.addEventListener('mouseleave', leave)

    // card spotlight (follows cursor inside card)
    const spot = (e) => {
      const card = e.target.closest('.service-card, .project-card, .exp-card, .contact-item, .chip, .contact-form')
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    window.addEventListener('mousemove', spot)

    // scroll progress
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0
      if (progressRef.current) progressRef.current.style.width = pct + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mousemove', spot)
      document.removeEventListener('mouseenter', enter)
      document.removeEventListener('mouseleave', leave)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  )
}
