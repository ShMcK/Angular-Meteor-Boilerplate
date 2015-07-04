///<reference path="../../typings/typings.d.ts" />
'use strict';

declare var Items:Mongo.Collection<IItem>;

/**
 *  Load Items
 *  @type {meteor.startup}
 */
Meteor.startup(function () {

  function createTemplate(n) {
    return {
      title: `Item ${n}`,
      body: `This is item ${n}`,
      author: 'admin',
      createdAt: new Date()
    };
  }

  // If no Items
  if (Items.find().count() === 0) {
    console.log('Adding default items...');
    // generate dummy 'items' data
    for (let i = 1; i < 21; i++) {
      Items.insert(createTemplate(i))
    }
  } else {
    console.log('Loading items...');
  }
});