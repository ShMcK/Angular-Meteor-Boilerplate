///<reference path="../../../typings/typings.d.ts" />
'use strict';

interface IMenuItem {
  name: string;
  link: string;
  icon?: string;
}

class MenuCtrl {
  items:IMenuItem[];

  constructor() {
    this.items = [{
      name: 'NAV.MAIN',
      link: 'main'
    }, {
      name: 'NAV.SECONDARY',
      link: 'secondary'
    }]
  }
}

/**
 * Menu Items
 * @type {angular.module}
 */
angular.module('shmck.layout')
  .controller('MenuCtrl', MenuCtrl);