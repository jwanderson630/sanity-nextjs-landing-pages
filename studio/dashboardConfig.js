export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5d5429293094e76995e51606',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xww3qcj4',
                  apiId: 'd4cda654-09dd-4315-b0b8-5a34de88f1f8'
                },
                {
                  buildHookId: '5d5429296c7db61636d80d49',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tq9xwhan',
                  apiId: '93ecf56a-0444-4d09-ade5-9ad12e0eff23'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yoej262/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tq9xwhan.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
