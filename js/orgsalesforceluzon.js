Highcharts.chart('container', {
    chart: {
        height: 600,
        inverted: true
    },
    title: {
        text: 'Sales Department'
    },
    series: [{
        type: 'organization',
        name: 'Biosite Medical Instruments',
        keys: ['from', 'to'],
        data: [
            ['sdir', 'rsml'],

                ['rsml', 'dsm1'],['dsm1', 'msr'],
                ['rsml', 'dsm2'],['dsm2', 'msrc'],
                ['rsml', 'dsm3'],['dsm3', 'msrr'],

                     ['msr', 'msr1', 'msr3', 'msr5'],
                     ['msr', 'msr2', 'msr4', 'msr6'], 
                         

                     ['msrc', 'msrc1'],
                     ['msrc', 'msrc2'],
                        ['msrc1', 'msrc3'],
                        ['msrc2', 'msrc4'],
                        
                     ['msrr', 'msrr1'],
                     ['msrr', 'msrr2'],
                        ['msrr1', 'msrr3'],
                        ['msrr2', 'msrr4'],

                        
        ],

        levels: [{
            level: 0,
            color: 'silver',
            textOverflow:true,
            dataLabels: {
                color: 'white'
            },
            height: 30
        }, {
            level: 1,
            color: '#359154',
            dataLabels: {
                color: 'white'
            },
            height: 30
        }, {
            level: 2,
            color: '#980104'
        }, {
            level: 4,
            color: '#359154'
        }],    
        nodes: [
            {
                id: 'sdir',
                title: 'Sales Director',
                name: 'Stephen Hernandez ',
                image: 'https://i.ibb.co/drm316W/att-Zp-SVf-Si-QDj-Aseuh-Lu-Cymrb-CPNl-DXr-Tzr-Qwxo-Bk-E9xk.jpg',
                contact: 'nsd@biositeph.com',
                contactNumber: '+63-917-185-0316',
                facebookLink: 'https://www.facebook.com/NSD.SCH.BMI',
                areaCode: ''
            },
            {
                id: 'rsml',
                title: 'Regional Sales Manager',
                name: 'Girlie Guerrero Doroja',
                image: 'https://i.ibb.co/VTP5B4K/GIRLIE.jpg',
                contact: 'biosite.dsmnorthluzon@gmail.com',
                contactNumber: '+639-917-164-3956',
                facebookLink: 'https://www.facebook.com/girlie.doroja' ,
                areaCode: ''
            },
                        {
                            id: 'dsm1',
                            title: 'District Sales Manager',
                            name: 'Rose Saligumba',
                            image: 'https://i.ibb.co/LrHb7JT/ROS.jpg',
                            contact: 'kathleen.reyes@biosite.com',
                            contactNumber: '+639-293049596',
                            facebookLink: 'https://www.facebook.com/rose.saligumba',
                            areaCode: ''
                        },


                                {
                                    id: 'msr',
                                    name: 'MEDICAL SALES REPRESENTATIVE',
                                    title: '(NCR1-4)'
                                },
                                
                
                                    {
                                        id: 'msr1',
                                        title: 'Medical Sales Representative',
                                        additionalInfo: 'Rose Saligumba',
                                        name: 'Edelyn Teodoro',
                                        image: 'https://i.ibb.co/NnpKC6T/edelyn.jpg',
                                        contact: 'annelie.bacay@biositeph.com',
                                        contactNumber: '+63-917-110-2979',
                                        facebookLink: 'https://www.facebook.com/people/Edelyn-Msr-Teodoro/pfbid02eJF4GtQf1Ay1qnmw9Dj8YaoMLDqm8Pdozue77Gk8aCqfLN8pfnaoRzD2jdi2fMSul/',
                                        areaCode: 'QUEZON CITY 1 - NKTI -VETERANS - NEW ERA'
                                    },
                                    {
                                        id: 'msr2',
                                        title: 'Medical Sales Representative',
                                        name: 'John Paul Ubando',
                                        image: 'https://i.ibb.co/mvHPQHv/2024-10-22-15-40-00.png',
                                        contact: 'annelie.bacay@biositeph.com',
                                        contactNumber: '+63-917-110-2979',
                                        facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/',
                                        areaCode: 'QUEZON CITY 2 - HEART CENTER - VLUNA - QUIRINO'
                                    },

                                    {
                                        id: 'msr3',
                                        title: 'Medical Sales Representative',
                                        additionalInfo: 'Rose Saligumba',
                                        name: 'Edelyn Teodoro',
                                        image: 'https://i.ibb.co/NnpKC6T/edelyn.jpg',
                                        contact: 'annelie.bacay@biositeph.com',
                                        contactNumber: '+63-917-110-2979',
                                        facebookLink: 'https://www.facebook.com/people/Edelyn-Msr-Teodoro/pfbid02eJF4GtQf1Ay1qnmw9Dj8YaoMLDqm8Pdozue77Gk8aCqfLN8pfnaoRzD2jdi2fMSul/',
                                        areaCode: 'QUEZON CITY 1 - NKTI -VETERANS - NEW ERA'
                                    },
                                    {
                                        id: 'msr4',
                                        title: 'Medical Sales Representative',
                                        name: 'John Paul Ubando',
                                        image: 'https://i.ibb.co/mvHPQHv/2024-10-22-15-40-00.png',
                                        contact: 'annelie.bacay@biositeph.com',
                                        contactNumber: '+63-917-110-2979',
                                        facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/',
                                        areaCode: 'QUEZON CITY 2 - HEART CENTER - VLUNA - QUIRINO'
                                    },
                                    {
                                        id: 'msr5',
                                        title: 'Medical Sales Representative',
                                        name: 'John Paul Ubando',
                                        image: 'https://i.ibb.co/mvHPQHv/2024-10-22-15-40-00.png',
                                        contact: 'annelie.bacay@biositeph.com',
                                        contactNumber: '+63-917-110-2979',
                                        facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/',
                                        areaCode: 'QUEZON CITY 2 - HEART CENTER - VLUNA - QUIRINO'
                                    },
                                    {
                                        id: 'msr6',
                                        title: 'Medical Sales Representative',
                                        name: 'John Paul Ubando',
                                        image: 'https://i.ibb.co/mvHPQHv/2024-10-22-15-40-00.png',
                                        contact: 'annelie.bacay@biositeph.com',
                                        contactNumber: '+63-917-110-2979',
                                        facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/',
                                        areaCode: 'QUEZON CITY 2 - HEART CENTER - VLUNA - QUIRINO'
                                    },
                        {
                            id: 'dsm2',
                            title: 'District Sales Manager',
                            name: 'Christian B De Guzman',
                            image: 'https://i.ibb.co/By9KrZ0/CHRISTIAN-Rochelle-Ofracio.jpg',
                            contact: 'dsm.deguzman@biositeph.com',
                            contactNumber: '+63-917-146-1897',
                            facebookLink: 'https://www.facebook.com/people/Christian-DM-De-Guzman/pfbid0qNBTsPe5PXfBr4cmP1C3F4mxTdg5irL88EeuD2xhMbNo4145Vn1fTHSSBA8W3mHel/',
                             areaCode: ''
                        },

                                    {
                                        id: 'msrc',
                                        name: 'MEDICAL SALES REPRESENTATIVE',
                                        title: '(NCR5-8)'
                                    },
                                    
                    
                                        {
                                            id: 'msrc1',
                                            title: 'Medical Sales Representative',
                                            additionalInfo: 'Rose Saligumba',
                                            name: 'Edelyn Teodoro',
                                            image: 'https://i.ibb.co/NnpKC6T/edelyn.jpg',
                                            contact: 'annelie.bacay@biositeph.com',
                                            contactNumber: '+63-917-110-2979',
                                            facebookLink: 'https://www.facebook.com/people/Edelyn-Msr-Teodoro/pfbid02eJF4GtQf1Ay1qnmw9Dj8YaoMLDqm8Pdozue77Gk8aCqfLN8pfnaoRzD2jdi2fMSul/',
                                            areaCode: 'QUEZON CITY 1 - NKTI -VETERANS - NEW ERA'
                                        },
                                        {
                                            id: 'msrc2',
                                            title: 'Medical Sales Representative',
                                            name: 'John Paul Ubando',
                                            image: 'https://i.ibb.co/mvHPQHv/2024-10-22-15-40-00.png',
                                            contact: 'annelie.bacay@biositeph.com',
                                            contactNumber: '+63-917-110-2979',
                                            facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/',
                                            areaCode: 'QUEZON CITY 2 - HEART CENTER - VLUNA - QUIRINO'
                                        },

                                        {
                                            id: 'msrc3',
                                            title: 'Medical Sales Representative',
                                            additionalInfo: 'Rose Saligumba',
                                            name: 'Edelyn Teodoro',
                                            image: 'https://i.ibb.co/NnpKC6T/edelyn.jpg',
                                            contact: 'annelie.bacay@biositeph.com',
                                            contactNumber: '+63-917-110-2979',
                                            facebookLink: 'https://www.facebook.com/people/Edelyn-Msr-Teodoro/pfbid02eJF4GtQf1Ay1qnmw9Dj8YaoMLDqm8Pdozue77Gk8aCqfLN8pfnaoRzD2jdi2fMSul/',
                                            areaCode: 'QUEZON CITY 1 - NKTI -VETERANS - NEW ERA'
                                        },
                                        {
                                            id: 'msrc3',
                                            title: 'Medical Sales Representative',
                                            name: 'John Paul Ubando',
                                            image: 'https://i.ibb.co/mvHPQHv/2024-10-22-15-40-00.png',
                                            contact: 'annelie.bacay@biositeph.com',
                                            contactNumber: '+63-917-110-2979',
                                            facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/',
                                            areaCode: 'QUEZON CITY 2 - HEART CENTER - VLUNA - QUIRINO'
                                        },
                        
                        {
                            id: 'dsm3',
                            title: 'District Sales Manager',
                            name: 'Elie Bacay',
                            image: 'https://i.ibb.co/M689FLV/ELIE.jpg',
                            contact: 'annelie.bacay@biositeph.com',
                            contactNumber: '+63-917-110-2979',
                            facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/',
                            areaCode: ''
                        },


                                {
                                    id: 'msrr',
                                    name: 'MEDICAL SALES REPRESENTATIVE',
                                    title: 'South Luzon'
                                },
                                
                
                                    {
                                        id: 'msrr1',
                                        title: 'Medical Sales Representative',
                                        additionalInfo: 'Rose Saligumba',
                                        name: 'Edelyn Teodoro',
                                        image: 'https://i.ibb.co/NnpKC6T/edelyn.jpg',
                                        contact: 'annelie.bacay@biositeph.com',
                                        contactNumber: '+63-917-110-2979',
                                        facebookLink: 'https://www.facebook.com/people/Edelyn-Msr-Teodoro/pfbid02eJF4GtQf1Ay1qnmw9Dj8YaoMLDqm8Pdozue77Gk8aCqfLN8pfnaoRzD2jdi2fMSul/',
                                        areaCode: 'QUEZON CITY 1 - NKTI -VETERANS - NEW ERA'
                                    },
                                    {
                                        id: 'msrr2',
                                        title: 'Medical Sales Representative',
                                        name: 'John Paul Ubando',
                                        image: 'https://i.ibb.co/mvHPQHv/2024-10-22-15-40-00.png',
                                        contact: 'annelie.bacay@biositeph.com',
                                        contactNumber: '+63-917-110-2979',
                                        facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/',
                                        areaCode: 'QUEZON CITY 2 - HEART CENTER - VLUNA - QUIRINO'
                                    },

                                    {
                                        id: 'msrr3',
                                        title: 'Medical Sales Representative',
                                        additionalInfo: 'Rose Saligumba',
                                        name: 'Edelyn Teodoro',
                                        image: 'https://i.ibb.co/NnpKC6T/edelyn.jpg',
                                        contact: 'annelie.bacay@biositeph.com',
                                        contactNumber: '+63-917-110-2979',
                                        facebookLink: 'https://www.facebook.com/people/Edelyn-Msr-Teodoro/pfbid02eJF4GtQf1Ay1qnmw9Dj8YaoMLDqm8Pdozue77Gk8aCqfLN8pfnaoRzD2jdi2fMSul/',
                                        areaCode: 'QUEZON CITY 1 - NKTI -VETERANS - NEW ERA'
                                    },
                                    {
                                        id: 'msrr4',
                                        title: 'Medical Sales Representative',
                                        name: 'John Paul Ubando',
                                        image: 'https://i.ibb.co/mvHPQHv/2024-10-22-15-40-00.png',
                                        contact: 'annelie.bacay@biositeph.com',
                                        contactNumber: '+63-917-110-2979',
                                        facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/',
                                        areaCode: 'QUEZON CITY 2 - HEART CENTER - VLUNA - QUIRINO'
                                    },


               
        ],
        colorByPoint: false,
        dataLabels: {
            color: 'white',
            style: { fontSize: '16px' }
        },
        borderColor: 'white',
        nodeWidth: 'auto'
    }],
    tooltip: { outside: true },
    exporting: { allowHTML: true, sourceWidth: 1000, sourceHeight: 500 },
    credits: { enabled: false },
    plotOptions: {
        series: {
            events: {
                click: function (event) {
                    const point = event.point;

                    if (!point.image) {
                        console.warn("No image available. Modal won't open.");
                        return;
                    }

                    const modal = document.getElementById("myModal");
                    const span = document.querySelector(".close");
                    const image = document.getElementById("modal-image");

                    // Update modal content
                    document.getElementById("modal-title").innerText = point.name;
                    image.src = point.image;
                    image.style.display = 'block';
                    document.getElementById("modal-title-text").innerText = `Position: ${point.title || 'N/A'}`;
                    document.getElementById("modal-contact").innerText = `Email: ${point.contact || 'N/A'}`;
                    document.getElementById("modal-contact-number").innerText = `Phone: ${point.contactNumber || 'N/A'}`;

                    const facebookLink = document.getElementById("modal-facebook-link");
                    if (point.facebookLink) {
                        facebookLink.href = point.facebookLink;
                        facebookLink.style.display = 'block';
                    } else {
                        facebookLink.style.display = 'none';
                    }

                    // Show the modal
                    modal.style.display = "block";

                    // Close the modal when clicking on <span> (x)
                    span.onclick = function () {
                        modal.style.display = "none";
                    };

                    // Close the modal when clicking outside of it
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    };
                }
            }
        }
    }
});


// ====================duplicate2=================
// ====================duplicate2=================
// ====================duplicate2=================
    
// Highcharts.chart('container-duplicate', {
//     chart: {
//         height: 600, // Keep chart height
//         inverted: true
//     },

//     title: {
//         text: ''
//     },

//     accessibility: {
//         point: {
//             descriptionFormat: '{add index 1}. {toNode.name}' +
//                 '{#if (ne toNode.name toNode.id)}, {toNode.id}{/if}, ' +
//                 'reports to {fromNode.id}'
//         }
//     },

//     series: [{
//         type: 'organization',
//         name: 'Medical Sales Representative',
//         keys: ['from', 'to'],
//         data: [
                    
//             ['rsml', 'msr1'],

//                     ['rsml', 'msr1'],
//                     ['rsml', 'msr2'],
//                     ['rsml', 'msr3'],
//                     ['rsml', 'msr4'],
//                         ['msr4', 'msr5'], 
//                         ['msr3', 'msr6'], 
//                         ['msr2', 'msr7'], 
//                         ['msr1', 'msr8'], 
                            
//                         ['msr5', 'msr9'], 
//                         ['msr6', 'msr10'], 
//                         ['msr7', 'msr11'], 
//                         ['msr8', 'msr12'], 

//                         ['msr9', 'msr13'], 
//                         ['msr10', 'msr14'], 
//                         ['msr11', 'msr15'], 
//                         ['msr12', 'msr16'], 
            
//         ],
//         levels: [{
//             level: 0,
//             color: 'silver',
//             textOverflow:true,
//             dataLabels: {
//                 color: 'white'
//             },
//             height: 30
//         }, {
//             level: 1,
//             color: '#359154',
//             dataLabels: {
//                 color: 'white'
//             },
//             height: 30
//         }, 
//         {
//             level: 1,
//             color: '#3c57a6'
//         },{
//             level: 1,
//             color: '#3c57a6'
//         }, 
//         {
//             level: 2,
//             color: '#4064bc'
//         },
//         {
//             level: 3,
//             color: '#25438e'
//         },],
//         nodes: [ 
    
               
//                 {
//                     id: 'rsml',
//                     name: 'MEDICAL SALES REPRESENTATIVE'
//                 },
                

//                     {
//                         id: 'msr1',
//                         title: 'Medical Sales Representative',
//                         additionalInfo: 'Rose Saligumba',
//                         name: 'Edelyn Teodoro',
//                         image: 'https://i.ibb.co/NnpKC6T/edelyn.jpg',
//                         contact: 'annelie.bacay@biositeph.com',
//                         contactNumber: '+63-917-110-2979',
//                         facebookLink: 'https://www.facebook.com/people/Edelyn-Msr-Teodoro/pfbid02eJF4GtQf1Ay1qnmw9Dj8YaoMLDqm8Pdozue77Gk8aCqfLN8pfnaoRzD2jdi2fMSul/',
//                         areaCode: 'QUEZON CITY 1 - NKTI -VETERANS - NEW ERA'
//                     },
//                     {
//                         id: 'msr2',
//                         title: 'Medical Sales Representative',
//                         name: 'John Paul Ubando',
//                         image: 'https://i.ibb.co/mvHPQHv/2024-10-22-15-40-00.png',
//                         contact: 'annelie.bacay@biositeph.com',
//                         contactNumber: '+63-917-110-2979',
//                         facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/',
//                         areaCode: 'QUEZON CITY 2 - HEART CENTER - VLUNA - QUIRINO'
//                     },
//                     {
//                         id: 'msr3',
//                         title: 'Medical Sales Representative',
//                         name: 'Erickson Mhark Moraga',
//                         image: 'https://i.ibb.co/JFvyydB/ERICKSON-MORAGA-Rochelle-Ofracio.jpg',
//                         contact: 'annelie.bacay@biositeph.com',
//                         contactNumber: '+63-917-110-2979',
//                         facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/'
//                     },
//                     {
//                         id: 'msr4',
//                         title: 'Medical Sales Representative',
//                         name: 'Judelyn Denaga',
//                         image: 'https://i.ibb.co/Jcdh3Yn/JUDELYN-DENAGA-2-Rochelle-Ofracio.jpg',
//                         contact: 'annelie.bacay@biositeph.com',
//                         contactNumber: '+63-917-110-2979',
//                         facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/'
//                     },
//                     {
//                         id: 'msr5',
//                         title: 'Medical Sales Representative',
//                         name: 'Nicole Irinco',
//                         image: 'https://i.ibb.co/n0V34f1/inbound8494435304047350146-Nicole-Irinco.jpg',
//                         contact: 'annelie.bacay@biositeph.com',
//                         contactNumber: '+63-917-110-2979',
//                         facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/'
//                     },
//                     {
//                         id: 'msr6',
//                         title: 'Medical Sales Representative',
//                         name: '<span style="color:red;">VACANT</span>',
//                         // image: 'https://i.ibb.co/M689FLV/ELIE.jpg',
//                         // contact: 'annelie.bacay@biositeph.com',
//                         // contactNumber: '+63-917-110-2979',
//                         // facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/'
//                     },
//                     {
//                         id: 'msr7',
//                         title: 'Medical Sales Representative',
//                         name: '<span style="color:red;">VACANT</span>',
//                         // image: 'https://i.ibb.co/M689FLV/ELIE.jpg',
//                         // contact: 'annelie.bacay@biositeph.com',
//                         // contactNumber: '+63-917-110-2979',
//                         // facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/'
//                     },
//                     {
//                         id: 'msr8',
//                         title: 'Medical Sales Representative',
//                         name: '<span style="color:red;">VACANT</span>',
//                         // image: 'https://i.ibb.co/M689FLV/ELIE.jpg',
//                         // contact: 'annelie.bacay@biositeph.com',
//                         // contactNumber: '+63-917-110-2979',
//                         // facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/'
//                     },


//                             {
//                                 id: 'msr9',
//                                 title: 'Medical Sales Representative',
//                                 name: 'Angel Dammay',
//                                 image: 'https://i.ibb.co/X4fPd9f/ANGEL-DAMMAY-Rochelle-Ofracio.jpg',
//                                 contact: 'annelie.bacay@biositeph.com',
//                                 contactNumber: '+63-917-110-2979',
//                                 facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/'
//                             },
                
//                             {
//                                 id: 'msr10',
//                                 title: 'Medical Sales Representative',
//                                 name: 'ALLAN CORDERO',
//                                 image: 'https://i.ibb.co/M689FLV/ELIE.jpg',
//                                 contact: 'annelie.bacay@biositeph.com',
//                                 contactNumber: '+63-917-110-2979',
//                                 facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/'
//                             },
//                             {
//                                 id: 'msr11',
//                                 title: 'Medical Sales Representative',
//                                 name: '<span style="color:red;">VACANT</span>',
//                                 // image: 'https://i.ibb.co/M689FLV/ELIE.jpg',
//                                 // contact: 'annelie.bacay@biositeph.com',
//                                 // contactNumber: '+63-917-110-2979',
//                                 // facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/'
//                             },
//                             {
//                                 id: 'msr12',
//                                 title: 'Medical Sales Representative',
//                                 name: '<span style="color:red;">VACANT</span>',
//                                 // image: 'https://i.ibb.co/M689FLV/ELIE.jpg',
//                                 // contact: 'annelie.bacay@biositeph.com',
//                                 // contactNumber: '+63-917-110-2979',
//                                 // facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/'
//                             },
            

//                                     {
//                                         id: 'msr13',
//                                         title: 'Medical Sales Representative',
//                                         name: 'Jerralyn Gonzales',
//                                         image: 'https://i.ibb.co/jymYpnz/jerralyn.jpg',
//                                         contact: 'annelie.bacay@biositeph.com',
//                                         contactNumber: '+63-917-110-2979',
//                                         facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/'
//                                     },
                        
//                                     {
//                                         id: 'msr14',
//                                         title: 'Medical Sales Representative',
//                                         name: 'MARRI TONI CIELO',
//                                         image: 'https://i.ibb.co/tMHksc9/toni.jpg',
//                                         contact: 'annelie.bacay@biositeph.com',
//                                         contactNumber: '+63-917-110-2979',
//                                         facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/'
//                                     },
//                                     {
//                                         id: 'msr15',
//                                         title: 'Medical Sales Representative',
//                                         name: '<span style="color:red;">VACANT</span>',
//                                         // image: 'https://i.ibb.co/M689FLV/ELIE.jpg',
//                                         // contact: 'annelie.bacay@biositeph.com',
//                                         // contactNumber: '+63-917-110-2979',
//                                         // facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/'
//                                     },
        
//                                     {
//                                         id: 'msr16',
//                                         title: 'Medical Sales Representative',
//                                         name: '<span style="color:red;">VACANT</span>',
//                                         // image: 'https://i.ibb.co/M689FLV/ELIE.jpg',
//                                         // contact: 'annelie.bacay@biositeph.com',
//                                         // contactNumber: '+63-917-110-2979',
//                                         // facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/'
//                                     },
        
//       ],
//         colorByPoint: false,
//         color: '#007ad0',
//         dataLabels: {
//             color: 'white',
//             style: {
//                 fontSize: '16px'
//             }
//             // <<<<<text layout font>>>>>>>>></text>
//         },
//         borderColor: 'white',
//         nodeWidth: 'auto'
//     }],


//     dataLabels: {
//         style: {
//             fontSize: '20px',
//             fontWeight: 'normal',
//             // overflow: 'hidden',
//             textOverflow: 'ellipsis',
//             whiteSpace: 'nowrap'
//         },
//         useHTML: true, // Allows for more control over text formatting
//         allowOverlap: false // Prevents labels from overlapping
//     },
    
//     tooltip: {
//         outside: true
//     },
//     exporting: {
//         allowHTML: true,
//         sourceWidth: 1000,
//         sourceHeight: 500
        
//     },
//     credits: {
//         enabled: false // Disable Highcharts credits
//     },
    
//     plotOptions: {
//         series: {
//             events: {
//                 click: function (event) {
//                     const point = event.point;
                
//                     if (!point.image) {
//                         console.warn("No image available. Modal won't open.");
//                         return;
//                     }
                
//                     const modal = document.getElementById("myModal");
//                     const span = document.querySelector(".close");
//                     const image = document.getElementById("modal-image");
                
//                     // Update modal content
//                     document.getElementById("modal-title").innerText = point.name;
//                     image.src = point.image;
//                     image.style.display = 'block';
//                     document.getElementById("modal-title-text").innerText = `Position: ${point.title || 'N/A'}`;
//                     document.getElementById("modal-contact").innerText = `Email: ${point.contact || 'N/A'}`;
//                     document.getElementById("modal-contact-number").innerText = `Phone: ${point.contactNumber || 'N/A'}`;
                                    
//                     // Color the text "VACANT" red
//                     if (point.name === "VACANT") {
//                         document.getElementById("modal-title").style.color = 'red';
//                     } else {
//                         document.getElementById("modal-title").style.color = 'black'; // Default color
//                     }

//                     // DMS Area Info
//                     document.getElementById("modal-additional-info").innerText = `DSM: ${point.additionalInfo || 'No additional information available.'}`;
//                     // Display Area Code
//                     document.getElementById("modal-area-code").innerText = `Area Code: ${point.areaCode || 'N/A'}`;
                
//                     const facebookLink = document.getElementById("modal-facebook-link");
//                     if (point.facebookLink) {
//                         facebookLink.href = point.facebookLink;
//                         facebookLink.style.display = 'block';
//                     } else {
//                         facebookLink.style.display = 'none';
//                     }
                
//                     modal.style.display = "block";
//                     span.onclick = function () {
//                         modal.style.display = "none";
//                     };
                
//                     window.onclick = function (event) {
//                         if (event.target == modal) {
//                             modal.style.display = "none";
//                         }
//                     };
//                 }
//             }
//         }
//     }
// });

//     document.getElementById("modal-area-code").innerText = `Area Code: ${point.areaCode || 'N/A'}`;





















