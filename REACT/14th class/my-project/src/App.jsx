import './App.css'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

const projects = [
  {
    title: 'E-Commerce (Daraz Clone)',
    description: 'A fully responsive front-end clone of Daraz using ReactJS and Tailwind.',
  },
  {
    title: 'School Website',
    description: 'A functional educational platform for a local school.',
  },
  {
    title: 'Urdu Content Site',
    description: 'A content-focused website developed specifically for Urdu readers.',
  },
]

const skills = {
  tech: ['ReactJS', 'Tailwind CSS', 'Material UI', 'HTML5/CSS3'],
  learning: ['Machine Learning (Future Goal)', 'English Language'],
}

const education = [
  {
    title: 'Web Development',
    detail: 'SMIT (Saylani Mass IT Training) - Modern Web & Mobile App Development (In Progress).',
  },
  {
    title: 'Islamic Studies',
    detail: 'Jamia Tul Madina - Dars-e-Nizami, 6th Year (Saadisa) - Focusing on Fiqh & Hadith Research.',
  },
]

const DEFAULT_PALETTE = [
  [56, 189, 248],
  [245, 158, 11],
  [34, 211, 238],
]

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const rgbToHsl = (r, g, b) => {
  const rNorm = r / 255
  const gNorm = g / 255
  const bNorm = b / 255
  const max = Math.max(rNorm, gNorm, bNorm)
  const min = Math.min(rNorm, gNorm, bNorm)
  const delta = max - min
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1))
    switch (max) {
      case rNorm:
        h = ((gNorm - bNorm) / delta) % 6
        break
      case gNorm:
        h = (bNorm - rNorm) / delta + 2
        break
      case bNorm:
        h = (rNorm - gNorm) / delta + 4
        break
      default:
        h = 0
    }
    h *= 60
    if (h < 0) h += 360
  }

  return { h, s, l }
}

const extractPalette = (image) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  const size = 90
  canvas.width = size
  canvas.height = size
  ctx.drawImage(image, 0, 0, size, size)
  const { data } = ctx.getImageData(0, 0, size, size)
  const counts = new Map()

  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3]
    if (alpha < 200) continue

    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    const { s, l } = rgbToHsl(r, g, b)

    if (s < 0.18 || l < 0.15 || l > 0.9) continue

    const rBucket = Math.round(r / 20) * 20
    const gBucket = Math.round(g / 20) * 20
    const bBucket = Math.round(b / 20) * 20
    const key = `${rBucket},${gBucket},${bBucket}`
    counts.set(key, (counts.get(key) || 0) + 1)
  }

  const sorted = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key.split(',').map((value) => clamp(Number(value), 0, 255)))

  const palette = []
  const minDistance = 55

  for (const color of sorted) {
    if (
      palette.every((picked) => {
        const dr = picked[0] - color[0]
        const dg = picked[1] - color[1]
        const db = picked[2] - color[2]
        return Math.sqrt(dr * dr + dg * dg + db * db) > minDistance
      })
    ) {
      palette.push(color)
    }
    if (palette.length >= 3) break
  }

  return palette
}

const applyPalette = (palette) => {
  const root = document.documentElement
  const resolved = DEFAULT_PALETTE.map((fallback, index) => palette[index] || fallback)
  resolved.forEach((color, index) => {
    root.style.setProperty(`--accent-${index + 1}`, color.join(' '))
  })
}

function App() {
  useEffect(() => {
    const img = new Image()
    img.src = '/profile.jpg'
    img.onload = () => {
      applyPalette(extractPalette(img))
    }
    img.onerror = () => {
      applyPalette([])
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#05070a] text-white">
      <div className="relative overflow-hidden">
        <div className="blob-accent-1 pointer-events-none absolute left-0 top-0 h-[520px] w-[520px] -translate-x-1/3 -translate-y-1/3 rounded-full blur-[140px]" />
        <div className="blob-accent-2 pointer-events-none absolute right-0 top-40 h-[420px] w-[420px] translate-x-1/3 rounded-full blur-[140px]" />

        <header className="glass-strong sticky top-0 z-50 border-b border-white/5">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <div className="killer-type neon-text text-sm tracking-[0.35em]">UMARF</div>
            <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.2em] text-white/70 md:flex">
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#skills">Skills</a>
              <a className="nav-link" href="#projects">Projects</a>
              <a className="nav-link" href="#education">Education</a>
              <a className="nav-link" href="#contact">Contact</a>
            </nav>
            <button className="glow-btn btn-accent-outline rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]">
              Hire Me
            </button>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-16">
          <section className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-6"
            >
              <p className="accent-text-soft text-xs uppercase tracking-[0.5em]">High-Performance Portfolio</p>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                Muhammad Umar Farooq Attari
              </h1>
              <p className="text-lg text-white/70">
                Frontend React Developer | Islamic Scholar in Training
              </p>
              <p className="text-base text-white/60">
                &quot;Building modern web experiences with code and character.&quot;
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="glow-btn btn-accent rounded-full px-6 py-3 text-xs uppercase tracking-[0.3em]">
                  View Work
                </button>
                <a
                  className="btn-ghost rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white/70 transition"
                  href="/cv.pdf"
                  download
                >
                  Download CV
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="profile-halo absolute inset-0 rounded-full blur-2xl" />
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="profile-image relative h-56 w-56 rounded-full object-cover"
                />
              </div>
            </motion.div>
          </section>

          <motion.section
            id="about"
            className="glass-strong rounded-3xl p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="killer-type neon-text accent-text text-2xl">About Me</h2>
            <p className="mt-4 text-white/70">
              I am a passionate Web Developer based in Karachi/Toba Tek Singh. Currently mastering the MERN stack at SMIT
              while simultaneously pursuing advanced Islamic studies (Dars-e-Nizami, 6th Year) at Jamia Tul Madina. I bridge
              the gap between traditional wisdom and modern technology.
            </p>
          </motion.section>

          <section id="skills" className="space-y-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="killer-type neon-text accent-text text-2xl">Skills</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="glass-strong rounded-3xl p-6">
                  <p className="accent-text-soft text-xs uppercase tracking-[0.3em]">Tech</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {skills.tech.map((skill) => (
                      <span
                        key={skill}
                        className="chip-accent neon-border rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="glass-strong rounded-3xl p-6">
                  <p className="accent2-text-soft text-xs uppercase tracking-[0.3em]">Learning</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {skills.learning.map((skill) => (
                      <span
                        key={skill}
                        className="chip-accent-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="projects" className="space-y-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="killer-type neon-text accent-text text-2xl">Projects</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {projects.map((project) => (
                  <div key={project.title} className="perspective">
                    <motion.div
                      className="card-3d glass-strong neon-border rounded-3xl p-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{
                        rotateX: 10,
                        rotateY: -10,
                        y: -8,
                        boxShadow:
                          '0 0 0 1px rgb(var(--accent-1) / 0.4), 0 0 28px rgb(var(--accent-1) / 0.35), 0 18px 40px rgba(0, 0, 0, 0.35)',
                      }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                      <p className="mt-3 text-sm text-white/65">{project.description}</p>
                      <button className="glow-btn btn-accent-outline mt-6 w-full rounded-full py-2 text-xs uppercase tracking-[0.3em]">
                        View Case
                      </button>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="education" className="space-y-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="killer-type neon-text accent-text text-2xl">Education Timeline</h2>
              <div className="mt-6 space-y-6">
                {education.map((item) => (
                  <div key={item.title} className="glass-strong rounded-3xl p-6">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/65">{item.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          <motion.section
            id="contact"
            className="glass-strong rounded-3xl p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="killer-type neon-text accent-text text-2xl">Contact</h2>
            <p className="mt-4 text-white/70">Let us build something powerful together.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a className="glow-btn btn-accent-outline rounded-full px-5 py-2 text-xs uppercase tracking-[0.3em]" href="#">
                GitHub
              </a>
              <a className="btn-ghost rounded-full border border-white/15 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/70 transition" href="#">
                LinkedIn
              </a>
              <a className="btn-ghost rounded-full border border-white/15 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/70 transition" href="#">
                Email
              </a>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  )
}

export default App
