new Docute({
    title: 'Necesse中文WIKI',
    nav: [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: '英文WIKI',
            link: 'https://necessewiki.com/Main_Page'
        },
        {
            title: 'Necesse官网',
            link: 'https://necessegame.com/'
        },
        {
            title: 'Steam',
            link: 'https://store.steampowered.com/app/1169040/_Necesse/'
        },
        // A dropdown menu
        {
            title: '交流',
            children: [
                {
                    title: '贴吧',
                    link: 'https://tieba.baidu.com/f?kw=necesse&ie=utf-8&tab=main'
                },
                {
                    title: '联机交流QQ群',
                    link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=yBJ6vVb0RuYOYz_8Tfzu1KYC6P-sDS1e&authKey=FdIAOQQ1n9jLilRhAkuDK9uwx4PXxI6Lb7xRJ7GPJSIvWnRnYJIYk%2FWgstfyw2vY&noverify=0&group_code=294072398'
                }
            ]
        }
    ],
    sidebar: [
        // A sidebar item, with child links
        {
            title: '世界',
            children: [
                {
                    title: '生物群落',
                    link: '/guide/Biomes'
                },
                {
                    title: 'NPC',
                    link: '/guide/NPCs'
                },
                {
                    title: '攻略',
                    link: '/guide/Raiders'
                },
                {
                    title: '怪物',
                    link: '/guide/Monsters'
                },
                {
                    title: '动物',
                    link: '/guide/Animals'
                },
                {
                    title: '小动物',
                    link: '/guide/Critters'
                },
                {
                    title: '掉落物',
                    link: '/guide/Objects'
                },
                {
                    title: '植物',
                    link: '/guide/Plants'
                },
                {
                    title: 'BOSS',
                    link: '/guide/Bosses'
                }



            ]
        },
        {
            title: '物品',
            children: [
                {
                    title: '装备',
                    link: '/guide/Equipment'
                },
                {
                    title: '材料',
                    link: '/guide/Materials'
                },
                {
                    title: '消耗品',
                    link: '/guide/Consumables'
                },
                {
                    title: '地面',
                    link: '/guide/Tiles'
                },
                {
                    title: '家具种植',
                    link: '/guide/Objects'
                },
                {
                    title: '电路',
                    link: '/guide/Wiring'
                },
                {
                    title: '乱八七糟',
                    link: '/guide/Miscellaneous'
                },
            ]
        },
        {
            title: 'Guide',
            children: [
                {
                    title: 'Getting Started',
                    link: '/guide/getting-started'
                },
                {
                    title: 'Installation',
                    link: '/guide/installation'
                }
            ]
        },
        // An external link
        {
            title: 'GitHub',
            link: 'https://github.com/egoist/docute'
        }
    ],
    plugins: [
        searchBar(SearchResult)
    ],
 });
