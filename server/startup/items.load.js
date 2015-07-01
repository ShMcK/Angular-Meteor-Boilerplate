///<reference path="../../typings/typings.d.ts" />
'use strict';
Meteor.startup(function () {
    if (Items.find().count() === 0) {
        console.log('No Items');
        var items = [];
        items.forEach(function (item) {
            Items.insert(item);
        });
    }
});
//# sourceMappingURL=items.load.js.map