///<reference path="../typings/typings.d.ts" />
'use strict';
/**
 * Publish Current User
 * Defaults: 'username', 'email', 'profile'
 * Adding ?
 * @type {Meteor.publish}
 */
Meteor.publish("userData", function () {
    // user is logged in
    if (this.userId) {
        return Meteor.users.find({ _id: this.userId }, {
            fields: {
                'services.twitter': 1,
                'services.facebook': 1,
                'services.google': 1
            }
        });
    }
    else {
        this.ready();
    }
});
/**
 * Publish Users
 * email | profile
 * @type {Meteor.publish}
 */
Meteor.publish('users', function () {
    return Meteor.users.find({}, {
        fields: {
            username: 1,
            emails: 1,
            profile: 1
        }
    });
});
/* Example User Data

 {
 _id: "bbca5d6a-2156-41c4-89da-0329e8c99a4f",  // Meteor.userId()
 username: "cool_kid_13", // unique name
 emails: [
 // each email address can only belong to one user.
 { address: "cool@example.com", verified: true },
 { address: "another@different.com", verified: false }
 ],
 createdAt: Wed Aug 21 2013 15:16:52 GMT-0700 (PDT),
 profile: {
 // The profile is writable by the user by default.
 name: "Joe Schmoe"
 },
 services: {
 facebook: {
 id: "709050", // facebook id
 accessToken: "AAACCgdX7G2...AbV9AZDZD"
 },
 resume: {
 loginTokens: [
 { token: "97e8c205-c7e4-47c9-9bea-8e2ccc0694cd",
 when: 1349761684048 }
 ]
 }
 }
 }
 */ 
//# sourceMappingURL=users.pubish.js.map