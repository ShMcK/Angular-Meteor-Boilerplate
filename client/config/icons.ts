///<reference path="../../typings/typings.d.ts" />

/**
 * Angular Material Icon Setup
 * @type {angular.module}
 */
angular.module("app")
  .config(themeIcons);

function themeIcons($mdIconProvider:angular.material.MDIconProvider):void {
  var iconSets = [
    'action', 'communication', 'content',
    'toggle', 'navigation', 'image',
    'device', 'editor', 'file',
    'hardware', 'av', 'maps',
    'alert', 'social'];

  angular.forEach(iconSets, function (iconSet:string):void {
    $mdIconProvider.iconSet(iconSet, `/icons/${iconSet}-icons.svg`, 24);
  });

}

