var config = {
    // Setup here:
    // style: 'mapbox://styles/mapbox/standard',
    style: 'mapbox://styles/antievictionmap/clxmmsbgl00ex01puepih1r9d',
    accessToken: 'pk.eyJ1IjoiYW50aWV2aWN0aW9ubWFwIiwiYSI6ImNrazF6dWs2ZzA2OHQyd251eGxoc2IyYzQifQ.lQbeWzEMZhhvSNpsbo34wQ',
    showMarkers: false,
    markerColor: '#FFFFFF',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    legend: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,

   // Story Details
    title: '¡FUERA AIRBNB!',
    subtitle: "How short-term rentals have fueled dispossession & displacement in Mexico City",
    // subtitle: 'subtitle, if desired',
    byline: 'A mapping project from Proyecto Juaricua, in collaboration with [06600] Observatorio Vecinal de la Colonia Juarez',
    littleByline: 'For best results, please view this story on desktop.',
    footer: 'Created using the <a href="https://github.com/mapbox/storytelling" style="color:#ffffff;" target="_blank">Mapbox Storytelling</a> template. <br>  Thank you to the <a href="https://antievictionmap.com/" style="color:#ffffff;" target="_blank">Anti-Eviction Mapping Project</a> for providing us with access to Mapbox Studio. <br> <br> Published in 2025',
    
    // Chapter Details
    chapters: [

        {
            // 1: Intro
            id: 'introduction',
            alignment: 'left',
            hidden: false,
            title: 'Mexico City has long been a tourist destination...',
            description: 'yet in recent years tourism has looked different here. Tourists are not only visiting for a week-long vacation - since the COVID-19 pandemic, as companies worldwide have increasingly offered remote work opportunities to their employees, there has been a dramatic increase in foreign remote workers moving to Mexico City to stay for extended periods of time. ',
            image: './images/intro_image_v4.jpg',
            imageCaption: "It is said that a long, long time ago (before Airbnb), there was real life in this building.",
            location: {
                center: [-99.40935, 19.35071],
                zoom: 9.25,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
                
               
            ]
            
        },

        {
            // 2: Digital Nomads
            id: 'digital_nomads',
            alignment: 'center',
            hidden: false,
            title: 'Digital Nomads & \'Gringificacion\'',
            // image: './images/tulum_beach.jpg',
            
            description: 'These predominantly North American workers, or ‘digital nomads’, began to turn their eye to Mexico City around 2021, when influencer content on moving to Mexico City began blowing up online. These ‘digital nomad influencers’ have no doubt played a role in drawing the public’s attention to Mexico City, noting the city’s “vibrant culture, affordable cost of living, and a variety of coworking spaces” as major draws [1]. ',
            image: './images/digital_nomads.png',
            imageCaption: 'Influencer content on YouTube, Instagram, TikTok, and other social platforms portray Mexico City as a desirable and affordable location for digital nomads.', 
            location: {
                center: [-99.40935, 19.35071],
                zoom: 9.25,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
                
               
            ]
            
        },

        {
            // 3: Context for Cuauhtémoc
            id: 'context_cuahtemoc',
            alignment: 'left',
            hidden: false,
            title: 'Airbnb Listings in Alcaldía Cuauhtémoc',
            
            description: 'Around the time this influencer content begins to run rampant on social media, we observe a dramatic increase in the number of short term rentals, particularly Airbnbs, listed in the central core of Mexico City. While the Roma and Condesa neighborhoods were already hotbeds for Airbnb units prior to the pandemic, the number of Airbnb units overall in Mexico City’s central core, Alcaldía Cuauhtémoc, increased by a whopping 71% between 2019 and 2024.',
            legend: '<em>Airbnb units in Cuauhtémoc, September 2024. Each pink dot represents one Airbnb unit. Data from Inside Airbnb, 2024. <br> <br> This map is interactive! You can zoom and pan. </em>',
            // image: './images/airbnb_points.png',


            location: {
                center: [-99.17401, 19.43337],
                zoom: 12.45,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            mapInteractive: true,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'cuauhtemocLine',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'sep24',
                    opacity: 0.5,
                    duration: 500
                },
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
               
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                
            ]
            
        },

        {
            // 3: Context for Cuauhtémoc ii
            id: 'context_cuauhtemoc_ii',
            alignment: 'center',
            hidden: false,
            // title: 'Cuauhtémoc',
            
           
            image: './images/airbnb_points.png',
            

            location: {
                center: [-99.17401, 19.43337],
                zoom: 12.45,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
             
            ]
            
        },

        {
            // 4: Mega Landlords
            id: 'mega_landlords',
            alignment: 'center',
            hidden: false,
            title: 'The Growth of Mega-Hosts',
            // image: './images/tulum_beach.jpg',
            description: 'This period also marks a shift in the short term rental business model, as we also begin to observe an increase in Airbnb landlords that manage multiple units - anywhere from dozens up to hundreds of units. These ‘multi-unit’ hosts have been the primary drivers of increases in listings in Mexico City. Between April 2019 and September 2024, while the number of listings from single-unit hosts decreased from 9,749 to 8,440, the number of listings from multi-unit hosts ballooned 67% from 10,819 to 18,142. <br> <br> The maps below illustrate the increase in the number of Airbnb units between 2019 and 2023, and in particular how these units are increasingly owned by mega-hosts. ',
            
            location: {
                center: [-99.18165, 19.42285],
                zoom: 13.5,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sep19_hosts',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0.5,
                    duration: 500
                },
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
              
            ],
            onChapterExit: [
              
            ]
            
        },

        {
            // 4: Mega Landlords
            id: 'mega_landlords_ii',
            alignment: 'left',
            hidden: false,
            title: "Mega Host Airbnb listings in September 2019 ",
            // description: "Shown based on number of units owned by the unit's host.",
            image: './images/number_of_units_owned_legend.png',
            // description: 'Since 2022, there has been a noted increase in Airbnb landlords that own multiple units. A few mega-landlords have emerged in Mexico City, that own or manage 100+ units.',
            legend: '<em> This map is interactive! You can zoom and pan. </em>',
            location: {
                center: [-99.18165, 19.42285],
                zoom: 13.5,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            mapInteractive: true,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sep19_hosts',
                    opacity: 1, 
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0.5,
                    duration: 500
                },
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
              
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
              
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
            
        },
        {
            // 4: Mega Landlords
            id: 'mega_landlords_iii',
            alignment: 'left',
            hidden: false,
            title: "Mega Host Airbnb listings in September 2024",
            image: './images/number_of_units_owned_legend.png',
            legend: '<em> This map is interactive! You can zoom and pan. </em>',

            location: {
                center: [-99.18165, 19.42285],
                zoom: 13.5,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            mapInteractive: true,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sep24_hosts',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0.5,
                    duration: 500
                },
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
               
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
               
            ]
            
        },

        {
            // 5: 100+ Landlords
            id: 'hundred_plus_landlords_text',
            alignment: 'center',
            hidden: false,
            title: 'And the Emergence of Mega-Landlords',
            // image: './images/tulum_beach.jpg',
            description: 'A few mega-hosts have emerged in this period that have come to manage over 1,500 units in total as of 2024. Two mega-hosts stand out due to the sheer number of units they manage: Mr. W and Virtual Homes [2]. <br> <br> These two, along with several other mega hosts, often manage entire apartment buildings of Airbnb units. This phenomenon raises the questions: <br> <br> <b> Who lived in these buildings prior to them becoming Airbnbs, and what impact has Airbnb had on the surrounding neighborhood? </b>',
            
            location: {
                center: [-99.18165, 19.42285],
                zoom: 13.5,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0.5,
                    duration: 500
                },

                {
                    layer: 'sep19_megahosts',
                    opacity: 1, 
                    duration: 500
                },
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
               
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
    
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
            
        },

        {
            // 5: 100+ Unit Landlords
            id: 'hundred_plus_landlords_dec2019',
            alignment: 'left',
            hidden: false,
            title: 'Mega-Landlords: September 2019',
            image: "./images/megalandlord_legend.png",
            legend: '<em> This map is interactive! You can zoom and pan. </em>',
            location: {
                center: [-99.18165, 19.42285],
                zoom: 13.5,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            mapInteractive: true,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0.5,
                    duration: 500
                },

                {
                    layer: 'sep19_megahosts',
                    opacity: 1, 
                    duration: 500
                },
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
               
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
             
            ]
            
        },

     
        {
            // 5: 100+ Unit Landlords
            id: 'hundred_plus_landlords_dec2023',
            alignment: 'left',
            hidden: false,
            title: 'Mega-Landlords: September 2024',
            image: "./images/megalandlord_legend.png",
            legend: '<em> This map is interactive! You can zoom and pan. </em>',
            location: {
                center: [-99.18165, 19.42285],
                zoom: 13.5,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            mapInteractive: true,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0.5,
                    duration: 500
                },

                {
                    layer: 'sep24_megahosts',
                    opacity: 1, 
                    duration: 500
                },
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
               
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
               

            
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
             
             
            ]
            
        },
       

        {
            // 6: Context for Juárez 
            id: 'context_juarez',
            alignment: 'left',
            hidden: false,
            title: 'La Colonia Juárez',
            // image: './images/tulum_beach.jpg',
            description: 'Colonia Juárez is one such neighborhood where Airbnb rentals have skyrocketed over the past few years. While there were only 612 Airbnb units in the neighborhood in 2019, as of June 2024, there are 1,200 units. This means that in five short years, there are effectively 600 fewer apartments that are no longer available as long term rentals: 600 families have been pushed out of their homes to make way for these Airbnbs.',
            
            location: {
                center: [-99.17199, 19.42819],
                zoom: 14.0,
                pitch: 50.00,
                bearing: 15
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'juarezLine',
                    opacity: 1,
                    duration: 500
                },
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
               
            ]
            
        },

        {
            // 6: Context for Juárez ii
            id: 'context_juarez_ii',
            alignment: 'center',
            hidden: false,
            image: './images/jua_points.png',
            location: {
                center: [-99.17199, 19.42819],
                zoom: 14.0,
                pitch: 50.00,
                bearing: 15
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'juarezLine',
                    opacity: 1,
                    duration: 500
                },
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
               
            ]
            
        },


        {
            // 7: Context for 06600 
            id: 'context_06600',
            alignment: 'left',
            hidden: false,
            title: '[06600] Plataforma Vecinal y Observatorio de la Colonia Juárez',
            imageCaption: 'One of the logoes used by the organization.',
            image: './images/06600.jpg',
            description: 'Residents of la Colonia Juárez, locally known as Juaricuas, have been actively resisting displacement and the redevelopment of their neighborhood for over a decade. Juaricuas, in this context, refers to the tenants and neighbors of la Colonia Juárez who are fighting for the right to safe, stable, and autonomous housing in their neighborhood. <br> <br> From this group of neighbors, the [06600] Colonia Juárez Neighborhood Platform and Observatory (06600 being the postal code) emerged in 2014, a space dedicated to defending the neighborhood against developers, and to ensuring the continued presence of its residents. The group is led by residents of La Juárez, organizing around the needs of the community, connecting struggles and proposing solutions in a collaborative, creative, proactive, and collective manner. They focus on sharing and reproducing activist methods to combat <em> Blanqueamiento por despojo</em> (which translates to whitening by dispossession), a term that stems from Juaricua activism, naming this process as similar but not identical to what the west calls \'gentrification\'. <br> <br> The group were key players in organizing against the Chapultepec Cultural Corridor project in 2015, and they also played a major role in the 2019 incorporation of Article 59, which defines the Human Right to Adequate Housing, and Article 60, which addresses the forced displacement of long-established residents, into the Constitutional Law of Human Rights in Mexico City. The group’s efforts focus on averting the displacement of residents and small businesses in the neighborhood, which also fuels the loss of jobs. They seek to counteract and mitigate the effects of the capitalist real estate market on land and territory in Mexico City, which fuel forced displacement and bring higher rental prices to the neighborhood.',
            
            location: {
                center: [-99.17199, 19.42819],
                zoom: 14.0,
                pitch: 50.00,
                bearing: 15
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'juarezLine',
                    opacity: 1,
                    duration: 500
                },
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                
            ]
            
        },

        {
            // 8: Dinamarca 77 
            id: 'dinamarca77',
            alignment: 'left',
            hidden: false,
            title: 'The Case of Dinamarca 77',
            image: './images/dinamarca.jpg',
            imageCaption: 'Dinamarca 77 in 2024.', 
            description: 'Dinamarca 77 is one building in  Colonia Juárez where the effects of the capitalist real estate market are evident. 12 families are estimated to have been forcefully evicted in April 2018.  This building opened as 11 Airbnb units in October 2023. They are owned by Mr.W, the mega-host that owns the most units in Mexico City. <br> <br>Mr. W was established in 2017 by brothers Luís Carlos Weber Zetina and Carlos Enrique Weber Zetina. Until 2019, their presence in Cuauhtémoc was relatively small (< 50 units), but they have since grown to host over 350 units in Cuauhtémoc. The company does not directly own these units. Rather, they are property managers that serve as an intermediary between property owners and potential guests, handling advertising and guest communication in exchange for a portion of the rental income. A spokesperson for the company estimates Airbnb could earn a landlord 30-40% more income from their unit compared to traditional rentals [3]. This is a clear incentive for landlords to evict families and turn the keys over to managers like Mr. W. ',
            
            location: {
                center: [-99.15789, 19.42543],
                zoom: 18.75,
                pitch: 63.5,
                bearing: -80
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dinamarca77',
                    opacity: 0.9,
                    duration: 4000
                 },
                 
                 {
                    layer: 'minusDinamarca77',
                    opacity: 0.7,
                    duration: 5000
                 },
                  
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                
            ]
            
        },

        {
            // 9:  Nápoles 35 and Londres 49 
            id: 'napoles35_londres49',
            alignment: 'left',
            hidden: false,
            title: 'Pandora\'s Box: Londres 49 & Nápoles 35',
            // imageBeforeDescription: "./images/juarez_skyline.png",
           
            description: 'Two other buildings in Colonia Juarez, Nápoles 35 and Londres 49, were also sites of forced eviction:  we estimate that 18 families were forcefully evicted from the two buildings in December 2020. Community activists of the [06600] Plataforma Vecinal y Observatorio de la Colonia Juárez recorded testimonies with tenants not long after they were forcibly evicted from the building, recounting what happened on the day when Nápoles 35 residents were displaced.  ',
            location: {
                center: [-99.16067, 19.42710],
                zoom: 18.5,
                pitch: 61.25,
                bearing: -90.50
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'napoles35',
                    opacity: 0.9,
                    duration: 4000
                 },
                 
                 {
                    layer: 'minusNapoles35',
                    opacity: 0.7,
                    duration: 5000
                 },
                  
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
              
            ]
            
        },

        {
            // 9:  Nápoles 35 and Londres 49 
            id: 'napoles35_londres49_2',
            alignment: 'center',
            hidden: false,
            title: 'As one tenant described,',
            // imageBeforeDescription: "./images/juarez_skyline.png",
            audio: "./media/testimonio_1.mp3",
            audioCaption: "The above quote is a condensed version of what the tenant recounted on Dec 4, 2020 (recording in Spanish only).",
            image: './images/eviction_1.png',
            imageCaption: 'Screenshot from a video taken by [06600] Plataforma organisers documenting the eviction on December 4, 2020.',
        
            description: '<em>"They came to force us out without prior notice. There wasn’t any type of notification or prior document letting us know beforehand…They threw all of our belongings to the street, and what remained inside was stolen…There were many riot police officers, and other people they brought with them. The people that accompanied them were the ones taking stuff out, and the police retreated fairly quickly…After a while someone whistled and then they all left, but later they returned and started destroying and stealing things"</em>',
            location: {
                center: [-99.16067, 19.42710],
                zoom: 18.5,
                pitch: 61.25,
                bearing: -90.50
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'napoles35',
                    opacity: 0.9,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0.7,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
              
            ]
            
        },

        {
            // 9:  Nápoles 35 and Londres 49 
            id: 'napoles35_londres49_3',
            alignment: 'center',
            hidden: false,
            title: 'Another tenant recounted,',
            // imageBeforeDescription: "./images/juarez_skyline.png",
            audio: "./media/testimonio_2.mp3",
            audioCaption: "The above quote is a condensed version of what the tenant recounted on Dec 4, 2020 (recording in Spanish only).",
            image: './images/eviction_2.png',
            imageCaption: 'Screenshot from a video taken by [06600] Plataforma organisers documenting the eviction on December 4, 2020.',
            description: '<em>“I’ve lived here for 35 years, in Nápoles 35…Today we were evicted arbitrarily. We never received a notification, an opportunity to defend ourselves from this brutality. It is criminal…I do not have a place to go here in Mexico City, a place to live, I don’t have where to go after this…maybe I could ask my son to stay with him, but it is outside Mexico City. I am a diabetic. I am a Senior. I have a disability, but they didn\'t care. There were residents here with similar conditions, a blind person, a person with Alzheimers… Now, we are in the midst of a pandemic. <strong>What does it mean to you to be left houseless during the COVID-19 pandemic?</strong>”</em>',
            location: {
                center: [-99.16067, 19.42710],
                zoom: 18.5,
                pitch: 61.25,
                bearing: -90.50
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'napoles35',
                    opacity: 0.9,
                    duration: 4000
                 },
                 
                 {
                    layer: 'minusNapoles35',
                    opacity: 0.7,
                    duration: 5000
                 },
                  
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                 
            ]
            
        },

        {
            // 9:  Nápoles 35 and Londres 49 
            id: 'napoles35_londres49_4',
            alignment: 'left',
            hidden: false,
           
            // imageBeforeDescription: "./images/juarez_skyline.png",
            image: './images/pandora.jpg',
            imageCaption: 'Londres 49 & Nápoles 35 after renovation.',
            description: 'These tenants’ forceful eviction from the buildings occurred without prior notice - they had no time to prepare or to make alternative accommodations. Their belongings were thrown into the street and/or stolen, and they had to build their lives anew. Senior and disabled tenants were left with nowhere to go and no resources offered to help them transition to other housing options. The tenant quoted above had been living in Nápoles 35 for 35 years, and in an instant their life was forever changed. Most tenants in these buildings could not afford to stay in Colonia Juárez, and organizers with [06600] Plataforma Vecinal y Observatorio de la Colonia Juárez have lost contact with many. <br> <br> Following these December 2020 evictions, developers dramatically renovated these two buildings, and in October 2023, this Virtual Homes-managed building, renamed <em> Pandora </em>, opened for business. Advertising 40 Airbnb units, Pandora has not only fueled the eviction of these 18 families in the middle of a pandemic, but it has also drastically altered the landscape of the surrounding neighborhood. ',
            location: {
                center: [-99.16067, 19.42710],
                zoom: 18.5,
                pitch: 61.25,
                bearing: -90.50
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'napoles35',
                    opacity: 0.9,
                    duration: 4000
                 },
                 
                 {
                    layer: 'minusNapoles35',
                    opacity: 0.7,
                    duration: 5000
                 },
                  
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                
              
            ]
            
        },

        {
            // 10.1: Neighbourhood Impact - Rent
            id: 'neighbourhood_impact_rent',
            alignment: 'center',
            hidden: false,
            // title: '',
        
            image: './images/rent_graph.png',
            description:'As these maps and personal testimonies illustrate, Airbnb has had a tremendous impact on the daily lives of Mexico City residents in the city’s central core. In the case of Airbnb redevelopments like Dinamarca 77 and Pandora, tenants\' lives are upended, first through the trauma of the violent evictions they were forced to experience, and then by the difficulty residents often have in finding housing in their budget in the neighborhood. <br> <br> Available data [4] on average rents in Colonia Juárez show that rent increased at a faster rate compared to Mexico City as a whole, particularly during the period Airbnb listings were rapidly being added to the market. We observe this especially in 2022 as global tourism ‘bounced back’ following international travel restrictions of the COVID-19 era. This increase could be due in part to Airbnb taking housing off the local market and turning them into short-term rentals with inflated nightly costs. This graph also reveals how it is important to look to the neighborhood scale to determine Airbnb’s impact on rental prices - Mexico City is too vast to use city-wide rental data to reflect Airbnb’s impact. Other neighbourhoods with high numbers of Airbnb listings show similar patterns. ',
            
            location: {
                center: [-99.17276, 19.42655],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
              
                
            ]
            
        },

        {
            // 10: Neighbourhood Impact
            id: 'neighbourhood_impact',
            alignment: 'center',
            hidden: false,
            title: 'Blanqueamiento por Despojo',
        
            image: './images/pandora_streetscape.jpg',
            description:'The increase in Airbnb units also impacts the types of businesses that emerge in a given neighborhood, with higher-priced restaurants, cafes, shops and boutiques emerging that cater to the tastes of elite consumers and foreign tourists [5]. This is very blatantly observed in Colonia Juárez. The emergence of Airbn-Buildings also often entails the displacement of commercial businesses as well. For example, the conversion of Dinamarca 77 to Airbnb units also displaced an economical restaurant and a corner store at the street level, transforming these commercial spaces into several upscale boutiques. <br> <br> The whitewashing of these buildings also creates an alternate rendering of the neighborhood, a polished facade reminiscent of former eras of Mexico’s elite. Organizers with [06600] Plataforma Vecinal y Observatorio de la Colonia Juárez call this blanqueamiento por despojo - whitening by dispossession [6]. Whitening, here, refers to not only the literal whitewashing of the buildings after tenants are dispossessed, painted over in bland ‘neutral’ color schemes, but also the ways that housing dispossession is not only an economic but a racialized process. <br> <br> Other instances of mass eviction in Colonia Juárez, such as the expulsion of 20 Indigenous Mazahua families from Turín 46 in October 2021, illustrate how these instances of violent eviction are normalized for lives deemed less valuable within broader processes of racialization and territoriality in Mexico [7].  As low-income Mexican tenants are pushed out to create locales for foreign and national elites, Colonia Juarez becomes effectively reinscribed as an exclusive, whitened space that has a visceral impact on remaining tenants’ day to day lives.',
            
            location: {
                center: [-99.17276, 19.42655],
                zoom: 13.75,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
              
                
            ]
            
        },

        {
            // 11: CDMX Policy on Digital Nomads
            id: 'cdmx_digital_nomads',
            alignment: 'center',
            hidden: false,
            title: 'How has CDMX Responded to Short-Term Rentals?',
            image: './images/digital_nomad_announcement.jpg',
            imageCaption: 'Screenshot taken from the Government of Mexico City’s social media advertising their support for remote workers. <br> <br> Digital Nomads in México City. Remote work generates a transversal impact in society, from human resources and different sectors of our economy. In the #PressConference, of #MexicoCityMayor it was stated that the alliance between @GobCDMX, @airbnb_mx and @UNESCOMexico will help creative tourism thay will include the inhabitants of Mexico City as it will generate new jobs and will jump start the local economy.',
            description: 'The growth of Airbnb and its impacts on local populations are not natural nor inevitable. Rather, the whitening of Colonia Juárez and Mexico City’s other neighborhoods has been pursued intentionally. In October 2022, Airbnb announced that it would partner with Mexico City’s government explicitly to  “promote the city as a global hub for remote workers…and the Capital of Creative Tourism” [8]). While the announcement claimed Airbnb would provide economic opportunities to Mexicans (through jobs in the tourism industry), Mexico City has since shifted its opinion of digital nomads - at least in its treatment of their short-term housing rentals. <br> <br> In 2024 the government of Mexico City implemented new regulations regarding Airbnb and other short-term rental platforms, calling for the creation of a list of all the short-term rental hosts, documenting their Tax Identification Number alongside accreditation or ownership of the unit [9]. In September 2024, the municipal government stated that while the host listings had not been completed, hosts now won’t be able to renew their licenses if they have occupation rates over 50% of the year, if they try to list additional properties, or to extend rental periods.  <br> <br> In response to these regulations, Airbnb itself has funded local campaigns and reports that portray Airbnb hosts as “mom and pop” businesses whose rental units are benefiting local economies and sustaining their livelihoods. Yet as our research shows, the marked increase in Airbnb units since 2022 is not driven by “mom and pop” owners - it is the result of corporate mega-landlords whose presence has driven up the cost of rent in Colonia Juárez and in other neighborhoods with a large Airbnb presence. ',
            
            location: {
                center: [-99.14960, 19.40666],
                zoom: 11.50,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
              
            ]
            
        },

        {
            // 11: Financialisation of Housing
            id: 'housing_financialisation',
            alignment: 'center',
            hidden: false,
            title: 'Airbnb\'s Role in the Financialisation of Housing',
            image: './images/proptech.png',
            imageCaption: 'A professional industry of real estate platforms and technologies have emerged around property markets in Latin America, including many that cater specifically to short-term rental.',
            // image: './images/tulum_beach.jpg',
            description: 'The mega-landlords that own and/or manage buildings like Dinamarca 77 and Pandora purchase them because they see these buildings not as homes, as the tenants who were evicted did, but as properties from which they can turn a profit. This phenomenon is known as the financialization of housing - the treatment of housing as a financial asset by investors rather than as a human right [10]. <br> <br> Although the financialization of housing is not new, its impacts have been magnified through digital platforms and tools. Smartphones and apps (and the data and analytical capabilities they enable) allow investors to manage large and increasingly complex property portfolios [11]. They enable financialization at greater speeds, broader scales, and with increased profit potential. <br. <br>Short-term rental platforms like Airbnb create opportunities for a new kind of financialization.  They cater to a growing class of mobile, relatively wealthy remote workers (and foreign tourists) who can afford to pay far higher rents than locals. Furthermore, by sidestepping long-term tenant regulations and protections, Airbnb gives hosts much more flexibility and control over their properties [12].  For prospective investors like Mr W and Virtual Homes, the revenue potential is too great to ignore.  <br> <br> This phenomenon is not unique to Mexico City [13].  A professional industry of property managers, landlords, and real estate platforms has emerged in tandem with Airbnb in cities across the world. The boutiques and facades of CDMX are a local expression of a global system that values capital investments and profit over human lives and community cohesion.',
            
            location: {
                center: [-99.14960, 19.40666],
                zoom: 11.50,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
                
            ]
            
        },

        {
            // 13: Conclusion
            id: 'conclude',
            alignment: 'center',
            hidden: false,
            title: ' El Barrio es de Quien lo Trabaja...',
            image: './images/juarez_conclusion.png',
            imageCaption: 'Murals like these are one way organizers in la Colonia Juárez resist blanqueamiento por despojo and make their claims to the neighbourhood visible.',
            // image: './images/tulum_beach.jpg',
            description: 'Although the municipal government’s recent policies signal a desire to slow the growth of Airbnb, it is unclear how successful they will be, and how well the new rules will be enforced. Available data from 2024 suggests that the number of Airbnb listings in Alcaldía Cuauhtémoc has remained relatively steady throughout the year. Although the striking increases in listings observed in 2022-2023 have slowed, the thousands of Airbnb units established during these years remain. Digital nomads continue to take selfies on Mexico City’s streets, and gentrification continues to shape the cultural and economic landscape. <br> <br> However, residents in neighborhoods like La Juárez are not accepting these changes as inevitable. Blanqueamiento por despojo and gentrification are ongoing, and are rooted in longer histories of dispossession in Mexico City. Yet Juaricuas are not deterred - they continue to practice everyday and creative forms of resistance to Airbnb and other forms of capitalist speculation in their neighborhood. These modes of resistance are visible and forthright, as wheat pasted posters or painted murals on buildings where residents are resisting displacement. Others are perhaps less obvious, such as a street vendor continuing to sell their goods even after the buildings they share the sidewalk with have been whitewashed. Juaricuas continue to insist on the right to remain in their neighborhood, in their homes, on their terms. <em> El barrio es de quien lo trabaja. La lucha sigue. </em>',
            
            location: {
                center: [-99.14960, 19.40666],
                zoom: 11.50,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
               
            ],
            onChapterExit: [
                
            ]
            
        },

        {
            // References
            id: 'acknowledgements',
            alignment: 'center',
            hidden: false,
            title: 'The People of Proyecto Juaricua',
            // image: './images/tulum_beach.jpg',
            // description: 'Text for the chapter',
            description: "<strong> Margaret Marietta Ramírez </strong>, PhD, is the Associate Director of Chicana/o-Latina/o Studies at Stanford University, and an Adjunct Professor of Geography at Simon Fraser University. MMR is a scholar of urban and cultural geography with over a decade of experience researching the impacts of gentrification on low-income and historically disinvested communities in the San Francisco Bay Area. Her writings on gentrification, housing justice and social movements have been published in <em> Environment & Planning D, Urban Geography, IJURR Online, </em> and <em> Antipode </em>, and she is a co-editor of the Anti-Eviction Mapping Project’s (2021) collection <em> Counterpoints: A Bay Area Atlas of Displacement and Resistance </em>. Lastly, she spent her childhood summers wandering Mexico City while visiting family; she has always felt a strong connection and love for the city and her kin here. <br> <br> <strong> Gabrielle Wong </strong> is an undergraduate at Simon Fraser University. She will graduate with a BA in human geography, social data analytics (minor), and urban studies (certificate) in June 2025. This project has allowed them to see the liveliness, creativity, and resilience of Mexico City's residents and neighbourhoods in the face of displacement. <br> <br> <strong> Mónica Andrea Mendoza López </strong> is an undergraduate student at Simon Fraser University currently working on her BA in Human Geography, a minor in Geographic Information Science and an Urban Studies Certificate. Born and raised in Mexico City, this project has given a new meaning to the streets where she grew up. <br> <br> <strong> Sergio González </strong> is an urban activist fighting to defend the territory and the right to the city that seeks to mitigate what he calls the 4Ds: forced Displacement, Dispossession, Eviction (Desalojo) and Uprooting (Desarraigo). These forces are provoked by <em> blanqueamiento por despojo </em>, a term that emerged from the Juaricuas that anglicized academia calls gentrification. He is a co-founder and integral part of the organization [06600] Plataforma Vecinal y Observatorio de la Colonia Juárez, as well as of Juaricua TV, a neighborhood-based media network in Mexico City. He has been displaced two times by real estate investors in Colonia Juarez and has succeeded at remaining in the neighborhood territory, defending residents\' rights to remain rooted in place. <br> <br> <br> <strong> <em> This research was funded by a Social Science & Humanities Research Council (SSHRC) Insight Development Research Grant and supported by a collaboration with the <a href=\"https://antievictionmap.com\" style=\"color:#ffffff;\" target=\"_blank\">Anti-Eviction Mapping Project</a>.",
            location: {
                center: [-99.12574, 19.39614],
                zoom: 10.00,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
               
            ],
            onChapterExit: [
             
            ]
        },

        {
            // References
            id: 'endnotes',
            alignment: 'center',
            hidden: false,
            title: 'Endnotes',
            // image: './images/tulum_beach.jpg',
            // description: 'Text for the chapter',
            description: "[1] Quote from the blog <em> <a href = 'https://digitalnomadlifestyle.com/2024/06/14/mexico-city-the-complete-digital-nomad-guide/' style='color:#ffffff;' >Digital Nomad Lifestyle </a> </em>. <br> <br> [2]In the latter half of 2024, the global company <a href = 'https://www.theblueground.com/' style='color:#ffffff;' >Blueground </a> added nearly 150 units to their listings in CDMX. Although they have slightly fewer units than Mr. W and Virtual Homes in Mexico City, they are expanding at a faster rate and are much more established globally, with collections of short-term rentals in five continents. <br> <br>  [3] Figure from <a href = 'https://english.elpais.com/international/2022-12-13/mr-w-the-mysterious-airbnb-broker-in-mexico-city.html_' style='color:#ffffff;'> EL PAÍS </a> <br> <br> [4] Data from <a href = 'https://www.inmuebles24.com/noticias/cdmx-renta/' style='color:#ffffff;' >Inmeubles24 </a>. The data that is provided only accounts for properties listed on this site. <br> <br> [5] See the research of <a href= ‘https://doi.org/10.1093/cjres/rsad009’ style='color:#ffffff;'>Hidalgo et al. (2023) </a> for more information. <br> <br> [6] Blanqueamiento por despojo was first discussed in <a href = ‘https://permanecerenlamerced.wordpress.com/2019/03/18/blanqueamiento-por-despojo-por-pablo-gaytan-santiago/’ style='color:#ffffff;'> work </a> by Pablo Gaytán Santiago, a researcher in the Department of Social Relations and the Communication and Politics Area at Universidad Autónoma Metropolitana-Xochimilco and a documentary filmmaker. Sergio González, lead organizer with the [06600] Plataforma Vecinal y Observatorio de la Colonia Juárez, also speaks to the terms origins within the Juaricuas’ housing movement.  <a href = 'https://journals.sagepub.com/doi/abs/10.1177/27541258231204004?journalCode=dusa' style='color:#ffffff;' >Ben Gerlofs and Ernesto López Morales (2023) </a> have also written on blanqueamiento por despojo in Mexico City.  <br> <br> [7] For more information, see Carla Escoffié’s book, <em> País sin techo: Ciudades, historias y luchas sobre la vivienda </em>, and the work of <a href = ‘https://doi.org/10.5354/0718-8358.2022.65649’ style='color:#ffffff;'> Linz et al. (2022) </a>. <br> <br> [8] See Airbnb’s announcement on this partnership <a href = ‘https://news.airbnb.com/cdmx-unesco-and-airbnb-announce-partnerships-to-promote-mexico-city-as-a-g/’ style='color:#ffffff;'> here </a>. <br> <br> [9] The full policy is available in the <a href = ‘https://data.consejeria.cdmx.gob.mx/portal_old/uploads/gacetas/31ad26cb85b412c0492e504ade4f23ab.pdf  style='color:#ffffff;'’> Gaceta Oficial de la Ciudad de Órgano de México 1330 </a>. <br> <br> [10] For more in-depth research on the global financialization of housing, see the work of <a href = ‘https://onlinelibrary.wiley.com/doi/full/10.1111/1468-2427.12062?casa_token=WQ035imkpzYAAAAA%3Av7XspjfGza1m6wvOawDp20aUKJ1RuCoKtUjoNoudnWlpWtw1t4uAXAfHFF-1DWDJ-u56oe50YAnNKWo’ style='color:#ffffff;'> Rolnik (2013) </a>,  <a href = ‘https://doi.org/10.1177/0042098014543704’ style='color:#ffffff;'> Fields & Uffer (2016) </a>, <a href = ‘https://onlinelibrary.wiley.com/doi/full/10.1111/1468-2427.12522?casa_token=0JoSEVSlzOgAAAAA%3AhlEZlRYTzeKzIPOgdp6WcxWECC-rvBA6i09ZuPuYOEhfrhZu4ufi4Fsgdu4-f0ONW-FMyRH3xxM2m5Y’ style='color:#ffffff;'> Aalbers (2017) </a>, <a href = ‘https://www.tandfonline.com/doi/full/10.1080/10511482.2019.1681491?casa_token=FXvnQMNUPFkAAAAA%3AKiGk-KjHTzLaXf7fTXQJdwAkVBbGMZpTIsCo0y0Ft_W7oEohcYHP0eC7X7V02miGKJEprmoAI6sO7A#abstract' style='color:#ffffff;'> Fernandez & Aalbers 2020 </a>, and <a href = ‘https://www.tandfonline.com/doi/full/10.1080/02723638.2024.2355061?casa_token=cMfFq2GBngkAAAAA%3A4ty_JaEpM5IV-SvPXSvWacjlqJnwQFJspl9Q_EplAGKJKHAWkX7vSiL1cmXs6oR1W4gETsXdd5_wBw’ style='color:#ffffff;''> Rolnik et al. (2024) </a>.<br> <br> [11] See <a href = ‘https://doi.org/10.1177/0308518X19846514’ style='color:#ffffff;'> Fields (2022) </a> for a discussion of digital technologies and their role in financial accumulation.  <br> <br> [12]  <a href = ‘https://doi.org/10.1016/j.cities.2023.104245’ style='color:#ffffff;'> Gil et al. (2023) </a> discuss the connections between short-term rental platforms and the financialization of housing in more detail.  <br> <br> [13]  <a href = ‘https://doi.org/10.1016/j.cities.2023.104245’ style='color:#ffffff;'> Gil et al. (2023) </a> and <a href = ‘https://www.routledge.com/Airbnb-Short-Term-Rentals-and-the-Future-of-Housing/Hoffman-SchmitterHeisler/p/book/9780367234188?srsltid=AfmBOopw8w0Cl8zsGoHmA01xS46pc48K1BZcN6ReEVTF1WzygKM0rk5y’ style='color:#ffffff;'> Hofman & Heisler’s (2020) </a> research both investigate the role of Airbnb in the financialization of housing in other cities.",
            location: {
                center: [-99.12574, 19.39614],
                zoom: 10.00,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
                
               
            ]
        },


        {
            // Map Only Chapter
            id: 'map_only_chapter',
            alignment: 'fully',
            hidden: true,
            title: 'Heading-Style Chapter',
            // image: './images/tulum_beach.jpg',
            // description: 'Text for the chapter',
            location: {
                center: [-99.12574, 19.39614],
                zoom: 10.00,
                pitch: 0.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'napoles35',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusNapoles35',
                    opacity: 0,
                    duration: 3000
                 }, 
                 {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 },
                 {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep24_megahosts',
                    opacity: 0, 
                    duration: 500
                }, 
                {
                    layer: 'sep19_megahosts',
                    opacity: 0, 
                    duration: 500
                },
                {
                    layer: 'sep24_hosts',
                    opacity: 0,
                    duration: 500
                }, 
                {
                    layer: 'sep19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                {
                    layer: 'sep24',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                }
            ]
        }

    ]
};