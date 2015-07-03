///<reference path="../typings/typings.d.ts" />
'use strict';

Meteor.startup(function ():void {
  /**
   * Account Methods
   * @type {meteor.methods}
   */
  Meteor.methods({
    validateEmailAddress: function (address:string):boolean {
      check(address, String);
      return new Promise(function (resolve, reject) {
        HTTP.call("GET", "https://api.kickbox.io/v1/verify", {
          params: {
            email: address,
            apikey: config.kickboxKey
          }
        }, function (error, response) {
          if (error) {
            reject(error);
          } else {
            if (response.data.result === "invalid" || response.data.result === "unknown") {
              reject({
                error: "Sorry, your email was returned as invalid. Please try another address."
              });
            } else {
              resolve(response);
            }
          }
        });
      });
    }
  });
});