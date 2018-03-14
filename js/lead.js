'use strict';

var typeForm = 'Web Form';
var typeCall = 'Phone Call';
var typeChat = 'Text Message';
var typeTransaction = 'Transaction';
var typeEvent = 'Event';
/**
 * Lead class.
 *
 * @constructor
 * @param lead_id
 * @param lead_type
 * @param landing_url
 */
function Lead(lead_id, lead_type, landing_url) {
    this.lead_id = lead_id;
    this.lead_type = lead_type;
    this.landing_url = landing_url;
}

Lead.prototype.getCountsByType = function() {
    var data = {
        transaction: (this.lead_type === typeTransaction) ? 1: 0,
        call: (this.lead_type === typeCall) ? 1: 0,
        form: (this.lead_type === typeForm) ? 1: 0,
        chat: (this.lead_type === typeChat) ? 1: 0,
        event: (this.lead_type === typeEvent) ? 1: 0
    };

    return new LandingPage('', data.transaction, data.call, data.form, data.chat, data.event);
};

