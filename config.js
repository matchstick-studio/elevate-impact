var config = {
    style: 'mapbox://styles/kollinsayz/ckoypfzer2qzi17mh891t1iyz/?fresh=true',
    accessToken: 'pk.eyJ1Ijoia29sbGluc2F5eiIsImEiOiJjaWVoNzJxcTcwMDlvc3JtMXBtNmg4aWl6In0.T8YV7TzgBTTWQT19_pjceQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'all',
            alignment: 'left',
            hidden: false,
            title: 'Uganda',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [32.68233, 1.08554],
                zoom: 6.90,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'mukono',
            alignment: 'right',
            hidden: false,
            title: 'Mukono',
            image: '',
            description: 'Elevate has worked in Mukono district since 2016. Since then, we have been conducting an internal evaluation to measure the impact of our Community Engagement program.',
            vt: {
                schools: 132,
                pupils: 59107,
                teachers: 1173,
                community: 7920
            },
            tt: {
                schools: 655,
                pupils: 2055,
                teachers: 6860,
                community: 39300
            },
            pd: {
                
            },
            location: {
                center: [32.7520,0.3549],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mukono-c15pt2',
                    opacity: 0.9,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'mukono-c15pt2',
                    opacity: 0.6
                }
            ]
        },
        {
            id: 'kayunga',
            alignment: 'left',
            hidden: false,
            title: 'Kayunga',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            vt: {
                schools: 11,
                pupils: 5500,
                teachers: 83,
                community: 660
            },
            tt: {
                schools: 340,
                pupils: 16950,
                teachers: 3561,
                community: 20400
            },
            pd: {
                
            },
            location: {
                center: [32.89055, 0.98984],
                zoom: 9.46,
                pitch: 45,
                bearing: 0.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kayunga-5ij51z',
                    opacity: 0.9,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'kayunga-5ij51z',
                    opacity: 0.6,
                }
            ]
        },
        {
            id: 'bugiri',
            alignment: 'right',
            hidden: false,
            title: 'Bugiri',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            vt: {
                
            },
            tt: {
                
            },
            pd: {
                schools: 30,
                pupils: 203783,
                teachers: 413,
                community: 1800
            },
            location: {
                center: [33.79544, 0.51890],
                zoom: 9.46,
                pitch: 45,
                bearing: 0.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bugiri-2ciovm',
                    opacity: 0.9,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'bugiri-2ciovm',
                    opacity: 0.6,
                }
            ]
        },
        {
            id: 'bugweri',
            alignment: 'right',
            hidden: false,
            title: 'Bugweri',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            vt: {
                
            },
            tt: {
                
            },
            pd: {
                schools: 30,
                pupils: 10028,
                teachers: 308,
                community: 1800
            },
            location: {
                center: [33.61330, 0.62178],
                zoom: 10.90,
                pitch: 38.00,
                bearing: -39.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bugweri-4rkjlg',
                    opacity: 0.9,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'bugweri-4rkjlg',
                    opacity: 0.6,
                }
            ]
        },
        {
            id: 'iganga',
            alignment: 'left',
            hidden: false,
            title: 'Iganga',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            vt: {
                
            },
            tt: {
                
            },
            pd: {
                schools: 30,
                pupils: 18172,
                teachers: 373,
                community: 1800
            },
            location: {
                center: [33.47071, 0.72228],
                zoom: 10.85,
                pitch: 48.50,
                bearing: 74.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'iganga-8x626n',
                    opacity: 0.9,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'iganga-8x626n',
                    opacity: 0.6,
                }
            ]
        },
        {
            id: 'kaliro',
            alignment: 'left',
            hidden: false,
            title: 'Kaliro',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            vt: {
                
            },
            tt: {
                
            },
            pd: {
                schools: 30,
                pupils: 22908,
                teachers: 475,
                community: 1800
            },
            location: {
                center: [33.48579, 1.07996],
                zoom: 10.66,
                pitch: 38.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kaliro-cjjspj',
                    opacity: 0.9,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'kaliro-cjjspj',
                    opacity: 0.6,
                }
            ]
        },
        {
            id: 'luuka',
            alignment: 'right',
            hidden: false,
            title: 'Luuka',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            vt: {
                
            },
            tt: {
                
            },
            pd: {
                schools: 30,
                pupils: 24746,
                teachers: 479,
                community: 1800
            },
            location: {
                center: [33.32641, 0.81837],
                zoom: 9.37,
                pitch: 38.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'luuka-6qdx8t',
                    opacity: 0.9,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'luuka-6qdx8t',
                    opacity: 0.6,
                }
            ]
        },
        {
            id: 'mayuge',
            alignment: 'right',
            hidden: false,
            title: 'Mayuge',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            vt: {
                
            },
            tt: {
                
            },
            pd: {
                schools: 30,
                pupils: 25190,
                teachers: 457,
                community: 1800
            },
            location: {
                center: [33.4804, 0.4563],
                zoom: 8.73,
                pitch: 38.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mayuge-1nczfp',
                    opacity: 0.9,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'mayuge-1nczfp',
                    opacity: 0.6,
                }
            ]
        }
    ]
};
