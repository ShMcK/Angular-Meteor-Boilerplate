///<reference path="../../typings/typings.d.ts" />
'use strict';

declare var Items:Mongo.Collection<IItem>;

/**
 *  Load Items
 *  @type {meteor.startup}
 */
Meteor.startup(function () {

  var fake_users = ['Bob', 'Jane', 'Joe'];

  function createTemplate() {
    return {
      title: Fake.sentence(5),
      body: Fake.paragraph(5),
      author: fake_users[Math.floor(Math.random() * fake_users.length)],
      createdAt: new Date()
    };

    // If no Items
    if (Items.find().count() === 0) {
      console.log('Adding default items...');
      // generate dummy 'items' data
      for (let i = 1; i < 51; i++) {
        Items.insert(createTemplate())
      }
    } else {
      console.log('Loading items...');
    }
  }

});