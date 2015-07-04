///<reference path="../typings/typings.d.ts" />
'use strict';

/**
 * Publish
 * @type {meteor.publish}
 */
Meteor.publish('items', function (options:ICollectionOptions, searchString:string) {
  // empty search
  if (searchString == null) {
    searchString = '';
  }

  /**
   *  Collection selection criteria
   */
  let criteria = {
    'title': {'$regex': '.*' + searchString || '' + '.*', '$options': 'i'}
  };

  // Number of items (for pagination)
  Counts.publish(this, 'numberOfItems', Items.find(criteria), {noReady: true});
  // {noReady: true} tells publication to wait until main cursor is ready

  // Return selected collections
  return Items.find(criteria, options);
});