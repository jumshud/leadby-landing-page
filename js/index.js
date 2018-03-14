$(function(){
    getLeadsData()
    .then(function(data) {
        var landingPageData = getLandingPages(data.leads);
        var chartSeries = geChartSeries(landingPageData);
        var lpUrls = getPageUrls(landingPageData);
        
        loadChart(chartSeries, lpUrls);
        loadTable(landingPageData);
    })
    .catch(function(error) {
        throw new Error(error);
    });
});