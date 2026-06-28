import { useState } from 'react'
import { fetchJson } from '../api.js'

export default function LoginPage({ onAuthenticated, onNavigate }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const [message, setMessage] = useState('')

  const submitLogin = async (event) => {
    event.preventDefault()
    setMessage('Signing in...')

    try {
      const data = await fetchJson('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(form),
      })

      onAuthenticated(data.user)
      setMessage('Login successful.')
      onNavigate('home')
    } catch {
      setMessage('Login failed. Check your email and password.')
    }
  }

  return (
    <section className="page page--narrow">
      <form className="auth-card" onSubmit={submitLogin}>
        <p className="page__eyebrow">Login</p>
        <h2>Welcome back.</h2>
        <label>
          Email
          <input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
        </label>
        <label>
          Password
          <input type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} required />
        </label>
        <button type="submit" className="button button--solid">Login</button>
        <p className="page__muted">{message}</p>
        <button type="button" className="text-button" onClick={() => onNavigate('signup')}>
          Need an account? Sign up
        </button>
      </form>
    </section>
  )
}
