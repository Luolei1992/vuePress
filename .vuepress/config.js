module.exports = {
   title: 'Hello vuePress',
   description: 'Test vuePress',
   // dest: 'docs/.vuepress/dist',
   // base:'/vuepress/',
   themeConfig: {
      // navbar: false,   //禁用所有导航栏

      // repo: 'luolei/testvuepress',
      editLinks: true,
      docsDir: 'docs',
      nav: [
         { text: 'Home', link: '/' },
         { text: 'foo', link: '/foo/' },
         { text: 'External', link: 'https://google.com' },
         {
            text: 'Languages',
            items: [
               { text: 'Chinese', link: '/language/chinese' },
               { text: 'Japanese', link: '/language/japanese' }
            ]
         },
         {
            text: 'Languages',
            items: [
               {
                  text: 'Group1', items: [
                     { text: 'Chinese', link: '/language/chinese' },
                     { text: 'Japanese', link: '/language/japanese' }
                  ]
               },
               {
                  text: 'Group2', items: [
                     { text: 'Chinese', link: '/language/chinese' },
                     { text: 'Japanese', link: '/language/japanese' }
                  ]
               }
            ]
         }
      ],
      sidebar: {
         '/foo/': [
            '',     /* /foo/ */
            'one',  /* /foo/one.html */
            'two'   /* /foo/two.html */
         ],
         '/': [
            '',        /* / */
            'contact', /* /contact.html */
            'about',    /* /about.html */
         ]
      }
      // displayAllHeaders: true,   //显示页面所有的标题链接
   }
}