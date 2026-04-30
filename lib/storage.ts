export const getSavedPages = () => JSON.parse(localStorage.getItem('saved-sales-pages') || '[]')

export const savePage = (page:any) => {
  const existing = getSavedPages()
  existing.push(page)
  localStorage.setItem('saved-sales-pages', JSON.stringify(existing))
}

export const deletePage = (index:number) => {
  const existing = getSavedPages()
  existing.splice(index,1)
  localStorage.setItem('saved-sales-pages', JSON.stringify(existing))
}