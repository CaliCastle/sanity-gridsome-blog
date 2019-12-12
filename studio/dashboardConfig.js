export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5df1ed30de143c380ea5f45c',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-x5m3wrht',
                  apiId: '3f037769-7004-455b-a715-b04adbea84e8'
                },
                {
                  buildHookId: '5df1ed30c67aa776af94e099',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-fytjqu67',
                  apiId: '6bab35c6-fc95-4389-884d-b2214c836b5e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CaliCastle/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-fytjqu67.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
