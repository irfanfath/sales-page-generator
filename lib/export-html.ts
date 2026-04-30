import { saveAs } from 'file-saver'

export const exportHTML = (productName:string, generated:any) => {
  const html = `
  <html>
   <head><title>${productName}</title></head>
   <body style="font-family:Arial;padding:40px;">
    <h1>${generated.headline}</h1>
    <h2>${generated.subheadline}</h2>
    <p>${generated.description}</p>
    <h3>${generated.pricingText}</h3>
    <button>${generated.ctaText}</button>
   </body>
  </html>`

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
  saveAs(blob, `${productName}.html`)
}