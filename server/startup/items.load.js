///<reference path="../../typings/typings.d.ts" />
'use strict';
/**
 *  Load Items
 *  @type {meteor.startup}
 */
Meteor.startup(function () {
    // If no Items
    if (Items.find().count() === 0) {
        console.log('Adding items...');
        // Add Items
        var items = [{
                title: "Item 1",
                body: "The first item.",
                author: 'admin',
                createdAt: new Date()
            }, {
                title: "Item 2",
                body: "The second item.",
                author: 'admin',
                createdAt: new Date()
            }, {
                title: "Item 3",
                body: "The third item.",
                author: 'admin',
                createdAt: new Date()
            }];
        items.forEach(function (item) {
            Items.insert(item);
        });
    }
    else {
        console.log('Loading items...');
    }
});
//# sourceMappingURL=items.load.js.map