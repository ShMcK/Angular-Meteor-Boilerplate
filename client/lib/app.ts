///<reference path="../../typings/typings.d.ts" />

angular.module('app', [
  'angular-meteor',
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


