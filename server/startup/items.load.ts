///<reference path="../../typings/typings.d.ts" />
'use strict';

declare var Items:Mongo.Collection<IItem>;

/**
 *  Load Items
 *  @type {meteor.startup}
 */
Meteor.startup(function () {

  // If no Items
  if (Items.find().count() === 0) {
    console.log('Adding default items...');

    // Add dummy data
    let items:IItem[] = [{
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
    // end dummy data
    items.forEach((item:IItem) => {
      Items.insert(item);
    });
  } else {
    console.log('Loading items...');
  }
});