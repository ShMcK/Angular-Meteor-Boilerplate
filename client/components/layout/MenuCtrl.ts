///<reference path="../../../typings/typings.d.ts" />
'use strict';

interface IMenuItem {
  name: string;
  link: string;
  icon?: string;
  image?: string;
}

class MenuCtrl {
  items:IMenuItem[];

  constructor() {
    this.items = [{
      name: 'MAIN.TITLE',
      link: 'main'
    }, {
      name: 'SECONDARY.TITLE',
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