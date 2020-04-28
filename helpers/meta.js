export const getMeta = (meta) => {
  return [
    // Primary Meta Tags
    { name: 'title', content: `Pavel Gonzales | ${meta.title || 'Front-end developer'}` },
    { name: 'description', content: meta.text || '' },
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `https://pavelgonzales.com${meta.url}` },
    { property: 'og:title', content: `Pavel Gonzales | ${meta.title || 'Front-end developer'}` },
    { property: 'og:description', content: meta.text || '' },
    // { property: 'og:image', content: '/og.jpg' },
    // Twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: `https://pavelgonzales.com${meta.url}` },
    { property: 'twitter:title', content: `Pavel Gonzales | ${meta.title || 'Front-end developer'}` },
    { property: 'twitter:description', content: meta.text || '' }
    // { property: 'twitter:image', content: '/og.jpg' }
  ]
}
