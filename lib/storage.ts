import { getSession } from './auth'

export const getSavedPages = () => {
  const session = getSession()
  const all = JSON.parse(localStorage.getItem('saved-sales-pages') || '{}')
  return all[session?.email] || []
}

export const savePage = (page:any) => {
  const session = getSession()
  const all = JSON.parse(localStorage.getItem('saved-sales-pages') || '{}')
  const existing = all[session.email] || []
  existing.push(page)
  all[session.email] = existing
  localStorage.setItem('saved-sales-pages', JSON.stringify(all))
}

export const deletePage = (index:number) => {
  const session = getSession()
  const all = JSON.parse(localStorage.getItem('saved-sales-pages') || '{}')
  const existing = all[session.email] || []
  existing.splice(index,1)
  all[session.email] = existing
  localStorage.setItem('saved-sales-pages', JSON.stringify(all))
}