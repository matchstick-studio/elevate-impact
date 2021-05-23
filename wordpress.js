<script>
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
            title: '',
            image: '',
            description: '',
            vt: {
                schools: 156,
                pupils: 73535,
                teachers: 1256,
                community: 8580
            },
            tt: {
                schools: 995,
                pupils: 19005,
                teachers: 10421,
                community: 59700
            },
            pd: {
                schools: 30,
                pupils: 304827,
                teachers: 2505,
                community: 1800
            },
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
            description: '',
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
                    opacity: 1,
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
            image: '',
            description: '',
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
                    opacity: 1,
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
            image: '',
            description: '',
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
                    opacity: 1,
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
            image: '',
            description: '',
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
                    opacity: 1,
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
            image: '',
            description: '',
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
                    opacity: 1,
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
            image: '',
            description: '',
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
                    opacity: 1,
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
            image: '',
            description: '',
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
                    opacity: 1,
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
            image: '',
            description: '',
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
                    opacity: 1,
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

var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        var options = {};
        if (layer.duration) {
            var transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.setAttribute('id', 'features');

var header = document.createElement('div');

if (config.title) {
    var titleText = document.createElement('h2');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');

    /// Project headers ///
    var vt_header = document.createElement('h4');
    vt_header.innerText = "Village TEACH Program"
    var tt_header = document.createElement('h4');
    tt_header.innerText = "TIET Partnership Program"
    var pd_header = document.createElement('h4');
    pd_header.innerText = "Positive Deviance Program"


    if (record.title) {
        var title = document.createElement('h1');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    // VT section //
    if (record.vt && record.vt.schools) {
    
    /// Impact level headers ////
    var schools_header_vt = document.createElement('h5');
    schools_header_vt.innerText = "Schools impacted"
    var pupils_header_vt = document.createElement('h5');
    pupils_header_vt.innerText = "Pupils reached"
    var teachers_header_vt = document.createElement('h5');
    teachers_header_vt.innerText = "Teachers trained"
    var community_header_vt = document.createElement('h5');
    community_header_vt.innerText = "Parents/Community"
    
    chapter.appendChild(vt_header); 
    var row = document.createElement('div');
    row.classList.add("vc_row");

    var column1 = document.createElement('div');
    column1.classList.add("vc_col-md-6");
    var column2 = document.createElement('div');
    column2.classList.add("vc_col-md-6");
    var column3 = document.createElement('div');
    column3.classList.add("vc_col-md-6");
    var column4 = document.createElement('div');
    column4.classList.add("vc_col-md-6");
    
    chapter.appendChild(row);
    row.appendChild(column1);
    row.appendChild(column2);
    row.appendChild(column3);
    row.appendChild(column4);

    var schools = document.createElement('h2');
    var pupils = document.createElement('h2');
    var teachers = document.createElement('h2');
    var community = document.createElement('h2');

    column1.appendChild(schools_header_vt);
    schools.innerHTML = record.vt.schools.toLocaleString();
    column1.appendChild(schools)
    column2.appendChild(pupils_header_vt);
    pupils.innerHTML = record.vt.pupils.toLocaleString();
    column2.appendChild(pupils)
    column3.appendChild(teachers_header_vt);
    teachers.innerHTML = record.vt.teachers.toLocaleString();
    column3.appendChild(teachers)
    column4.appendChild(community_header_vt);
    community.innerHTML = record.vt.community.toLocaleString();
    column4.appendChild(community)

    }
    /// End VT area ///

    // TT section //
    if (record.tt && record.tt.schools) {

    /// Impact level headers ////
    var schools_header_tt = document.createElement('h5');
    schools_header_tt.innerText = "Schools impacted"
    var pupils_header_tt = document.createElement('h5');
    pupils_header_tt.innerText = "Pupils reached"
    var teachers_header_tt = document.createElement('h5');
    teachers_header_tt.innerText = "Teachers trained"
    var community_header_tt = document.createElement('h5');
    community_header_tt.innerText = "Parents/Community"

    chapter.appendChild(tt_header); 
    var row = document.createElement('div');
    row.classList.add("vc_row");

    var column1 = document.createElement('div');
    column1.classList.add("vc_col-md-6");
    var column2 = document.createElement('div');
    column2.classList.add("vc_col-md-6");
    var column3 = document.createElement('div');
    column3.classList.add("vc_col-md-6");
    var column4 = document.createElement('div');
    column4.classList.add("vc_col-md-6");
    
    chapter.appendChild(row);
    row.appendChild(column1);
    row.appendChild(column2);
    row.appendChild(column3);
    row.appendChild(column4);

    var schools = document.createElement('h2');
    var pupils = document.createElement('h2');
    var teachers = document.createElement('h2');
    var community = document.createElement('h2');

    column1.appendChild(schools_header_tt);
    schools.innerHTML = record.tt.schools.toLocaleString();
    column1.appendChild(schools)
    column2.appendChild(pupils_header_tt);
    pupils.innerHTML = record.tt.pupils.toLocaleString();
    column2.appendChild(pupils)
    column3.appendChild(teachers_header_tt);
    teachers.innerHTML = record.tt.teachers.toLocaleString();
    column3.appendChild(teachers)
    column4.appendChild(community_header_tt);
    community.innerHTML = record.tt.community.toLocaleString();
    column4.appendChild(community)

    }
    /// End TT area ///

    // PD section //
    if (record.pd && record.pd.schools) {

    /// Impact level headers ////
    var schools_header_pd = document.createElement('h5');
    schools_header_pd.innerText = "Schools impacted"
    var pupils_header_pd = document.createElement('h5');
    pupils_header_pd.innerText = "Pupils reached"
    var teachers_header_pd = document.createElement('h5');
    teachers_header_pd.innerText = "Teachers trained"
    var community_header_pd = document.createElement('h5');
    community_header_pd.innerText = "Parents/Community"

    chapter.appendChild(pd_header); 
    var row = document.createElement('div');
    row.classList.add("vc_row");

    var column1 = document.createElement('div');
    column1.classList.add("vc_col-md-6");
    var column2 = document.createElement('div');
    column2.classList.add("vc_col-md-6");
    var column3 = document.createElement('div');
    column3.classList.add("vc_col-md-6");
    var column4 = document.createElement('div');
    column4.classList.add("vc_col-md-6");
    
    chapter.appendChild(row);
    row.appendChild(column1);
    row.appendChild(column2);
    row.appendChild(column3);
    row.appendChild(column4);

    var schools = document.createElement('h2');
    var pupils = document.createElement('h2');
    var teachers = document.createElement('h2');
    var community = document.createElement('h2');

    column1.appendChild(schools_header_pd);
    schools.innerHTML = record.pd.schools.toLocaleString();
    column1.appendChild(schools)
    column2.appendChild(pupils_header_pd);
    pupils.innerHTML = record.pd.pupils.toLocaleString();
    column2.appendChild(pupils)
    column3.appendChild(teachers_header_pd);
    teachers.innerHTML = record.pd.teachers.toLocaleString();
    column3.appendChild(teachers)
    column4.appendChild(community_header_pd);
    community.innerHTML = record.pd.community.toLocaleString();
    column4.appendChild(community)

    }
    /// End PD area ///


    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || 'centered');
    if (record.hidden) {
        container.classList.add('hidden');
    }
    features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement('div');

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
    return {
      url: url + suffix
    }
}

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    transformRequest: transformRequest
});

if (config.showMarkers) {
    var marker = new mapboxgl.Marker({ color: config.markerColor });
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();

map.on("load", function() {
    if (config.use3dTerrain) {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

        // add a sky layer that will show when the map is highly pitched
        map.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 0.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });
    };

    // setup the instance, pass callback functions
    scroller
    .setup({
        step: '.step',
        offset: 0.5,
        progress: true
    })
    .onStepEnter(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.add('active');
        map[chapter.mapAnimation || 'flyTo'](chapter.location);
        if (config.showMarkers) {
            marker.setLngLat(chapter.location.center);
        }
        if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
        }
        if (chapter.callback) {
            window[chapter.callback]();
        }
        if (chapter.rotateAnimation) {
            map.once('moveend', function() {
                const rotateNumber = map.getBearing();
                map.rotateTo(rotateNumber + 90, {
                    duration: 24000, easing: function (t) {
                        return t;
                    }
                });
            });
        }
    })
    .onStepExit(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
        }
    });
});

// setup resize event
window.addEventListener('resize', scroller.resize);
</script>