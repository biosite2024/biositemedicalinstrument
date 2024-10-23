Highcharts.chart('container', {
    chart: {
        height: 600,
        inverted: true,
        events: {
            load: function() {
                const chart = this;
                
                // Function to expand the sales department nodes
                function expandSalesForce() {
                    chart.series[0].addPoint({ from: 'SALES DEPARTMENT', to: 'REGIONAL SALES MANAGER (LUZON)' });
                    chart.series[0].addPoint({ from: 'SALES DEPARTMENT', to: 'REGIONAL SALES MANAGER (VISAYAS)' });
                    chart.series[0].addPoint({ from: 'SALES DEPARTMENT', to: 'REGIONAL SALES MANAGER (MINDANAO)' });
                    chart.redraw();
                }

                // Add click event listener to SALES FORCE node
                const salesForceNode = chart.series[0].points.find(point => point.id === 'SF');
                salesForceNode.update({
                    events: {
                        click: function() {
                            expandSalesForce();
                        }
                    }
                });
            }
        }
    },
    title: {
        text: 'BMI - Organizational Structure'
    },
    series: [{
        type: 'organization',
        name: 'Biosite Medical Instruments',
        keys: ['from', 'to', 'className'],
        data: [
            ['PRESIDENT', 'VICE-PRESIDENT'],
            ['VICE-PRESIDENT', 'CHIEF OF OPERATING OFFICER'],
            ['CHIEF OF OPERATING OFFICER', 'SALES DEPARTMENT'],
            ['CHIEF OF OPERATING OFFICER', 'MARKETING DEPARTMENT'],
            ['CHIEF OF OPERATING OFFICER', 'TECHNICAL SALES DEPARTMENT'],
            ['CHIEF OF OPERATING OFFICER', 'OPERATIONS DEPARTMENT DEPARTMENT'],
            ['CHIEF OF OPERATING OFFICER', 'FINANCE & ACCOUNTING DEPARTMENT'],
            ['CHIEF OF OPERATING OFFICER', 'REGULATORY DEPARTMENT'],
            ['CHIEF OF OPERATING OFFICER', 'HR & ADMIN DEPARTMENT'],
            ['SALES DEPARTMENT', 'SF'],
            ['SF', 'LUZON'],
            ['SF', 'VISAYAS'],
            ['SF', 'MINDANAO'],
            ['SALES DEPARTMENT', 'BQ'],
            ['MARKETING DEPARTMENT', 'PM'],
            ['MARKETING DEPARTMENT', 'C'],
            ['MARKETING DEPARTMENT', 'CEE'],
            ['TECHNICAL SALES DEPARTMENT', 'TS'],
            ['TECHNICAL SALES DEPARTMENT', 'ME'],
            ['OPERATIONS DEPARTMENT DEPARTMENT', 'SC'],
            ['OPERATIONS DEPARTMENT DEPARTMENT', 'P'],
            ['FINANCE & ACCOUNTING DEPARTMENT', 'A'],
            ['FINANCE & ACCOUNTING DEPARTMENT', 'CC'],
            ['HR & ADMIN DEPARTMENT', 'HR'],
            ['A', 'GA'],
            ['A', 'T'],
            ['A', 'COM']
        ],
        levels: [
            { level: 0, color: 'silver', dataLabels: { color: 'black' }, height: 30 },
            { level: 1, color: 'silver', dataLabels: { color: 'black' }, height: 30 },
            { level: 2, color: '#980104' },
            { level: 3, color: '#359154' },
            { level: 4, color: '#007ad0' }
        ],
        nodes: [
            { id: 'PRESIDENT', color: 'silver' },
            { id: 'VICE-PRESIDENT', color: 'silver' },
            { id: 'CHIEF OF OPERATING OFFICER', color: '#980104' },
            { id: 'SALES DEPARTMENT' },
            { id: 'SF', name: 'SALES FORCE' },
            { id: 'BQ', name: 'BIDDING & QUOTATIONS' },
            { id: 'PM', name: 'PRODUCT MANAGEMENT' },
            { id: 'C', name: 'CREATIVES' },
            { id: 'CEE', name: 'CUSTOMER ENGAGEMENT & EVENTS' },
            { id: 'TS', name: 'TECHNICAL SERVICES' },
            { id: 'ME', name: 'MEDICAL EQUIPMENT' },
            { id: 'SC', name: 'SUPPLY CHAIN' },
            { id: 'P', name: 'PROCUREMENT' },
            { id: 'A', name: 'ACCOUNTING' },
            { id: 'CC', name: 'CREDIT & COLLECTION' },
            { id: 'HR', name: 'HR & ADMINISTRATIVE DEPARTMENT' },
            { id: 'GA', name: 'GENERAL ACCOUNTING' },
            { id: 'T', name: 'TREASURY' },
            { id: 'COM', name: 'COMPLIANCE' }
        ],
        
        colorByPoint: false,
        dataLabels: {
            color: 'white',
            style: {
                fontSize: '14px'
            }
        },
        borderColor: 'white',
        nodeWidth: 'auto'
    }],
    tooltip: { outside: true },
    exporting: {
        allowHTML: true,
        sourceWidth: 800,
        sourceHeight: 600
    },
    credits: { enabled: false },
    
    // Add click event to transfer to another HTML page
    plotOptions: {
        organization: {
            events: {
                click: function(event) {
                    var point = event.point;
                    
                    if (point.id === 'LUZON') {
                        window.location.href = 'orgsalesforce.html';  // Transfer to another page
                    } 
                    
                    // else if (point.id === 'BQ') {
                    //     window.location.href = 'marketing_department.html';  // Transfer to another page
                    // }
                     
                    // if (point.id === 'PM') {
                    //     window.location.href = 'salesforce.html';  // Transfer to another page
                    // } 
                    
                    // else if (point.id === 'BQ') {
                    //     window.location.href = 'marketing_department.html';  // Transfer to another page
                    // }
                    // Add more conditionals for other departments if needed
                }
            }
        }
    }
});
