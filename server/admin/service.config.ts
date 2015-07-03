///<reference path="../../typings/typings.d.ts" />
'use strict';
declare var Settings:ISettings;

/**
 *  OAuth Service Configs
 */
var createServiceConfiguration = function (service:string, clientId:string, secret:string, activated:boolean):void {
  // reset config on startup
  ServiceConfiguration.configurations.remove({
    service: service
  });
  var config = {
    generic: {
      service: service,
      clientId: clientId,
      secret: secret
    },
    facebook: {
      service: service,
      appId: clientId,
      secret: secret,
      activated: activated
    },
    google: {
      service: service,
      appId: clientId,
      secret: secret,
      activated: activated
    },
    github: {
      service: service,
      appId: clientId,
      secret: secret,
      activated: activated
    },
    twitter: {
      service: service,
      consumerKey: clientId,
      secret: secret,
      activated: activated
    },
    kickbox: {
      service: service,
      consumerKey: clientId,
      activated: activated
    }
  };
  serviceConfig(service);
  function serviceConfig(service:string) {
    var services:string[] = ['facebook', 'google', 'twitter', 'github', 'kickbox'];
    if (_.contains(services, service)) {
      return ServiceConfiguration.configurations.insert(config[service]);
    } else {
      return ServiceConfiguration.configurations.insert(config.generic);
    }
  }
};


/**
 * Configs: Add Key, Secret & set to true to activate
 * {service, key, secret, activated}
 */
createServiceConfiguration('facebook', 'Insert your appId here.', 'Insert your secret here.', false);
createServiceConfiguration('github', 'Insert your clientId here.', 'Insert your secret here.', false);
createServiceConfiguration('google', 'Insert your clientId here.', 'Insert your secret here.', false);
createServiceConfiguration('twitter', 'Insert your consumerKey here.', 'Insert your secret here.', false);

if (Settings.verifyEmail) {
  createServiceConfiguration('kickbox', 'Insert API key', null, false);
}