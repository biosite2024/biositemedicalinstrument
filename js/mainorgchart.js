  
  
  Highcharts.chart('container', {
    chart: {
        height: 600, // Keep chart height
        inverted: true
    },

    title: {
        text: ''
    },
    series: [{
        type: 'organization',
        name: 'Biosite Medical Instruments',
        keys: ['from', 'to', 'className'],
        data: [
            ['PRESIDENT', 'VICE-PRESIDENT'],
            ['VICE-PRESIDENT', 'CHIEF OPERATING OFFICER'],
            ['CHIEF OPERATING OFFICER', 'SALES DEPARTMENT'],
            ['CHIEF OPERATING OFFICER', 'MARKETING DEPARTMENT'],
            ['CHIEF OPERATING OFFICER', 'TECHNICAL SALES DEPARTMENT'],
            ['CHIEF OPERATING OFFICER', 'OPERATIONS DEPARTMENT DEPARTMENT'],
            ['CHIEF OPERATING OFFICER', 'FINANCE & ACCOUNTING DEPARTMENT'],
            ['CHIEF OPERATING OFFICER', 'REGULATORY DEPARTMENT'],
            ['CHIEF OPERATING OFFICER', 'HR & ADMIN DEPARTMENT'],
            ['SALES DEPARTMENT', 'LUZON'],
            ['SALES DEPARTMENT', 'VISMIN'],
         
           
        ],
        levels: [
            { level: 0, color: 'silver', dataLabels: { color: 'black' }, height: 30 },
            { level: 1, color: 'silver', dataLabels: { color: 'black' }, height: 30 },
            { level: 2, color: '#980104' },
            { level: 3, color: '#359154' },
            { level: 4, color: '#007ad0' }
        ],

                nodes: [
                    {
                        id: 'LUZON',
                        name: '<i class="fas fa-eye"></i> LUZON ',  // Add the eye icon using HTML
                        title: ''
                    },
                    {
                        id: 'VISMIN',
                        name: '<i class="fas fa-eye"></i> VISMIN ',  // Add the eye icon using HTML
                        title: ''
                    }
                ],
            
    //     nodes: [ 
    //      // {
    //      // id: 'msr16',
    //      // title: 'Medical Sales Representative',
    //      // name: '<span style="color:red;">VACANT</span>',
    //      // image: 'https://i.ibb.co/M689FLV/ELIE.jpg',
    //      // contact: 'annelie.bacay@biositeph.com',
    //      // contactNumber: '+63-917-110-2979',
    //      // facebookLink: 'https://www.facebook.com/people/Elie-DM/pfbid03gJmVrkXRvmhk6jCsJarJEm3RYh77n5JmDNE4NHzhy6GD7NgAcCv3FmePUnMFxuql/'
    //      // },
                                    
        colorByPoint: false,
        color: '#007ad0',
        dataLabels: {
            color: 'white',
            style: {
                fontSize: '16px'
            }
            // <<<<<text layout font>>>>>>>>></text>
        },
        borderColor: 'white',
        nodeWidth: 'auto'
    }],


    dataLabels: {
        style: {
            fontSize: '20px',
            fontWeight: 'normal',
            // overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        useHTML: true, // Allows for more control over text formatting
        allowOverlap: false // Prevents labels from overlapping
    },
    
    tooltip: {
        outside: true
    },
    // exporting: {
    //     allowHTML: true,
    //     sourceWidth: 1000,
    //     sourceHeight: 500
        
    // },
    credits: {
        enabled: false // Disable Highcharts credits
    },
    
    plotOptions: {
        series: {
            events: {
                click: function (event) {
                    const point = event.point;


                    if (point.id === 'LUZON') {
                        window.location.href = 'orgsalesforce.html';  // Transfer to another page
                    } 
                    if (point.id === 'VISMIN') {
                        window.location.href = 'orgvismin.html';  // Transfer to another page
                    } 
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
                    document.getElementById("modal-area-code").innerText = `Area Code: ${point.areaCode || 'N/A'}`;

                    // Color the text "VACANT" red
                    if (point.name === "VACANT") {
                        document.getElementById("modal-title").style.color = 'red';
                    } else {
                        document.getElementById("modal-title").style.color = 'black'; // Default color
                    }

                    // DMS Area Info
                    document.getElementById("modal-additional-info").innerText = `DSM: ${point.additionalInfo || 'No additional information available.'}`;
                    // Display Area Code
                    document.getElementById("modal-area-code").innerText = `Area Code: ${point.areaCode || 'N/A'}`;
                
                    const facebookLink = document.getElementById("modal-facebook-link");
                    if (point.facebookLink) {
                        facebookLink.href = point.facebookLink;
                        facebookLink.style.display = 'block';
                    } else {
                        facebookLink.style.display = 'none';
                    }
                
                    modal.style.display = "block";
                    span.onclick = function () {
                        modal.style.display = "none";
                    };
                
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

 



















