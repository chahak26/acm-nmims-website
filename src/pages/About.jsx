import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const values = [
  { title: 'Innovation', desc: 'Pushing boundaries with cutting-edge technology and creative problem-solving.', icon: '💡' },
  { title: 'Collaboration', desc: 'Building together through teamwork, mentorship, and open knowledge sharing.', icon: '🤝' },
  { title: 'Excellence', desc: 'Striving for the highest standards in every event, project, and initiative.', icon: '🏆' },
  { title: 'Inclusivity', desc: 'Welcoming all STME students regardless of background, branch, or experience level.', icon: '🌐' },
]

const timeline = [
  { year: '2023', title: 'Chapter Founded', desc: 'ACM Student Chapter established at NMIMS Indore STME with 30 founding members.' },
  { year: '2024', title: 'First Hackathon', desc: 'CodeStorm Hackathon drew 120+ participants — chapter\'s first flagship event.' },
  { year: '2024', title: '100 Members', desc: 'Crossed 100 active member milestone with expanded workshop program.' },
  { year: '2025', title: 'ACM-W Launch', desc: 'Launched ACM-W Women in Computing initiative for diversity and outreach.' },
  { year: '2025', title: '20+ Workshops', desc: 'Organized 20+ technical workshops covering web, AI/ML, cloud, and cybersecurity.' },
  { year: '2026', title: 'WebSprint 2026', desc: 'Official chapter website initiative — building our digital legacy.' },
]

export default function About() {
  return (
    <div>
      <PageHeader title="About ACM & Chapter" subtitle="Learn about ACM globally and our local chapter at NMIMS Indore STME." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        <section className="grid md:grid-cols-2 gap-8">
          <Reveal direction="left">
            <div className="glass rounded-2xl p-8 card-hover h-full">
              <h2 className="font-display text-xl font-bold text-cyan mb-4">About ACM</h2>
              <p className="text-slate-400 leading-relaxed">
                The Association for Computing Machinery (ACM) is the world's largest educational and scientific computing society. With over 100,000 members globally, ACM unites computing educators, researchers, and professionals to advance computing as a science and profession.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={100}>
            <div className="glass rounded-2xl p-8 card-hover h-full">
              <h2 className="font-display text-xl font-bold text-purple mb-4">Our Chapter</h2>
              <p className="text-slate-400 leading-relaxed">
                ACM NMIMS Indore is the official Student Chapter at the School of Technology Management & Engineering (STME). We organize workshops, hackathons, tech talks, and outreach programs to build a vibrant computing community on campus.
              </p>
            </div>
          </Reveal>
        </section>

        <section>
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white mb-6">Chapter Objectives</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="glass rounded-2xl p-8">
              <ul className="grid sm:grid-cols-2 gap-4 text-slate-400">
                {[
                  'Promote computing education and research among students',
                  'Organize technical events, workshops, and competitions',
                  'Connect students with industry professionals and alumni',
                  'Support ACM award applications and global recognition',
                  'Foster open-source culture and collaborative projects',
                  'Build a long-term digital archive of chapter activities',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 hover:text-cyan transition-colors">
                    <span className="text-cyan mt-1">▸</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <section>
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white mb-6">Core Values</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="glass rounded-2xl p-6 text-center card-hover h-full group">
                  <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300 inline-block">{v.icon}</div>
                  <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-slate-400 text-sm">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section>
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white mb-6">Chapter Journey</h2>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-purple to-pink hidden sm:block" />
            <div className="space-y-6">
              {timeline.map((t, i) => (
                <Reveal key={t.year + t.title} delay={i * 80} direction="left">
                  <div className="flex gap-6 items-start sm:pl-10 relative">
                    <div className="hidden sm:block absolute left-2.5 w-3 h-3 rounded-full bg-cyan border-2 border-navy timeline-dot" />
                    <div className="glass rounded-2xl p-6 flex-1 card-hover">
                      <span className="text-cyan text-sm font-display font-bold">{t.year}</span>
                      <h3 className="font-semibold text-white mt-1">{t.title}</h3>
                      <p className="text-slate-400 text-sm mt-2">{t.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section>
          <Reveal direction="scale">
            <h2 className="font-display text-2xl font-bold text-white mb-6">Faculty Coordinator</h2>
            <div className="glass rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 card-hover">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan/30 to-purple/30 flex items-center justify-center font-display font-bold text-2xl text-white shrink-0 animate-pulse-glow">
                SS
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Dr. Shruti Sharma</h3>
                <p className="text-cyan text-sm">Faculty Coordinator — Computer Engineering, STME</p>
                <p className="text-slate-400 text-sm mt-2">Guiding the ACM chapter's growth, industry collaborations, and student development initiatives since 2023.</p>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  )
}
