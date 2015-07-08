///<reference path="../typings/typings.d.ts" />

declare var SimpleSchema:any;

Items = new Mongo.Collection<IItem>('items');

var Schemas:any = {};

Schemas.Item = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    optional: true
  },
  title: {
    type: String,
    optional: false,
    //editableBy: ['member', 'admin']
  },
  body: {
    type: String,
    optional: true,
    //editableBy: ['member', 'admin']
  },
  viewCount: {
    type: Number,
    optional: true
  },
  clickCount: {
    type: Number,
    optional: true
  },
  upVotes: {
    type: Number,
    optional: true
  },
  upVoters: {
    type: [String],
    optional: true
  },
  downVotes: {
    type: Number,
    optional: true
  },
  downVoters: {
    type: [String],
    optional: true
  },
  owner: {
    type: String,
    optional: true
  },
  author: {
    type: String,
    optional: true
  },
  images: {
    type: [Object],
    optional: true
  },
  'images.$.url': {
    type: String,
    optional: true
  },
  'images.$.title': {
    type: String,
    optional: true
  }
});

//Schema.Item.internationalize();

Items.attachSchema(Schemas.Item);

/**
 * Security Restriction
 * todo: refactor
 * @type {Mongo.Collection.allow}
 */
Items.allow({
  insert: function (userId:string, item:IItem) {
    return userId && item.owner === userId;
  },
  /* fields: array of keys, ex: ['title', 'body'] */
  /* modifier: raw Mongo modifier, ex: {$set: {'title': "Item 1"}, $inc: {upvotes: 1}}.*/
  update: function (userId:string, item:IItem, fields:string[], modifier) {
    return userId && item.owner === userId;
  },
  remove: function (userId:string, item:IItem) {
    return userId && item.owner === userId;
  }
});
