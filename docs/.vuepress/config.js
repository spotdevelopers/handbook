module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/images/Logo.png' }]
  ],
  title: 'SPOT: Handbook for DEVELOPERS',
  description: 'The official handbook for developers at SPOT',
  themeConfig: {
    logo: '/images/Spot.svg',
    
    docsDir: 'docs',
    repo: 'spotdevelopers/handbook',
    sidebar: [
      '/python-guidelines',
      '/python',
      '/nodejs',
      '/frontend',
      '/css',
      '/plataformas',
      '/control',
      '/practicas',
      '/Seguridad',
      '/seguridad2',
      '/comunicacion',
      '/comunicacion2',
      '/cheklist'
    ],
    nav: [
      { text: 'web', link: '/web'},
      { text: 'Admin', link: '/admin/', }
    ]
  }
}
