new Docute({
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
    ]
});