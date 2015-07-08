///<reference path="../../typings/typings.d.ts" />
'use strict';
declare var Settings:ISettings;

/**
 * WARNING:
 * Incomplete, not working
 *
 */

var Settings = {
  site: {
    title: 'YOUR_SITE_TITLE', // *
    url: 'http://localhost:3000' // *
  },
  verifyEmail: false, // using Kickbox.io
  welcomeEmail: {
    send: false,
    from: 'YOUR NAME - NOTES <YOUR_ADDRESS@YOUR_EMAIL.com>', // *
    subject: 'Welcome!' //* & edit private/email/welcome-email
  }
};