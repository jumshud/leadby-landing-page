function getLandingPages(leadData) {
    var result = [];
    
    leadData.forEach(function(el) {
        var index = -1;
        var resultRow = result.filter(function (value, idx) {
            
            if (value.url == getLeadUrl(el)) {
                index = idx;
            }
            return value.url == getLeadUrl(el);
        });

        var item = addToRow(el, resultRow[0], index);
        
        if (index >= 0) {
            result[index] = item;
        } else {
            result.push(item);
        }
    });

    return result;
}

function geChartSeries(landingPageData) {
    var result = [];
    
    getTrackingDataKeys().forEach(function(key){
        var resLine = {
            name: getTrackingNameByKey(key),
            data: []
        };
        landingPageData.forEach(function(pl) {
            resLine.data.push(pl[key])
        });
        
        result.push(resLine);
    })
    

    return result;
}

function getTrackingNameByKey(key) {
    return getTrackingData()[key];
}

function getTrackingData() {
    return {
        transactions: 'Transactions',
        calls: 'Calls',
        forms: 'Forms',
        chats: 'Chats',
        events: 'Events'
    };
}

function getTrackingDataKeys() {
    return Object.keys(getTrackingData());
}

function getPageUrls(landingPages) {
    return landingPages.map(function(el) {
        return el.url;
    })
}

function getLeadUrl(lead) {
   return  lead.hasOwnProperty('landing_url') ? lead.landing_url : 'not set'
}

function addToRow(lead, landingPage, index) {
    var leadObj = new Lead(lead.lead_id, lead.lead_type, lead.landing_url);
    var llCount = leadObj.getCountsByType(); // LandingPage object
    
    if (index >= 0) {
        landingPage.transactions += llCount.transactions;
        landingPage.calls += llCount.calls;
        landingPage.forms += llCount.forms;
        landingPage.chats += llCount.chats;
        landingPage.events += llCount.events;
        
        return landingPage;
    } else {
        llCount.url = getLeadUrl(lead);
        return llCount;
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