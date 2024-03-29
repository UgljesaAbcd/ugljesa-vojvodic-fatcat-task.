export const dataLayoutConfig = [
    {
        type: 'layoutSection',
        sectionKey: 1,
        props: {},
        components: [
            {
                type: 'componentHero',
                componentKey: 1,
                props: { title: 'I am Hero', image: '/media/hero.png' },
            },
        ],
    },
    {
        type: 'layoutSection',
        sectionKey: 2,
        props: {},
        components: [
            {
                type: 'componentItemsShowcase',
                componentKey: 1,
                props: {
                    items: [
                        {
                            title: 'Title 1',
                            description: 'this is description 1',
                        },
                        {
                            title: 'Title 2',
                            description: 'this is description 2',
                        },
                    ],
                },
            },
            {
                type: 'componentTrustBar',
                componentKey: 2,
                props: {
                    images: [
                        '/media/cats/cat_1.png',
                        '/media/cats/cat_3.png',
                        '/media/cats/cat_7.png',
                    ],
                },
            },
        ],
    },
];
