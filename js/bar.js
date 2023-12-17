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
                    link: '/guides/World/Biomes',
                },
                {
                    title: 'NPC',
                    link: '/guides/World/NPCs'
                },
                {
                    title: '攻略',
                    link: '/guides/World/Raiders'
                },
                {
                    title: '怪物',
                    link: '/guides/World/Monsters'
                },
                {
                    title: '动物',
                    link: '/guides/World/Animals'
                },
                {
                    title: '小动物',
                    link: '/guides/World/Critters'
                },
                {
                    title: '掉落物',
                    link: '/guides/World/Objects'
                },
                {
                    title: '植物',
                    link: '/guides/World/Plants'
                },
                {
                    title: 'BOSS',
                    link: '/guides/World/Bosses'
                }



            ]
        },
        {
            title: '物品',
            children: [
                {
                    title: '装备',
                    link: '/guides/Items/Equipment'
                },
                {
                    title: '材料',
                    link: '/guides/Items/Materials'
                },
                {
                    title: '消耗品',
                    link: '/guides/Items/Consumables'
                },
                {
                    title: '地面',
                    link: '/guides/Items/Tiles'
                },
                {
                    title: '家具种植',
                    link: '/guides/Items/Objects'
                },
                {
                    title: '电路',
                    link: '/guides/Items/Wiring'
                },
                {
                    title: '乱八七糟',
                    link: '/guides/Items/Miscellaneous'
                },
            ]
        },
        {
            title: '多人游戏',
            children:[
                {
                    title: '联机教程',
                    link: '/guides/Multiplayer'
                },
                {
                    title: '服务器',
                    link: '/guides/Server'
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
