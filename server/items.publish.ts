///<reference path="../typings/typings.d.ts" />
'use strict';
declare var Items:Mongo.Collection<IItem>;

/**
 * Publish Items
 * @type {meteor.publish}
 */
//Meteor.publish('items', function () {
//  console.log('publishing items...');
//  console.log(Items.find({name: 'Item 1'}))
//  return Items.find({
//    name: 'Item 1'
//  });
//});

Meteor.publish('items', function(options) {
  return Items.find({}, options);
});