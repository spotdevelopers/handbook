module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  themeConfig: {
    docsDir: 'docs',
    repo: 'spotdevelopers/handbook',
    sidebar: [
      '/',
      '/welcome',
      '/test',
      '/instalación-y-configuración-de-publitrackers'
    ],
    nav: [
      {
        text: 'Admin',
        link: '/admin/',
      }
    ]
  }
}
