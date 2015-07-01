///<reference path="../../../typings/typings.d.ts" />
'use strict';
var MenuCtrl = (function () {
    function MenuCtrl() {
        this.items = [{
                name: 'MAIN.TITLE',
                link: 'main'
            }, {
                name: 'SECONDARY.TITLE',
                link: 'secondary'
            }];
    }
    return MenuCtrl;
})();
/**
 * Menu Items
 * @type {angular.module}
 */
angular.module('shmck.layout')
    .controller('MenuCtrl', MenuCtrl);
//# sourceMappingURL=MenuCtrl.js.map