///<reference path="../typings/typings.d.ts" />
'use strict';
/**
 * Publish Users
 * email | profile
 * @type {Meteor.publish}
 */
Meteor.publish('users', function () {
    return Meteor.users.find({}, {
        fields: {
            emails: 1,
            profile: 1
        }
    });
});
//# sourceMappingURL=users.pubish.js.map