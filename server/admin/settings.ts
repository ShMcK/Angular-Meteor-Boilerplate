///<reference path="../../typings/typings.d.ts" />
'use strict';
declare var Settings:ISettings;

interface ISettings {
  sendWelcomeEmail: boolean;
  verifyEmail: boolean;
}

Settings = {
  sendWelcomeEmail: false,
  verifyEmail: false
};
