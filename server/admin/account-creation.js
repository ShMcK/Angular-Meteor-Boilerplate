///<reference path="../../typings/typings.d.ts" />
'use strict';
/**
 * Send user email
 */
Accounts.onCreateUser(function (options, user) {
    var userData;
    userData = {
        email: determineEmail(user),
        name: options.profile ? options.profile.name : ""
    };
    if (userData.email !== null && Settings.sendWelcomeEmail) {
        Meteor.call('sendWelcomeEmail', userData, function (error) {
            if (error) {
                return console.log(error);
            }
        });
    }
    if (options.profile) {
        user.profile = options.profile;
    }
    return user;
});
//# sourceMappingURL=account-creation.js.map