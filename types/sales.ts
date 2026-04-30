export interface SalesFormData {
  productName: string
  description: string
  features: string
  audience: string
  price: string
  usp: string
  template: string
}

export interface GeneratedSalesCopy {
  headline: string
  subheadline: string
  description: string
  benefits: string[]
  features: string[]
  socialProof: string
  pricingText: string
  ctaText: string
}

export interface SavedSalesPage extends SalesFormData {
  generated: GeneratedSalesCopy
}