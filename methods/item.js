///<reference path="../typings/typings.d.ts" />
'use strict';
/**
 * Items Methods
 * @type {meteor.methods}
 */
Meteor.methods({
    'addItem': function (item) {
        if (!Meteor.userId()) {
            throw 'Please login first';
        }
        if (typeof item !== 'object')
            throw 'Not a valid challenge';
        // add fields
        item.owner = Meteor.userId();
        item.createdAt = new Date();
        // todo: add other fields
        Items.insert(item);
    },
    'editItem': function (itemId, item) {
        // edit
    },
    'removeItem': function (itemId) {
        // remove
    }
});
//# sourceMappingURL=item.js.map