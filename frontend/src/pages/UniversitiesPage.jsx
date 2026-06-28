import { useEffect, useState } from 'react'
import { fetchJson } from '../api.js'

export default function UniversitiesPage() {
  const [universities, setUniversities] = useState([])
  const [status, setStatus] = useState('Loading universities...')

  useEffect(() => {
    const loadUniversities = async () => {
      try {
        const data = await fetchJson('/api/universities')
        setUniversities(data)
        setStatus(data.length ? `${data.length} universities available.` : 'No universities found.')
      } catch {
        setUniversities([])
        setStatus('Unable to load universities right now.')
      }
    }

    loadUniversities()
  }, [])

  return (
    <section className="page">
      <div className="page__header">
        <p className="page__eyebrow">Universities</p>
        <h2>Explore institutions from the backend catalog.</h2>
        <p className="page__muted">{status}</p>
      </div>

      <div className="card-grid">
        {universities.map((university) => (
          <article className="data-card" key={university.universityId ?? university.id}>
            <div className="data-card__top">
              <span className="data-card__badge">University</span>
              <h3>{university.campusName || university.shortName || 'University'}</h3>
            </div>
            <p>{university.description || university.vision || 'Detailed information is available in the backend record.'}</p>
            <dl className="data-card__meta">
              <div>
                <dt>Location</dt>
                <dd>{[university.city, university.province].filter(Boolean).join(', ') || 'Not listed'}</dd>
              </div>
              <div>
                <dt>Website</dt>
                <dd>{university.websiteUrl || 'Not listed'}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}
