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

export interface User {
  name: string
  email: string
  password: string
}

const USERS_KEY = 'ai-sales-users'
const SESSION_KEY = 'ai-sales-session'

export const getUsers = (): User[] => {
  if (typeof window === 'undefined') return []
  return JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
}

export const saveUsers = (users: User[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export const registerUser = (user: User) => {
  const users = getUsers()

  const exists = users.find((u) => u.email === user.email)

  if (exists) {
    return {
      success: false,
      message: 'Email already registered',
    }
  }

  const updatedUsers = [...users, user]
  saveUsers(updatedUsers)

  localStorage.setItem(SESSION_KEY, JSON.stringify(user))

  return {
    success: true,
    message: 'Register success',
  }
}

export const loginUser = (email: string, password: string) => {
  const users = getUsers()

  const found = users.find((u) => u.email === email && u.password === password)

  if (!found) {
    return {
      success: false,
      message: 'Invalid credentials',
    }
  }

  localStorage.setItem(SESSION_KEY, JSON.stringify(found))

  return {
    success: true,
    message: 'Login success',
  }
}