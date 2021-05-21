var config = {
    style: 'mapbox://styles/kollinsayz/ck0sjmwa337rk1cqv0xrr8sxe',
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
                zoom: 6.33,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: '',
                //     opacity: '',
                //     duration: ''
                // }
            ],
            onChapterExit: [
                // {
                //     layer: '',
                //     opacity: '',
                //     duration: ''
                // }
            ]
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
                    layer: 'mukono-0sd7q8',
                    opacity: 0.6,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'mukono-0sd7q8',
                    opacity: 0
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
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};