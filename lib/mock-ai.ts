export const mockGenerateSalesCopy = async (data: any) => {
  await new Promise((resolve) => setTimeout(resolve, 2500))

  return {
    headline: `Transform Your Results with ${data.productName}`,
    subheadline: `The smarter way for ${data.audience} to achieve faster and better outcomes.`,
    description: `${data.productName} is designed to help users solve ${data.description} with a premium and reliable solution.`,
    benefits: [
      'Increase efficiency instantly',
      'Save time and reduce manual work',
      'Premium user experience',
    ],
    features: data.features.split(','),
    socialProof: 'Trusted by 10,000+ happy customers worldwide',
    pricingText: `Only ${data.price} for complete access`,
    ctaText: 'Get Started Today',
  }
}