///<reference path="../../typings/typings.d.ts" />

angular.module('app', [
  'angular-meteor',
  'ui.router',
  'ngMaterial'
]);

function onReady() {
  angular.bootstrap(document, ['app']);
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceReady', onReady);
} else {
  angular.element(document).ready(onReady);
}


