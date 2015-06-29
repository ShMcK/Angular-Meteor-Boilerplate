///<reference path="../typings/typings.d.ts" />
declare var Items;

Items = new Mongo.Collection('items');

//Meteor.publish('items', function (options, searchString = '') {
//
//  Counts.publish(this, 'numberOfChallenges', Challenges.find({
//    $or: [
//      {'title': {'$regex': '.*' + searchString || '' + '.*', '$options': 'i'}},
//      {'description1': {'$regex': '.*' + searchString || '' + '.*', '$options': 'i'}},
//      {'description2': {'$regex': '.*' + searchString || '' + '.*', '$options': 'i'}}
//    ]
//  }), {noReady: true});
//
//  return Challenges.find({
//    $or: [
//      {'title': {'$regex': '.*' + searchString || '' + '.*', '$options': 'i'}},
//      {'description1': {'$regex': '.*' + searchString || '' + '.*', '$options': 'i'}},
//      {'description2': {'$regex': '.*' + searchString || '' + '.*', '$options': 'i'}}
//    ]
//  }, options);
//});
