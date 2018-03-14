function getApiUrl() {
    var date = getDateBeforeByDays(10);
    return 'https://app.whatconverts.com/api/v1/leads?leads_per_page=250&start_date=' + date;
}

function getLeadsData() {
    return new Promise(function(resolve, reject) {
        var token = 'NTE0NzMtZTJjOGZjYmFjYTNiYTQ4MzphNTNjY2NiMTUxNjgzZjIwZTk5NWM1ZjJhZTc0OWMyZA==';
        $.ajax({
            url: getApiUrl(),
            dataType: 'json',
            type: 'get',
            beforeSend: function(request) {
                request.setRequestHeader("Authorization", 'Basic ' + token);
            },
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject(error);
            }
        })
  });
}