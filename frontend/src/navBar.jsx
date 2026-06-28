import { useState } from 'react'
import { fetchJson } from './api.js'
import './navbar.css'

const navLinks = [
  { label: 'Home', page: 'home' },
  { label: 'Universities', page: 'universities' },
  { label: 'Scholarship', page: 'scholarships' },
  { label: 'About Us', page: 'about' },
]

function BrandLogo({ onNavigate }) {
  return (
    <button className="navbar__brand" type="button" aria-label="NextStep home" onClick={() => onNavigate('home')}>
      <span className="navbar__brand-mark">NextStep</span>
    </button>
  )
}

function SearchBar({ value, onChange, onSubmit, results, onNavigate }) {
  return (
    <form className="navbar__search" onSubmit={onSubmit} role="search">
      <label className="sr-only" htmlFor="nav-search">Search</label>
      <input
        id="nav-search"
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search universities or scholarships"
        autoComplete="off"
      />
      <button type="submit">Find</button>
      {results.length > 0 ? (
        <div className="navbar__search-results" aria-label="Search results">
          {results.map((item) => (
            <button
              key={`${item.type}-${item.id}`}
              type="button"
              className="navbar__result"
              onClick={() => {
                onChange({ target: { value: '' } })
                onNavigate(item.page)
              }}
            >
              <span className="navbar__result-title">{item.title}</span>
            </button>
          ))}
        </div>
      ) : null}
    </form>
  )
}

function NavLinks({ activePage, onNavigate }) {
  return (
    <nav className="navbar__links" aria-label="Primary">
      {navLinks.map((link) => (
        <button
          key={link.label}
          type="button"
          className={activePage === link.page ? 'navbar__link navbar__link--active' : 'navbar__link'}
          onClick={() => onNavigate(link.page)}
        >
          {link.label}
        </button>
      ))}
    </nav>
  )
}

function AuthActions({ user, onLogin, onSignup, onLogout }) {
  if (user) {
    return (
      <div className="navbar__auth navbar__auth--signed-in">
        <span className="navbar__user">Welcome, {user.username || 'Student'}</span>
        <button type="button" className="navbar__secondary" onClick={onLogout}>
          Logout
        </button>
      </div>
    )
  }

  return (
    <div className="navbar__auth">
      <button type="button" className="navbar__secondary" onClick={onLogin}>
        Login
      </button>
      <button type="button" className="navbar__primary" onClick={onSignup}>
        Sign Up
      </button>
    </div>
  )
}

export default function Navbar({ activePage, onNavigate, user, onLogout }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const normalizedQuery = query.trim().toLowerCase()

  const runSearch = async (event) => {
    event.preventDefault()

    if (!normalizedQuery) {
      setResults([])
      return
    }

    try {
      const [universities, scholarships] = await Promise.all([
        fetchJson('/api/universities'),
        fetchJson('/api/scholarships'),
      ])

      const universityMatches = (universities || [])
        .filter((item) => {
          const campus = `${item.campusName || ''} ${item.shortName || ''}`.toLowerCase()
          return campus.includes(normalizedQuery)
        })
        .map((item) => ({
          id: item.universityId ?? item.id,
          type: 'University',
          title: item.campusName || item.shortName || 'University',
          page: 'universities',
        }))

      const scholarshipMatches = (scholarships || [])
        .filter((item) => `${item.title || ''} ${item.description || ''}`.toLowerCase().includes(normalizedQuery))
        .map((item) => ({
          id: item.scholarshipId ?? item.id,
          type: 'Scholarship',
          title: item.title || 'Scholarship',
          page: 'scholarships',
        }))

      const combined = [...universityMatches, ...scholarshipMatches].slice(0, 6)
      setResults(combined)
    } catch {
      setResults([])
    }
  }

  return (
    <header className="navbar" role="banner">
      <div className="navbar__shell">
        <BrandLogo onNavigate={onNavigate} />
        <NavLinks activePage={activePage} onNavigate={onNavigate} />
        <SearchBar
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onSubmit={runSearch}
          results={results}
          onNavigate={onNavigate}
        />
        <AuthActions
          user={user}
          onLogin={() => onNavigate('login')}
          onSignup={() => onNavigate('signup')}
          onLogout={onLogout}
        />
      </div>
    </header>
  )
}
