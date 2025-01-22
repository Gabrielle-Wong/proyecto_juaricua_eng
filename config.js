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
    subtitle: "The Role of Short-term Rentals in Housing Dispossession & Displacement in Mexico City, 2019-2024",
    // subtitle: 'subtitle, if desired',
    byline: 'A mapping project from Proyecto Juaricua, in collaboration with 06600 Observatorio Vecinal de la Colonia Juarez | January 12, 2025',
    footer: 'Created using the <a href="https://github.com/mapbox/storytelling" style="color:#ffffff;" target="_blank">Mapbox Storytelling</a> template. <br>  Thank you to the <a href="https://antievictionmap.com/" style="color:#ffffff;" target="_blank">Anti-Eviction Mapping Project</a> for providing us with access to Mapbox Studio.',
    
    // Chapter Details
    chapters: [

        {
            // 1: Intro
            id: 'introduction',
            alignment: 'left',
            hidden: false,
            // title: 'Introduction',
            
            
            description: '<em> For best results, please view this story on desktop. </em> <br> <br> Mexico City has long been a tourist destination, yet in recent years tourism has looked different here. Tourists are not only visiting for a week-long vacation - since the COVID-19 pandemic, as companies worldwide have increasingly offered remote work opportunities to their employees, there has been a dramatic increase in foreign remote workers moving to Mexico City to stay for extended periods of time. ',
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
            
            description: 'These predominantly North American workers, or ‘digital nomads’, began to turn their eye to Mexico City around 2021, when influencer content on moving to Mexico City began blowing up online. These ‘digital nomad influencers’ have no doubt played a role in drawing the public’s attention to Mexico City, noting the city’s “vibrant culture, affordable cost of living, and a variety of coworking spaces” as major draws [1].',
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
            description: 'This period also marks a shift in the short term rental business model, as we also begin to observe an increase in Airbnb landlords that manage multiple units - anywhere from dozens up to hundreds of units. The maps below illustrate the increase in the number of Airbnb units between 2019 and 2024, and in particular how these units are increasingly owned by mega-hosts.',
            
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
            title: 'Mega-Landlords',
            // image: './images/tulum_beach.jpg',
            description: 'A few mega-hosts have emerged in this period that have come to manage over 1,500 units in total as of 2024. Two mega-hosts stand out due to the sheer number of units they manage: Mr. W and Virtual Homes. <br> <br> These two, along with several other mega hosts, often manage entire apartment buildings of Airbnb units. This phenomenon raises the questions: <br> <br> <b> Who lived in these buildings prior to them becoming Airbnbs, and what impact has Airbnb had on the surrounding neighborhood? </b>',
            
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
            title: 'Colonia Juárez',
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
            title: '06600 Plataforma Vecinal y Observatorio de la Colonia Juárez',
            imageBDCaption: 'One of the logoes used by the organization.',
            imageBeforeDescription: './images/06600.jpg',
            description: 'Residents of la Colonia Juárez, locally known as Juaricuas, have been actively resisting displacement and the redevelopment of their neighborhood for over a decade. Juaricuas, in this context, refers to the tenants and neighbors of la Colonia Juárez who are fighting for the right to safe, stable, and autonomous housing in their neighborhood. <br> <br> From this group of neighbors, the 06600 Colonia Juárez Neighborhood Platform and Observatory (06600 being the postal code) emerged in 2014, a space dedicated to defending the neighborhood against developers, and to ensuring the continued presence of its residents. The group is led by residents of La Juárez, organizing around the needs of the community, connecting struggles and proposing solutions in a collaborative, creative, proactive, and collective manner. They focus on sharing and reproducing activist methods to combat <em> blanqueamiento por despojo</em> (which translates to whitening by dispossession), a term that stems from Juaricua activism, naming this process as similar but not identical to what the west calls \'gentrification\'. <br> <br> The group were key players in organizing against the Chapultepec Cultural Corridor project in 2015, and they also played a major role in the 2019 incorporation of Article 59, which defines the Human Right to Adequate Housing, and Article 60, which addresses the forced displacement of long-established residents, into the Constitutional Law of Human Rights in Mexico City. The group’s efforts focus on averting the displacement of residents and small businesses in the neighborhood, which also fuels the loss of jobs. They seek to counteract and mitigate the effects of the capitalist real estate market on land and territory in Mexico City, which fuel forced displacement and bring higher rental prices to the neighborhood.',
            
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
            title: 'Dinamarca 77',
            image: './images/dinamarca.jpg',
            imageCaption: 'Dinamarca 77 in 2024.', 
            description: 'Dinamarca 77 is one building in la Colonia Juárez where the effects of the capitalist real estate market are evident. 12 families are estimated to have been forcefully evicted in April 2018.  This building opened as 11 AirBnb units in October 2023. They are owned by Mr.W, the mega-host that rents the most short term rental units on Airbnb’s platform in Mexico City. <br> <br> Mr. W was established in 2017 by brothers Luís Carlos Weber Zetina and Carlos Enrique Weber Zetina. Until 2019, their presence in Cuauhtémoc was relatively small (< 50 units), but they have since grown to host over 350 units in Cuauhtémoc. The company does not directly own these units. Rather, they are property managers that serve as an intermediary between property owners and potential guests, handling advertising and guest communication in exchange for a portion of the rental income. A spokesperson for the company estimates Airbnb could earn a landlord 30-40% more income from their unit compared to traditional rentals [2]. This is a clear incentive for landlords to evict families and turn the keys over to managers like Mr. W.',
            
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
            title: 'Londres 49 & Nápoles 35',
            // imageBeforeDescription: "./images/juarez_skyline.png",
           
            description: 'Two other buildings in Colonia Juarez, Nápoles 35 and Londres 49, were also sites of forced eviction:  we estimate that 18 families were forcefully evicted from the two buildings in December 2020. Community activists of the 06600 Plataforma Vecinal y Observatorio de la Colonia Juárez recorded testimonies with tenants not long after they were forcibly evicted from the building, recounting what happened on the day when Nápoles 35 residents were displaced.',
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
            image: './images/eviction_1.png',
            imageCaption: 'Screenshot from a video taken by 06600 Plataforma organisers documenting the day of the eviction.',
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
            image: './images/eviction_2.png',
            imageCaption: 'Screenshot from a video taken by 06600 Plataforma organisers documenting the day of the eviction.',
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
            description: 'As these tenants describe, their forceful eviction from the buildings occurred without prior notice - they had no time to prepare or to make alternative accommodations. Their belongings were thrown into the street and/or stolen, and they had to build their lives anew. Senior and disabled tenants were left with nowhere to go and no resources offered to help them transition to other housing options. The tenant quoted above had been living in Nápoles 35 for 35 years, and in an instant their life was forever changed. Most tenants in these buildings could not afford to stay in the Colonia Juárez, and organizers with 06600 Plataforma Vecinal y Observatorio de la Colonia Juárez have lost contact with many.<br><br> Following these December 2020 evictions, developers dramatically renovated these two buildings, and in October 2023, this Virtual Homes-managed building, renamed <em> Pandora</em>, opened for business. Advertising 40 Airbnb units, Pandora has not only fueled the eviction of these 18 families in the middle of a pandemic, but it has also dramatically altered the landscape of the surrounding neighborhood.',
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
            // 10: Neighbourhood Impact
            id: 'neighbourhood_impact',
            alignment: 'center',
            hidden: false,
            title: 'Blanquemiento por Despojo',
        
            image: './images/pandora_streetscape.jpg',
            description:'As these maps and personal testimonies illustrate, Airbnb has had a tremendous impact on the daily lives of Mexico City residents in the city’s central core. In the case of Airbnb redevelopments like Dinamarca 77 and Pandora, tenants\' lives are upended, first through the trauma of the violent evictions they were forced to experience, and then by the difficulty residents often have in finding housing in their budget in the neighborhood. This is also due in part to how the increase in Airbnb units drives up local rent prices, taking housing off the market and turning them into short-term rentals with inflated nightly costs. <br> <br> The increase in Airbnb units also impacts the types of businesses that emerge in a given neighborhood, with higher-priced restaurants, cafes, shops and boutiques emerging that cater to the tastes of elite consumers and foreign tourists [3]. This is very blatantly observed in the Colonia Juárez. The emergence of Airbn-Buildings also often entails the displacement of commercial businesses as well. For example, the conversion of Dinamarca 77 to Airbnb units also displaced an economical restaurant and a corner store at the street level, transforming these commercial spaces into several upscale boutiques. <br> <br> The whitewashing of these buildings also creates an alternate rendering of the neighborhood, a polished facade reminiscent of former eras of Mexico’s elite. Organizers with 06600 Plataforma Vecinal y Observatorio de la Colonia Juárez call this <em> blanqueamiento por despojo </em> - whitening by dispossession [4]. Whitening, here, refers to not only the literal whitewashing of the buildings after tenants are dispossessed, painted over in bland ‘neutral’ color schemes, but also the ways that housing dispossession is not only an economic but a racialized process. Other instances of mass eviction in the Colonia Juárez, such as the expulsion of 20 Indigenous Mazahua families from Turín 46 in October 2021, illustrate how these instances of violent eviction are normalized for lives deemed less valuable within broader processes of racialization and territoriality in Mexico [5].  As low-income Mexican tenants are pushed out to create locales for foreign and national elites, the Colonia Juarez becomes effectively reinscribed as an exclusive, whitened space that has a visceral impact on remaining tenants’ day to day lives.',
            
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
            title: 'Policy Shifts in Mexico City',
            image: './images/digital_nomad_announcement.jpg',
            imageCaption: 'Screenshot taken from the Government of Mexico City’s social media advertising their support for remote workers. <br> <br> ANDREA TO TRANSLATE',
            description: 'The growth of Airbnb and its impacts on local populations are not natural nor inevitable. Rather, the whitening of Colonia Juárez and Mexico City’s other neighborhoods has been pursued intentionally. In October 2022, Airbnb announced that it would be partnered with Airbnb and Mexico City explicitly to  “promote the city as a global hub for remote workers…and the Capital of Creative Tourism” [6]. While the announcement claimed Airbnb would provide economic opportunities to Mexicans (through jobs in the tourism industry), Mexico City has since backtracked in its welcome of digital nomads. <br> <br> On April 4, 2024 the government of Mexico City decided to implement new regulations regarding Airbnb and other short-term rental platforms, in an attempt to slow gentrification. The new regulations aim to create a list of all the short-term rental hosts, documenting their Tax Identification Number alongside accreditation or ownership of the unit. Hosts will also need to present an occupation report and change land usage if they have more than 3 properties [7]. <br> <br> On September 21, 2024, Mexico City’s municipal government stated that while the host listings had not been completed, hosts now won’t be able to renew their licenses if they have occupation rates over 50% of the year, if they try to list additional properties, or to extend rental periods. Additionally, the government will prohibit short term rentals from being located in social, popular and rebuilt housing. <br> <br> Mexico City’s municipal policy is not enough to stop gentrification or minimize the impact it has in neighborhoods like Júarez, Roma and Condesa. We also need to talk about who are the users of short-term housing, and what can be done to regulate the touristification of Mexico City. When talking about gentrification, we cannot put the blame only on Airbnb as a business itself;  the people who use the platform and those who permitted and have profited from Airbnb’s exponential growth also need to be implicated. ',
            
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
            title: 'Airbnb & The Financialisation of Housing',
            image: './images/proptech.png',
            imageCaption: 'A professional industry of real estate platforms and technologies have emerged around property markets in Latin America, including many that cater specifically to short-term rental.',
            // image: './images/tulum_beach.jpg',
            description: 'The companies that own and/or manage buildings like Dinamarca 77 and Pandora purchase them because they see these buildings not as homes, as the tenants who were evicted did, but as a method of profiteering. This is known as the financialization of housing - the treatment of housing as a financial asset by investors rather than as a human right [8].  <br> <br> Although the financialization of housing is not new, its impacts have been magnified through digital platforms and tools. Smartphones and apps (and the data and analytical capabilities they enable) allow investors to manage large and increasingly complex property portfolios [9]. They enable financialization at greater speeds, broader scales, and with increased profit potential.  <br> <br> Short-term rental platforms like Airbnb create opportunities for a new kind of financialization.  They cater to a growing class of mobile, relatively wealthy remote workers (and tourists) who can afford to pay far higher rents than locals. Furthermore, by sidestepping long-term tenant regulations and protections, Airbnb gives hosts much more flexibility and control over their properties [10].  For prospective investors like Mr W and Virtual Homes, the revenue potential is too great to ignore.  <br> <br> This phenomenon is not unique to Mexico City [11].  A professional industry of property managers, landlords, and real estate platforms has emerged in tandem with Airbnb in cities across the world. The boutiques and facades of CDMX are a local expression of a global system that values capital investments and profit over human lives and community cohesion. ',
            
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
            title: 'Conclusion',
            image: './images/juarez_conclusion.png',
            imageCaption: 'Murals like these are one way organizers in la Colonia Juárez resist blanqueamiento por despojo and make their claims to the neighbourhood visible.',
            // image: './images/tulum_beach.jpg',
            description: 'Although the municipal government’s recent policies signal a desire to slow the growth of Airbnb, it is unclear how successful they will be, and how well (if at all) the new rules will be enforced. Digital nomads continue to take selfies on Mexico City’s streets, and gentrification continues to shape the cultural and economic landscape. However, residents in neighborhoods like La Juárez are not accepting these changes as inevitable. <br> <br> Blanqueamiento por despojo and gentrification are ongoing, and are rooted in longer histories of dispossession in Mexico City. Yet Juaricuas are not deterred - they continue to practice everyday and creative forms of resistance to Airbnb and other forms of capitalist speculation in their neighborhood. These modes of resistance are visible and forthright, as wheat pasted posters or painted murals on buildings where residents are resisting displacement. Others are perhaps less obvious, such as a street vendor continuing to sell their goods even after the buildings they share the sidewalk with have been whitewashed. Juaricuas continue to insist on the right to remain in their neighborhood, in their homes, on their terms. <em> El barrio es de quien lo trabaja. La lucha sigue. </em>',
            
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
            title: '',
            // image: './images/tulum_beach.jpg',
            // description: 'Text for the chapter',
            description: "add acknowledgements here.",
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
            description: "[1] Quote from the blog <em> <a href = 'https://digitalnomadlifestyle.com/2024/06/14/mexico-city-the-complete-digital-nomad-guide/' style='color:#ffffff;' >Digital Nomad Lifestyle </a> </em>. <br> <br> [2] Figure from <a href = 'https://english.elpais.com/international/2022-12-13/mr-w-the-mysterious-airbnb-broker-in-mexico-city.html_' style='color:#ffffff;'> EL PAÍS </a> <br> <br> [3] See the research of <a href= ‘https://doi.org/10.1093/cjres/rsad009’ style='color:#ffffff;'>Hidalgo et al. (2023) </a> for more information. <br> <br> [4] Blanqueamiento por despojo was first discussed in <a href = ‘https://permanecerenlamerced.wordpress.com/2019/03/18/blanqueamiento-por-despojo-por-pablo-gaytan-santiago/’ style='color:#ffffff;'> work </a> by Pablo Gaytán Santiago, a researcher in the Department of Social Relations and the Communication and Politics Area at Universidad Autónoma Metropolitana-Xochimilco and a documentary filmmaker. Sergio González, lead organizer with the 06600 Plataforma Vecinal y Observatorio de la Colonia Juárez, also speaks to the terms origins within the Juaricuas’ housing movement.  <br> <br> [5] For more information, see Carla Escoffié’s book, <em> País sin techo: Ciudades, historias y luchas sobre la vivienda </em>, and the work of <a href = ‘https://doi.org/10.5354/0718-8358.2022.65649’ style='color:#ffffff;'> Linz et al. (2022) </a>. <br> <br> [6] See Airbnb’s announcement on this partnership <a href = ‘https://news.airbnb.com/cdmx-unesco-and-airbnb-announce-partnerships-to-promote-mexico-city-as-a-g/’ style='color:#ffffff;'> here </a>. <br> <br> [7] The full policy is available in the <a href = ‘https://data.consejeria.cdmx.gob.mx/portal_old/uploads/gacetas/31ad26cb85b412c0492e504ade4f23ab.pdf  style='color:#ffffff;'’> Gaceta Oficial de la Ciudad de Órgano de México 1330 </a>. <br> <br> [8] <a href = ‘https://doi.org/10.1177/0042098014543704’ style='color:#ffffff;'> Fields & Uffer (2016) </a> have written more about the financialization of housing in the context of New York City and Berlin. <br> <br> [9] See <a href = ‘https://doi.org/10.1177/0308518X19846514’ style='color:#ffffff;'> Fields (2022) </a> for a discussion of digital technologies and their role in financial accumulation.  <br> <br> [10]  <a href = ‘https://doi.org/10.1016/j.cities.2023.104245’ style='color:#ffffff;'> Gil et al. (2023) </a> discuss the connections between short-term rental platforms and the financialization of housing in more detail.  <br> <br> [11]  <a href = ‘https://doi.org/10.1016/j.cities.2023.104245’ style='color:#ffffff;'> Gil et al. (2023) </a> and <a href = ‘https://www.routledge.com/Airbnb-Short-Term-Rentals-and-the-Future-of-Housing/Hoffman-SchmitterHeisler/p/book/9780367234188?srsltid=AfmBOopw8w0Cl8zsGoHmA01xS46pc48K1BZcN6ReEVTF1WzygKM0rk5y’ style='color:#ffffff;'> Hofman & Heisler’s (2020) </a> research both investigate the role of Airbnb in the financialization of housing in other cities.",
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