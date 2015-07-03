///<reference path="../typings/typings.d.ts" />
'use strict';
Meteor.startup(function () {
    /**
     * Items Methods
     * @type {meteor.methods}
     */
    Meteor.methods({
        'addItem': function (item) {
            // Not logged in
            if (!Meteor.userId()) {
                throw 'Please login first';
            }
            // Invalid item
            if (typeof item !== 'object')
                throw 'Not a valid challenge';
            // safe!
            // set fields
            item.owner = Meteor.userId();
            item.createdAt = new Date();
            // todo: add other fields
            // insert
            Items.insert(item);
        },
        'editItem': function (itemId, item) {
            // edit
        },
        'removeItem': function (itemId) {
            // remove
        }
    });
});
//# sourceMappingURL=item.methods.js.map