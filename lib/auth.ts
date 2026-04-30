export const saveSession = (user:any) => {
  localStorage.setItem('ai-sales-session', JSON.stringify(user))
}

export const getSession = () => {
  if (typeof window === 'undefined') return null
  return JSON.parse(localStorage.getItem('ai-sales-session') || 'null')
}

export const clearSession = () => {
  localStorage.removeItem('ai-sales-session')
}

export const isAuthenticated = () => {
  return !!getSession()
}