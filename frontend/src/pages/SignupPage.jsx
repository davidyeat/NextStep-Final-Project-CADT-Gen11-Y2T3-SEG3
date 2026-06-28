import { useState } from 'react'
import { fetchJson } from '../api.js'

export default function SignupPage({ onAuthenticated, onNavigate }) {
  const [form, setForm] = useState({ username: '', email: '', password: '' })
  const [message, setMessage] = useState('')

  const submitSignup = async (event) => {
    event.preventDefault()
    setMessage('Creating account...')

    try {
      const data = await fetchJson('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(form),
      })

      onAuthenticated(data.user)
      setMessage('Account created successfully.')
      onNavigate('home')
    } catch {
      setMessage('Sign up failed. Try a different email address.')
    }
  }

  return (
    <section className="page page--narrow">
      <form className="auth-card" onSubmit={submitSignup}>
        <p className="page__eyebrow">Sign Up</p>
        <h2>Create your account.</h2>
        <label>
          Username
          <input type="text" value={form.username} onChange={(event) => setForm({ ...form, username: event.target.value })} required />
        </label>
        <label>
          Email
          <input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
        </label>
        <label>
          Password
          <input type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} required />
        </label>
        <button type="submit" className="button button--solid">Create Account</button>
        <p className="page__muted">{message}</p>
        <button type="button" className="text-button" onClick={() => onNavigate('login')}>
          Already have an account? Login
        </button>
      </form>
    </section>
  )
}
