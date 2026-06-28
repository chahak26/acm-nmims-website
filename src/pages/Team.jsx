import PageHeader from '../components/PageHeader'
import TeamCard from '../components/TeamCard'
import team from '../data/team.json'

const sections = [
  { key: 'faculty', title: 'Faculty Coordinator' },
  { key: 'leadership', title: 'Leadership' },
  { key: 'core', title: 'Core Committee' },
  { key: 'technical', title: 'Technical Team' },
  { key: 'design', title: 'Design Team' },
  { key: 'events', title: 'Event Management' },
  { key: 'alumni', title: 'Alumni Mentors' },
]

export default function Team() {
  return (
    <div>
      <PageHeader title="Team & Leadership" subtitle="Meet the people driving ACM NMIMS Indore forward." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-12">
        {sections.map(({ key, title }) => (
          team[key]?.length > 0 && (
            <section key={key}>
              <h2 className="font-display text-xl font-bold text-white mb-6">{title}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {team[key].map((m) => <TeamCard key={m.id} member={m} />)}
              </div>
            </section>
          )
        ))}
      </div>
    </div>
  )
}
