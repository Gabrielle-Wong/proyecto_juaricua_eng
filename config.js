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
    subtitle: "Gentrification in Mexico City Since the Pandemic",
    // subtitle: 'subtitle, if desired',
    byline: 'A mapping project from Proyecto Juaricua: A Housing Justice Lab | TEMPORARY: this site was last updated on September 21, 2024 ',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    
    // Chapter Details
    chapters: [

        {
            // 1: Intro
            id: 'introduction',
            alignment: 'left',
            hidden: false,
            // title: 'Introduction',
            // image: './images/tulum_beach.jpg',
            
            description: 'Mexico City has long been a tourist destination, yet in recent years tourism has looked different here. Since the COVID-19 pandemic, as companies worldwide have increasingly offered remote work opportunities to their employees, there has been a dramatic increase in foreign remote workers moving to Mexico City for extended periods of time. ',
            image: './images/intro_image_v2.png',
            imageCaption: "Left: Your tourism drives out families. <br> Right: It is said that a long, long time ago (before Airbnb), there was life in this building.",
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
            // 2: Digital Nomads
            id: 'digital_nomads',
            alignment: 'center',
            hidden: false,
            // title: 'Introduction',
            // image: './images/tulum_beach.jpg',
            
            description: 'These predominantly North American workers, or “digital nomads”, began to turn their eye to Mexico City around 2021, as an abundance of influencer content on moving to Mexico City started blowing up online around 2022. These “digital nomad influencers” have no doubt played a role in this drawing the public’s attention to Mexico City, citing the city’s “vibrant culture, affordable cost of living, and a variety of coworking spaces” as major draws. ',
            image: './images/digital_nomads.png',
            imageCaption: 'Influencer content on YouTube, Instagram, TikTok, and other social platforms portray Mexico City as a desirable and affordable location for "digital nomads".', 
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
            // 2: Context for Cuauhtémoc
            id: 'context_cuahtemoc',
            alignment: 'left',
            hidden: false,
            title: 'Airbnb Listings in Alcaldía Cuauhtémoc',
            
            description: 'Around the time we see this uptake in interest from “digital nomads” seeking to work remotely in Mexico City, we also observe a dramatic increase in the number of short term rentals, particularly AirBnBs, listed in the central core of Mexico City. While the Roma and Condesa neighborhoods had already been populated with a multitude of AirBnB units prior to the pandemic, the number of AirBnB units overall in Mexico City’s central core, Alcaldía Cuauhtémoc, has increased by 69% between 2019 and 2024. ',
            legend: '<em>Airbnb units in Cuauhtémoc, December 2023. Each pink dot represents one Airbnb unit. Data from Inside Airbnb, 2023. <br> <br> This map is interactive! You can zoom and pan. </em>',
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
                    layer: 'dec23',
                    opacity: 0.5,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                
                {
                    layer: 'dec23',
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
                //     opacity: 0
                // }
            ]
            
        },

        {
            // 2: Context for Cuauhtémoc ii
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
            // 3: Mega Landlords
            id: 'mega_landlords',
            alignment: 'center',
            hidden: false,
            title: 'The Growth of Mega-Hosts',
            // image: './images/tulum_beach.jpg',
            description: 'This noted increase in Airbnb units in Mexico City also marks a shift in the short term rental business model, as we also begin to observe an increase in Airbnb landlords that manage multiple units - anywhere from dozens up to hundreds of units. The maps below illustrate the increase in number of Airbnb units between 2019 and 2023, and in particular how these units are increasingly owned by mega-hosts.',
            
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
                    layer: 'oct19Hosts',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 1,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'oct19Hosts',
                    opacity: 0,
                    duration: 500
                },
                
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
            
        },

        {
            // 3: Mega Landlords
            id: 'mega_landlords_ii',
            alignment: 'left',
            hidden: false,
            title: "Mega Host Airbnb listings in December 2019 ",
            // description: "Shown based on number of units owned by the unit's host.",
            image: './images/number_of_units_owned_legend.png',
            // description: 'Since 2022, there has been a noted increase in Airbnb landlords that own multiple units. A few mega-landlords have emerged in Mexico City, that own or manage 100+ units.',
            legend: '<em> This map is interactive! You can zoom and pan. </em>',
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
                    layer: 'dec19_hosts',
                    opacity: 1, 
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 1,
                    duration: 500
                }
                
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'dec19_hosts',
                    opacity: 0, 
                    duration: 500
                },
               
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
            
        },
        {
            // 3: Mega Landlords
            id: 'mega_landlords_iii',
            alignment: 'left',
            hidden: false,
            title: "Mega Host Airbnb listings in December 2023",
            image: './images/number_of_units_owned_legend.png',
            legend: '<em> This map is interactive! You can zoom and pan. </em>',

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
                    layer: 'dec23_hosts',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'cuauhtemocLine',
                    opacity: 1,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'dec23_hosts',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
            
        },

        {
            // 4: 100+ Landlords
            id: 'hundred_plus_landlords_text',
            alignment: 'center',
            hidden: false,
            title: 'Mega-Landlords',
            // image: './images/tulum_beach.jpg',
            description: 'A few mega-hosts have emerged over the past five years that have come to manage over 1,500 units altogether as of 2024. Two mega-hosts stand out in particular due to the number of units they manage: Mr. W and Virtual Homes. <br> <br> Mr.W, Virtual Homes, and several other mega hosts often manage entire apartment buildings of Airbnb units. This raises the question, what existed in these buildings prior to them becoming Airbnbs? Who lived here and what impact has Airbnb had on the surrounding neighborhood?',
            
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
                    layer: 'cuauhtemocLine',
                    opacity: 1,
                    duration: 500
                },

                {
                    layer: 'dec19megahosts',
                    opacity: 1, 
                    duration: 500
                }
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
            // 4: 100+ Unit Landlords
            id: 'hundred_plus_landlords_dec2019',
            alignment: 'left',
            hidden: false,
            title: 'Mega-Landlords: December 2019',
            image: "./images/megalandlord_legend.png",
            legend: '<em> This map is interactive! You can zoom and pan. </em>',
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
                    layer: 'dec19megahosts',
                    opacity: 1, 
                    duration: 500
                }

            
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                
                {
                    layer: 'dec19megahosts',
                    opacity: 0, 
                    duration: 500
                }

                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
            
        },

     
        {
            // 4: 100+ Unit Landlords
            id: 'hundred_plus_landlords_dec2023',
            alignment: 'left',
            hidden: false,
            title: 'Mega-Landlords: December 2023',
            image: "./images/megalandlord_legend.png",
            legend: '<em> This map is interactive! You can zoom and pan. </em>',
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
                    layer: 'dec23megahosts',
                    opacity: 1, 
                    duration: 500
                }

            
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'cuauhtemocLine',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'dec23megahosts',
                    opacity: 0, 
                    duration: 500
                }

                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
            
        },
       

        {
            // 6: Context for Juárez 
            id: 'context_juarez',
            alignment: 'left',
            hidden: false,
            title: 'Colonia Juárez',
            // image: './images/tulum_beach.jpg',
            description: 'Colonia Juarez is one such neighborhood that has felt the effects of this increase in Airbnb presence over the past few years. While there were only 612 Airbnb units in the neighborhood in 2019, as of October 2023, there are 1,237 units. This is effectively 600+ fewer apartments available for local residents. ',
            
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
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
            
        },

        {
            // 6: Context for Juárez ii
            id: 'context_juarez_ii',
            alignment: 'center',
            hidden: false,
            // title: 'Colonia Juárez',
            image: './images/jua_points.png',
            //description: 'One neighborhood in particular has felt the effects of this increase in Airbnb units since the onset of the pandemic is the Colonia Juarez. While there were only 612 Airbnb units in the neighborhood in 2019, as of 2024, there are 1,237. ',
            
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
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
            
        },


        {
            // 7: Context for 06600 
            id: 'context_06600',
            alignment: 'center',
            hidden: false,
            title: '06600 Plataforma Vecinal y Observatorio de la Colonia Juárez',
            // image: './images/tulum_beach.jpg',
            description: 'Community activists of the 06600 Plataforma Vecinal y Observatorio de la Colonia Juárez have been organizing around displacement and gentrification in their neighborhood since 2014. The 2017 earthquake prompted a series of mass evictions, and since the pandemic these evictions have continued and become more prevalent. ',
            
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
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'juarezLine',
                    opacity: 0,
                    duration: 500
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
            
        },

        {
            // 8: Dinamarca 77 
            id: 'dinamarca77',
            alignment: 'left',
            hidden: false,
            title: 'Dinamarca 77',
            image: './images/dinamarca.jpg',
            imageCaption: 'Dinamarca 77 in 2024', 
            description: 'For the residents of one such building in Colonia Juárez, Dinamarca 77, 12 families are estimated to have been forcefully evicted in April 2018. [add more info from the videos of evictions from this building] This building opened as approximately 11 Airbnb units in October 2023 which are owned by Mr.W, the mega-host that owns the most units in Mexico City. ',
            
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
                 }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'dinamarca77',
                    opacity: 0,
                    duration: 4000
                 },

                 {
                    layer: 'minusDinamarca77',
                    opacity: 0,
                    duration: 3000
                 }
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
            
        },

        {
            // 9:  Nápoles 35 and Londres 49 
            id: 'napoles35_londres49',
            alignment: 'left',
            hidden: false,
            title: 'Londres 49 & Nápoles 35',
            // imageBeforeDescription: "./images/juarez_skyline.png",
            image: './images/pandora.jpg',
            imageCaption: 'Londres 49 & Nápoles 35 after renovation',
            description: 'Two other buildings in Colonia Juarez, Nápoles 35 and Londres 49, were converted into over 35 Airbnb units in November 2023.  It is estimated that 18 families were forcefully evicted from the buildings in December 2020. As tenants described, “XXX” [add more info from the videos of evictions from this building] This Virtual Homes-managed building, renamed Pandora, has dramatically altered the landscape of the surrounding neighborhood.',
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
                 }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
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
                 }
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
            
        },

        {
            // 10: Neighbourhood Impact
            id: 'neighbourhood_impact',
            alignment: 'center',
            hidden: false,
            title: '',
            // image: './images/tulum_beach.jpg',
            image: '.images/pandora_streetscape.png',
            description:'Airbnb has had a tremendous impact on the daily lives of Mexico City residents in the city’s central core. In the case of Airbnb-driven redevelopments like Dinamarca 77 and Pandora, tenants lives are profoundly impacted, first through the trauma of the violent evictions they were forced to experience, and then by the difficulty residents often have in finding other apartments in their budget in the neighborhood. This is also due in part to how the increase in Airbnb units drives up local rent prices, taking rental units off the market and turning them into short-term rentals with inflated nightly costs. <br> <br> The increase in Airbnb units also impacts the types of businesses that emerge in a given neighborhood, with higher-priced restaurants, cafes, shops and boutiques emerging that cater to the tastes of elite consumers and foreign tourists. The emergence of AirBn-Buildings also often entails the displacement of commercial businesses as well. For example, the conversion of Dinamarca 77 to Airbnb units also displaced an economical restaurant and a corner store, turning these commercial spaces into several upscale boutiques. <br> <br> The whitewashing of these buildings also creates an alternate rendering of the neighborhood, a polished facade reminiscent of... ',
            
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
            // 11: CDMX Policy on Digital Nomads
            id: 'cdmx_digital_nomads',
            alignment: 'center',
            hidden: false,
            title: 'Digital Nomads',
            // image: './images/tulum_beach.jpg',
            description: 'Focus on CDMX’s policy on digital nomads and subsequent legal shift',
            
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
            // 11: Financialisation of Housing
            id: 'housing_financialisation',
            alignment: 'center',
            hidden: false,
            title: 'The Financialisation of Housing',
            // image: './images/tulum_beach.jpg',
            description: 'Tie into broader trends around financialization of housing elsewhere in Mexico and beyond',
            
            location: {
                center: [-99.88870, 20.01048],
                zoom: 3.50,
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
            // Test Chapter
            id: 'testChapter',
            alignment: 'left',
            hidden: false,
            title: 'This is a title in Mapbox.',
            gifBefore: './images/this_is_fine.gif',
            imageBeforeDescription: './images/test_image_before.png',
            imageBDCaption: 'Image caption (before description)',
            description: "This is general body text. <br> <br> <strong> Many formatting options are possible, </strong> but the description text has to be all in one block (unless a new variable is made, which is possible but can get messy).",
            video: './media/test_video.mp4',
            videoCaption: "Video caption",
            audio: './media/test_audio.mp3',
            audioCaption: "Audio caption",
            image: './images/test_image_after.png',
            imageCaption: 'Second image caption',

           
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
            legend: 'This is legend text!',
            mapAnimation: 'easeTo',
            mapInteractive: true,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
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
            // References
            id: 'acknowledgements',
            alignment: 'full',
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
            // References
            id: 'references',
            alignment: 'full',
            hidden: false,
            title: 'References',
            // image: './images/tulum_beach.jpg',
            // description: 'Text for the chapter',
            description: "add references here.",
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
        }

    ]
};
