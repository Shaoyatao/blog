module.exports = {
    title: '个人主页',
    description: '邵亚涛的博客',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            {
                text: '博文',
                items: [
                    { text: 'Web', link: '/web/' },
                    { text: 'MarkDown', link: '/markdown/' },
                    { text: 'HTML5', link: '/html5/' },
                    { text: 'CSS3', link: '/css3/' },
                    { text: 'JavaScript', link: '/javascript/' },
                ]
            },
            { text: '博客搭建', link: '/blog/' },
            {
                text: 'github',
                link: 'https://github.com/Shaoyatao/blog',
                target: '_blank'
            },
        ],
        sidebar: {
            "/blog/": ["", "question"],
            "/css3/": [""]
        },
        sidebarDepth: 3,
        lastUpdated: 'Last Updated',
    }
}