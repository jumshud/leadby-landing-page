function getLandingPages(leadData) {
    var result = [];
    
    leadData.forEach(function(el) {
        var index = undefined;
        var resultRow = result.filter(function (value, idx) {
            if (value.name === el.lead_source + '/' + el.lead_medium) {
                index = idx;
            }
            return value.name === el.lead_source + '/' + el.lead_medium
        });

        var item = addToRow(el, resultRow);
        if (resultRow) {
            result[index] = item;
        } else {
            result.push(item);
        }
    });

    console.log(result);
}

function addToRow(lead, landingPage) {
    var leadObj = new Lead(lead.lead_id, lead.lead_type, lead.landing_url);

    var landingLine = leadObj.getCountsByType(); // LandingPage object
    if (landingPage) {
        landingPage.transactions += leadObj.transaction;
        landingPage.calls += leadObj.call;
        landingPage.forms += leadObj.form;
        landingPage.chats += leadObj.chat;
        landingPage.events += leadObj.event;

        return landingLine;
    } else {
        landingLine.name = lead['lead_source'] + '/' + lead['lead_medium'];
        return landingLine;
    }
}

function getDateBeforeByDays(days) {
    var date = new Date();
    var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));

    var day =last.getDate();
    var month=last.getMonth()+1;
    var year=last.getFullYear();

    return formattedDate(year, month, day)
}

function formattedDate(year, month, day) {
    year = year.toString();
    month = month.toString();
    day = day.toString();
    return year + '-' + (month.length < 2 ? '0'.concat(month): month) + '-' + (day.length < 2 ? '0'.concat(day): day);
}