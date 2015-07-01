///<reference path="../../../typings/typings.d.ts" />
'use strict';
var MenuCtrl = (function () {
    function MenuCtrl() {
        this.items = [{
                name: 'NAV.MAIN',
                link: 'main'
            }, {
                name: 'NAV.SECONDARY',
                link: 'secondary'
            }];
    }
    return MenuCtrl;
})();
angular.module('app').controller('MenuCtrl', MenuCtrl);
//# sourceMappingURL=MenuCtrl.js.map