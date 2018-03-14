'use strict';

/**
 * LandingPageLead class.
 *
 * @constructor
 * @param name
 * @param transactions
 * @param calls
 * @param forms
 * @param chats
 * @param events
 */
function LandingPage(name, transactions, calls, forms, chats, events) {
    this.name = name;
    this.transactions = transactions;
    this.calls = calls;
    this.forms = forms;
    this.chats = chats;
    this.events = events;
}

LandingPage.prototype.getTotalByLead = function() {
    return (this.transactions + this.calls + this.forms + this.chats + this.events)
};

