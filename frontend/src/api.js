const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000').replace(/\/$/, '')

function resolveApiUrl(path) {
  if (/^https?:\/\//i.test(path)) {
    return path
  }

  if (path.startsWith('/api')) {
    return `${API_BASE_URL}${path}`
  }

  return path
}

export async function fetchJson(path, options = {}) {
  const response = await fetch(resolveApiUrl(path), {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || `Request failed with status ${response.status}`)
  }

  return response.status === 204 ? null : response.json()
}
