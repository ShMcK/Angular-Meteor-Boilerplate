///<reference path="../../typings/typings.d.ts" />
'use strict';

/**
 *  OAuth Service Configs
 *  @type {meteor.startup}
 */
Meteor.startup(function () {
  //process.env.MAIL_URL = "Insert your own MAIL_URL from your email provider here.";
  //var createServiceConfiguration = function (service:string, clientId:string, secret:string) {
  //  // reset config on startup
  //  ServiceConfiguration.configurations.remove({
  //    service: service
  //  });
  //  var config = {
  //    generic: {
  //      service: service,
  //      clientId: clientId,
  //      secret: secret
  //    },
  //    facebook: {
  //      service: service,
  //      appId: clientId,
  //      secret: secret
  //    },
  //    google: {
  //      service: service,
  //      appId: clientId,
  //      secret: secret
  //    },
  //    github: {
  //      service: service,
  //      appId: clientId,
  //      secret: secret
  //    },
  //    twitter: {
  //      service: service,
  //      consumerKey: clientId,
  //      secret: secret
  //    },
  //    kickbox: {
  //      service: service,
  //      consumerKey: clientId
  //    }
  //  };
  //  serviceConfig(service);
  //  function serviceConfig(service:string) {
  //    var services:string[] = ['facebook', 'google', 'twitter', 'github', 'kickbox'];
  //    if (_.contains(services, service)) {
  //      return ServiceConfiguration.configurations.insert(config[service]);
  //    } else {
  //      return ServiceConfiguration.configurations.insert(config.generic);
  //    }
  //  }
  //};
  //
  //
  ///**
  // * Configs: Add Key, Secret & set to true to activate
  // * {service, key, secret, activated}
  // */
  //createServiceConfiguration('facebook', 'Insert your appId here.', 'Insert your secret here.');
  //createServiceConfiguration('github', 'Insert your clientId here.', 'Insert your secret here.');
  //createServiceConfiguration('google', 'Insert your clientId here.', 'Insert your secret here.');
  //createServiceConfiguration('twitter', 'Insert your consumerKey here.', 'Insert your secret here.');
  //
  ////if (Settings.verifyEmail) {
  ////  createServiceConfiguration('kickbox', 'Insert API key', null);
  ////}
});