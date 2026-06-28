import { useEffect, useState } from 'react'
import { fetchJson } from '../api.js'

export default function ScholarshipsPage() {
  const [scholarships, setScholarships] = useState([])
  const [status, setStatus] = useState('Loading scholarships...')

  useEffect(() => {
    const loadScholarships = async () => {
      try {
        const data = await fetchJson('/api/scholarships')
        setScholarships(data)
        setStatus(data.length ? `${data.length} scholarships available.` : 'No scholarships found.')
      } catch {
        setScholarships([])
        setStatus('Unable to load scholarships right now.')
      }
    }

    loadScholarships()
  }, [])

  return (
    <section className="page">
      <div className="page__header">
        <p className="page__eyebrow">Scholarships</p>
        <h2>Review funding opportunities from the backend catalog.</h2>
        <p className="page__muted">{status}</p>
      </div>

      <div className="card-grid">
        {scholarships.map((scholarship) => (
          <article className="data-card" key={scholarship.scholarshipId ?? scholarship.id}>
            <div className="data-card__top">
              <span className="data-card__badge">Scholarship</span>
              <h3>{scholarship.title || 'Scholarship'}</h3>
            </div>
            <p>{scholarship.description || 'Details are available in the backend record.'}</p>
            <dl className="data-card__meta">
              <div>
                <dt>Study in</dt>
                <dd>{scholarship.studyIn || 'Not listed'}</dd>
              </div>
              <div>
                <dt>Deadline</dt>
                <dd>{scholarship.applicationDeadline || 'Not listed'}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}
