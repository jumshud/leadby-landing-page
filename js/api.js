function getApiUrl() {
    var date = getDateBeforeByDays(60);
    return 'js/whatconvert-lead.json';
    return 'https://app.whatconverts.com/api/v1/leads?leads_per_page=250&start_date=' + date;
}

function getLeadsData() {
    var token = 'NTE0NzMtZTJjOGZjYmFjYTNiYTQ4MzphNTNjY2NiMTUxNjgzZjIwZTk5NWM1ZjJhZTc0OWMyZA==';
    $.ajax({
        url: getApiUrl(),
        dataType: 'json',
        type: 'get',
        beforeSend: function(request) {
            request.setRequestHeader("Authorization", 'Basic ' + token);
            request.setRequestHeader("Access-Control-Allow-Origin", '*');
        },
        success: function (data) {
            getLandingPages(data.leads);
        },
        error: function (error) {
            console.log(error);
        }
    })
}