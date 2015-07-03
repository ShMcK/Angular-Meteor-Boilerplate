///<reference path="../../typings/typings.d.ts" />
'use strict';
/**
 * Send user email
 */
//Accounts.onCreateUser(function (options:Meteor.LoginWithExternalServiceOptions, user:Meteor.User) {
//  var userData:IUserData = {
//    email: this.verificationEmail(user),
//    name: options.profile ? options.profile.name : ""
//  };
//  if (userData.email !== null && Settings.welcomeEmail) {
//    Meteor.call('sendWelcomeEmail', userData, function (error) {
//      if (error) {
//        return console.log(error);
//      }
//    });
//  }
//  if (options.profile) {
//    user.profile = options.profile;
//  }
//  return user;
//});
/**
 * Account Methods
 * @type {Meteor.methods}
 */
Meteor.methods({
    verificationEmail: function (user) {
        if (user.emails) {
            return user.emails[0].address;
        }
        else if (user.services) {
            var services = user.services;
            return (function () {
                switch (false) {
                    case !services.facebook:
                        return services.facebook.email;
                    case !services.github:
                        return services.github.email;
                    case !services.google:
                        return services.google.email;
                    case !services.twitter:
                        return null;
                    default:
                        return null;
                }
            })();
        }
        else {
            return null;
        }
    },
    sendWelcomeEmail: function (user) {
        var emailTemplate;
        check(user, {
            emails: [String],
            username: String
        });
        SSR.compileTemplate('welcomeEmail', Assets.getText('email/welcome-email.html'));
        emailTemplate = SSR.render('welcomeEmail', {
            email: user.emails[0],
            username: user.username !== "" ? user.username : null,
            url: Settings.site.url,
            title: Settings.site.title
        });
        return Email.send({
            to: user.emails[0],
            from: Settings.welcomeEmail.from,
            subject: Settings.welcomeEmail.subject,
            html: emailTemplate
        });
    }
});
//# sourceMappingURL=account-creation.js.map