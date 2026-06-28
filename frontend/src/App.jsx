import { useEffect, useState } from 'react'
import Navbar from './navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import UniversitiesPage from './pages/UniversitiesPage.jsx'
import ScholarshipsPage from './pages/ScholarshipsPage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import { fetchJson } from './api.js'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await fetchJson('/api/users/profile')
        setUser(profile)
      } catch {
        setUser(null)
      }
    }

    loadProfile()
  }, [])

  const handleLogout = async () => {
    try {
      await fetchJson('/api/auth/logout', { method: 'POST' })
    } finally {
      setUser(null)
      setActivePage('home')
    }
  }

  const handleAuthenticated = (nextUser) => {
    setUser(nextUser)
    setActivePage('home')
  }

  const renderPage = () => {
    switch (activePage) {
      case 'universities':
        return <UniversitiesPage />
      case 'scholarships':
        return <ScholarshipsPage />
      case 'about':
        return <AboutUsPage />
      case 'login':
        return <LoginPage onAuthenticated={handleAuthenticated} onNavigate={setActivePage} />
      case 'signup':
        return <SignupPage onAuthenticated={handleAuthenticated} onNavigate={setActivePage} />
      case 'home':
      default:
        return <HomePage onNavigate={setActivePage} />
    }
  }

  return (
    <>
      <Navbar activePage={activePage} onNavigate={setActivePage} user={user} onLogout={handleLogout} />
      <main className="app-main">{renderPage()}</main>
    </>
  )
}

export default App
