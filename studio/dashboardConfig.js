export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6200fb57e6d89700b19c9203',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jmcp993p',
                  apiId: '6321abf3-23f0-4b8f-9abe-68439bd2f4c1'
                },
                {
                  buildHookId: '6200fb579a13fc00681abfef',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-oqhnqbxk',
                  apiId: '3b4575e5-83ea-40a9-a5e5-ed390732b643'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Mjelstad91/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-oqhnqbxk.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
