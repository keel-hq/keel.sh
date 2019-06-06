module.exports = {
  title: 'Keel',
  description: 'Kubernetes Operator to automate Helm, DaemonSet, StatefulSet & Deployment updates',
  themeConfig: {
    logo: '/img/logo_small.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/docs/' },
      { text: 'Examples', link: '/examples/' },     
      {
        text: 'External',
        items: [
          { text: 'Templating', link: 'https://about.sunstone.dev' },
          { text: 'Webhooks & Tunneling', link: 'https://webhookrelay.com' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/keel-hq/keel' },
    ]
  },
  ga: "UA-103394074-1",
  dest: "dist"
}

