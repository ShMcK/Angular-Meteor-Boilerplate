///<reference path="../../typings/typings.d.ts" />

angular.module("app")
  .config(themeIcons);

function themeIcons($mdIconProvider) {
  var iconSets = [
    'action', 'communication', 'content',
    'toggle', 'navigation', 'image',
    'device', 'editor', 'file',
    'hardware', 'av', 'maps',
    'alert', 'social'];

  angular.forEach(iconSets, function (iconSet) {
    $mdIconProvider.iconSet(iconSet, `/icons/${iconSet}-icons.svg`, 24);
  });

}

