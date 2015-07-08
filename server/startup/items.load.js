///<reference path="../../typings/typings.d.ts" />
'use strict';
/**
 *  Load Items
 *  @type {meteor.startup}
 */
Meteor.startup(function () {
    var fake_users = ['Bob', 'Jane', 'Joe', 'Jill', 'Hendrix'];
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function createTemplate() {
        return {
            title: Fake.sentence(randomInt(3, 5)),
            body: Fake.paragraph(randomInt(3, 6)),
            author: fake_users[randomInt(0, 4)],
            images: [{
                    url: 'http://lorempixel.com/400/200',
                    title: Fake.sentence(randomInt(1, 5))
                }, {
                    url: 'http://lorempixel.com/300/300',
                    title: Fake.sentence(randomInt(1, 5))
                }],
            createdAt: new Date()
        };
    }
    // If no Items
    if (Items.find().count() === 0) {
        console.log('Adding default items...');
        // generate dummy 'items' data
        for (var i = 1; i < 51; i++) {
            Items.insert(createTemplate());
        }
    }
    else {
        console.log('Loading items...');
    }
});
//# sourceMappingURL=items.load.js.map