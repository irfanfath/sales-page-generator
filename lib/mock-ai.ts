export const mockGenerateSalesCopy = async (data: any) => {
  await new Promise((resolve) => setTimeout(resolve, 2500))

  return {
    headline: `Unlock Better Results with ${data.productName}`,
    subheadline: `Built for ${data.audience} who want speed, efficiency, and growth.`,
    description: `${data.productName} helps eliminate the pain of ${data.description} by delivering a modern and highly optimized solution for today's market demand.`,
    benefits: [
      'Boost productivity with less manual effort',
      'Increase customer trust and conversion',
      'Easy to use and professionally designed',
    ],
    features: data.features.split(',').map((f: string) => f.trim()),
    socialProof: 'Trusted by over 12,000+ users and fast-growing businesses.',
    pricingText: `Start today for only ${data.price}`,
    ctaText: 'Generate More Sales Now',
  }
}