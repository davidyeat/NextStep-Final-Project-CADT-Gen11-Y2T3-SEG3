import { useEffect, useState } from 'react'
import { fetchJson } from '../api.js'

export default function HomePage({ onNavigate }) {
  const [counts, setCounts] = useState({ universities: 0, scholarships: 0 })

  useEffect(() => {
    const loadCounts = async () => {
      try {
        const [universities, scholarships] = await Promise.all([
          fetchJson('/api/universities'),
          fetchJson('/api/scholarships'),
        ])

        setCounts({
          universities: universities.length,
          scholarships: scholarships.length,
        })
      } catch {
        setCounts({ universities: 0, scholarships: 0 })
      }
    }

    loadCounts()
  }, [])

  return (
    <section className="page page--hero">
      <div className="page__panel page__panel--hero">
        <p className="page__eyebrow">Education planning made simple</p>
        <h1>Find the right university and scholarship faster.</h1>
        <p className="page__lead">
          NextStep brings the backend catalog together in one clean place, so students can browse universities, compare scholarships, and move into sign in or registration without friction.
        </p>

        <div className="stats-grid">
          <article className="stat-card">
            <strong>{counts.universities}</strong>
            <span>Universities loaded from the backend</span>
          </article>
          <article className="stat-card">
            <strong>{counts.scholarships}</strong>
            <span>Scholarships loaded from the backend</span>
          </article>
        </div>

        <div className="page__actions">
          <button type="button" className="button button--solid" onClick={() => onNavigate('universities')}>
            Browse Universities
          </button>
          <button type="button" className="button button--outline" onClick={() => onNavigate('scholarships')}>
            Explore Scholarships
          </button>
        </div>
      </div>
    </section>
  )
}
