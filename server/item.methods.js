///<reference path="../typings/typings.d.ts" />
'use strict';
Meteor.startup(function () {
    /**
     * Items Methods
     * @type {meteor.methods}
     */
    Meteor.methods({
        'addItem': function (item) {
            /* Security precautions */
            // Not logged in
            if (!Meteor.userId()) {
                throw 'Please login first';
            }
            // Invalid item
            if (typeof item !== 'object')
                throw 'Not a valid item';
            // check user permissions to addItem
            // for example, admin
            // todo
            /* Spam Prevention */
            // check that user waits between posts
            // todo
            // check that user doesn't post more than X times per day
            // todo
            /* add default props */
            // todo
            //var defaultProperties = {
            //  createdAt: new Date(),
            //  //author: Users.getDisplayNameById(userId), // todo: method
            //  upvotes: 0,
            //  downvotes: 0,
            //  clickCount: 0,
            //  viewCount: 0
            //};
            //
            //item = _.extend(defaultProperties, item);
            /* add fields */
            // set fields
            item.createdAt = new Date();
            item.userId = Meteor.userId();
            // todo: add other fields
            /* validate fields to schmea */
            // todo
            // insert
            Items.insert(item);
        },
        'editItem': function (itemId, item) {
            // check if user can edit post
            // todo: admin, member rights
            // ensure edit matches schema
            // todo
            // loop over edits and throw error if not allowed
            // todo
            // update post
            Items.update(itemId, item);
        },
        'removeItem': function (itemId) {
            // check if user can remove post
            // todo: admin, member rights
            // remove item
            Items.remove(itemId);
            // decrement itemCount
            // todo
        }
    });
});
//# sourceMappingURL=item.methods.js.map