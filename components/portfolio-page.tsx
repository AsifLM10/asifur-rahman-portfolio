"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MoveRight,
  Sparkles,
  UserRound,
  X,
  Globe,
} from "lucide-react";

import {
  beyondCode,
  contactMethods,
  education,
  navItems,
  ongoingResearch,
  publishedResearch,
  acceptedResearch,
  projects,
  skillGroups,
  socialLinks,
} from "@/data/portfolio";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p>
    </div>
  );
}

function SocialLink({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: "code" | "briefcase" | "book" | "globe";
}) {
  const Icon =
    icon === "code"
      ? Code2
      : icon === "briefcase"
        ? Briefcase
        : icon === "book"
          ? BookOpen
          : Globe;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
      aria-label={label}
    >
      <Icon size={16} />
      {label}
    </a>
  );
}

export function PortfolioPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f2ec] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f6f2ec]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-slate-700 uppercase">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-base text-slate-900">
              AR
            </span>
            Asifur Rahman
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 p-2 text-slate-700 transition hover:border-slate-400 hover:text-slate-900 md:hidden"
              aria-label={isNavOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isNavOpen}
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              {isNavOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 md:inline-flex"
            >
              Let&apos;s talk
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {isNavOpen ? (
          <nav aria-label="Mobile navigation" className="border-t border-slate-200 bg-[#f6f2ec] px-4 py-3 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-900"
                  onClick={() => setIsNavOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 pb-24 pt-8 md:px-6">
        <section aria-labelledby="hero-title" className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-[#f3efe9] px-6 py-12 shadow-[0_30px_80px_rgba(15,23,42,0.08)] md:px-10 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(2,132,199,0.11),transparent_28%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d7c7ac] bg-white/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-700">
                <Sparkles size={14} className="text-amber-600" />
                Software Engineer | AI/ML
              </div>

              <h1 id="hero-title" className="max-w-xl text-5xl font-semibold leading-[0.96] tracking-[-0.08em] text-slate-900 md:text-6xl">
                Asifur Rahman
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 md:text-xl">
                I build systems that connect ideas to real-world impact — blending software engineering, machine learning, and research to make technology clearer, more useful, and more human.
              </p>

              <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                I enjoy understanding how things work, exploring complex systems, and turning curiosity into practical solutions with a strong focus on learning, teaching, and building responsibly.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
                  View projects
                  <MoveRight size={16} />
                </a>
                <a href="mailto:asifurr38@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
                  <Mail size={16} />
                  Contact me
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3" aria-label="Social profiles">
                {socialLinks.map((link) => (
                  <SocialLink key={link.label} label={link.label} href={link.href} icon={link.icon} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-[#f9f6f2] p-5 shadow-[0_25px_50px_rgba(15,23,42,0.08)]">
                <div className="rounded-[22px] border border-slate-200 bg-[linear-gradient(135deg,#151b29_0%,#1d3557_30%,#7f4dff_100%)] p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-200">Profile</p>
                      <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em]">Software Engineer</h3>
                    </div>
                    <div className="rounded-full border border-white/25 bg-white/10 p-2">
                      <Code2 size={20} />
                    </div>
                  </div>

                  <div className="mt-10 space-y-5">
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-200">Current focus</p>
                      <p className="mt-2 text-lg font-medium">AI/ML systems, data-driven decision making, and software design.</p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-200">Location</p>
                        <p className="mt-2 flex items-center gap-2 text-sm font-medium"><MapPin size={14} /> Dhaka, Bangladesh</p>
                      </div>
                      <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-200">Research</p>
                        <p className="mt-2 flex items-center gap-2 text-sm font-medium"><BookOpen size={14} /> Published & accepted</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-sm md:p-8">
              <p className="eyebrow">About</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 md:text-4xl">
                Curious by default, practical by habit.
              </h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {['AI/ML', 'Software engineering', 'Research-driven thinking'].map((tag) => (
                  <span key={tag} className="chip subtle">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white/70 p-6 text-base leading-8 text-slate-700 shadow-sm md:p-8">
              <p>
                My interest in computers began in childhood, and it has stayed with me because I enjoy understanding how systems work, not just using them. That curiosity led me toward software development, AI, and machine learning, where I can explore technical problems deeply and turn them into useful, well-designed solutions.
              </p>
              <p className="mt-4">
                I like experimenting, building things, and learning from the process. I also enjoy teaching. Helping students move from confusion to understanding, even with a basic concept they struggled with before, is one of the most satisfying parts of learning for me and it strengthens my own understanding as well.
              </p>
            </div>
          </div>
        </section>

        <section id="expertise" className="section-shell">
          <SectionHeading
            eyebrow="Technical Expertise"
            title="Tools, systems, and methods shaped by research and product thinking."
            description="My work spans software engineering, AI/ML, data analysis, and practical application building — always grounded in understanding the problem before selecting the right approach."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-[24px] border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300">
                <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-200" />
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-900">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Real systems, academic work, and product-facing problem solving."
            description="Each project reflects a different stage of my engineering and research journey — from collaborative product work to algorithmic design and desktop or web application development."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white/80 shadow-sm"
              >
                <div className={`h-40 border-b border-slate-200 bg-gradient-to-br ${
                  project.accent === "rose"
                    ? "from-[#ffe4e6] via-[#fff1f2] to-[#fcd7d7]"
                    : project.accent === "amber"
                      ? "from-[#fef3c7] via-[#fff7ed] to-[#fde68a]"
                      : project.accent === "emerald"
                        ? "from-[#d1fae5] via-[#ecfdf5] to-[#bbf7d0]"
                        : project.accent === "cyan"
                          ? "from-[#cffafe] via-[#ecfeff] to-[#a5f3fc]"
                          : "from-[#ede9fe] via-[#f5f3ff] to-[#ddd6fe]"
                } p-5`}>
                  <div className="flex h-full items-start justify-between">
                    <div className="rounded-full border border-slate-300 bg-white/75 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-700">
                      {project.category}
                    </div>
                    {project.repo ? (
                      <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:text-slate-900">
                        Repo <ExternalLink size={12} />
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="space-y-5 p-6">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.05em] text-slate-900">{project.title}</h3>
                    {project.repo ? (
                      <p className="mt-2 text-sm text-slate-600">GitHub repository for the team project.</p>
                    ) : (
                      <p className="mt-2 text-sm text-slate-600">Academic or personal engineering project.</p>
                    )}
                  </div>

                  <p className="text-base leading-7 text-slate-700">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip subtle">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="research" className="section-shell">
          <SectionHeading
            eyebrow="Research & Publications"
            title="Academic work with a clear focus on AI, data, and applied systems."
            description="I value research that links methods to real-world problems — especially in AI, data analysis, and technology for decision support. My work includes published, accepted, and ongoing research across machine learning, cybersecurity, healthcare, transportation, and climate-informed analytics."
          />

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://scholar.google.com/citations?user=m0fdm2kAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            >
              View Google Scholar
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="mt-8 space-y-8">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Published</p>
              <div className="grid gap-4">
                {publishedResearch.map((paper) => (
                  <div key={paper.title} className="research-card published">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-900">{paper.title}</h3>
                      <span className="status-badge status-published">{paper.status}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
                      <span className="badge-label">{paper.venue}</span>
                      <span className="badge-label">{paper.authorPosition}</span>
                    </div>
                    <p className="mt-4 text-base leading-7 text-slate-700">{paper.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Accepted</p>
              <div className="grid gap-4">
                {acceptedResearch.map((paper) => (
                  <div key={paper.title} className="research-card accepted">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-900">{paper.title}</h3>
                      <span className="status-badge status-accepted">{paper.status}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
                      <span className="badge-label">{paper.venue}</span>
                      <span className="badge-label">{paper.authorPosition}</span>
                    </div>
                    <p className="mt-4 text-base leading-7 text-slate-700">{paper.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Submitted / Ongoing</p>
              <div className="grid gap-4">
                {ongoingResearch.map((paper) => (
                  <div key={paper.title} className="research-card ongoing">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-900">{paper.title}</h3>
                      <span className="status-badge status-ongoing">{paper.status}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
                      <span className="badge-label">{paper.authorPosition}</span>
                      {paper.venue ? <span className="badge-label">{paper.venue}</span> : null}
                    </div>
                    <p className="mt-4 text-base leading-7 text-slate-700">{paper.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section-shell">
          <SectionHeading
            eyebrow="Education & Recognition"
            title="A strong foundation in computer science with an interest in systems, engineering, and applied research."
            description="My academic training combines core CS foundations with software engineering, information systems, and applied problem solving."
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3 text-slate-900">
                <div className="rounded-full bg-[#e7f0ff] p-2 text-[#1f5bbf]">
                  <GraduationCap size={18} />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Education</p>
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-slate-900">{education.school}</h3>
              <ul className="mt-6 space-y-3 text-base leading-7 text-slate-700">
                <li>• {education.degree}</li>
                <li>• Major: {education.major}</li>
                <li>• Minor: {education.minor}</li>
                <li>• Expected graduation: {education.expectedGraduation}</li>
                <li>• CGPA: {education.cgpa}</li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-[#f5f0ff] p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3 text-slate-900">
                <div className="rounded-full bg-[#ede9fe] p-2 text-[#5b3fd0]">
                  <AwardIcon />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Recognition</p>
              </div>

              <ul className="mt-6 space-y-3 text-base leading-7 text-slate-700">
                {education.recognition.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <SectionHeading
            eyebrow="Beyond the Code"
            title="A life shaped by curiosity, clarity, and constant learning."
            description="Beyond engineering, I value the habits that keep me grounded: exploring, moving, thinking, and helping others understand."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {beyondCode.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#edf6ff] text-[#1d4ed8]">
                  <UserRound size={18} />
                </div>
                <h3 className="text-lg font-semibold tracking-[-0.04em] text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell pb-0">
          <div className="rounded-[32px] border border-slate-200 bg-[#111827] p-7 text-white shadow-[0_35px_90px_rgba(15,23,42,0.2)] md:p-10">
            <p className="eyebrow text-slate-300">Contact</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.06em] text-white md:text-5xl">
              Open to meaningful engineering, research, and collaboration opportunities.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              I am particularly interested in software engineering, AI/ML research, data-intensive systems, and opportunities to build practical solutions with strong technical and research foundations.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-2xl border border-white/15 bg-white/5 p-4 transition hover:border-white/25 hover:bg-white/10"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-300">{method.label}</p>
                  <p className="mt-2 text-sm font-medium text-white">{method.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl items-center justify-between border-t border-slate-200 px-4 py-8 text-sm text-slate-600 md:px-6">
        <p>© 2026 Asifur Rahman</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-slate-900">
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

function AwardIcon() {
  return <Briefcase size={18} />;
}
