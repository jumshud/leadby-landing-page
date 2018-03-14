function loadChart(chartSeries, lpUrls) {
    var dataSeries = [];
    
    console.log(lpUrls);
    console.log(chartSeries);
    Highcharts.chart('charts', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Landing pages chart'
        },
        xAxis: {
            categories: lpUrls
        },
        colors: ['#FFA200', '#006192', '#45B446', '#6F3C9B', '#E63943'],
        legend: {
            layout: 'vertical',
            backgroundColor: '#FFFFFF',
            align: 'right',
            verticalAlign: 'middle',
            floating: true,
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Leads'
            }
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: chartSeries
    });
}

function loadTable(landingPageData) {
    var tableHtml = `<table class="table table-striped table-hover table-bordered">
        <thead>
            <th>Landing Url</th>
            <th class="yellow">Transactions</th>
            <th class="dark-blue">Calls</th>
            <th class="green">Forms</th>
            <th class="purple">Chats</th>
            <th class="red">Events</th>
            <th class="dark-gray">Total Leads</th>
        </thead>
        <tbody>`;
        
    var footerData = {transactions:0, calls:0, forms:0, chats:0, events:0, total: 0};
    landingPageData.forEach(function(el) {
        var total = el.getTotalLeads();
        
        footerData.transactions += el.transactions;
        footerData.calls += el.calls;
        footerData.forms += el.forms;
        footerData.chats += el.chats;
        footerData.events += el.events;
        footerData.total += total;
        
        tableHtml += `
            <tr>
                <td class="landing-url">
                    <span class="url">${el.url}</span> - 
                    <a class="btn btn-link" target="_blank" href="${el.url}">view page</a></td>
                <td>${el.transactions > 0 ? el.transactions : '-'}</td>
                <td>${el.calls > 0 ? el.calls : '-'}</td>
                <td>${el.forms > 0 ? el.forms : '-'}</td>
                <td>${el.chats > 0 ? el.chats : '-'}</td>
                <td>${el.events > 0 ? el.events : '-'}</td>
                <td>${total}</td>
            </tr>`;
    }); 
    
    footerData.label = 'Total';
    
    tableHtml += `</tbody>
        <tfoot>
            <tr>
                <th>${footerData.label}</th>
                <th>${footerData.transactions}</th>
                <th>${footerData.calls}</th>
                <th>${footerData.forms}</th>
                <th>${footerData.chats}</th>
                <th>${footerData.events}</th>
                <th>${footerData.total}</th>
            </tr>
        </tfoot>`;
    
    $('#tables').html(tableHtml);
}