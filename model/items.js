///<reference path="../typings/typings.d.ts" />
Items = new Mongo.Collection('items');
var Schemas = {};
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
    },
    body: {
        type: String,
        optional: true,
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
    insert: function (userId, item) {
        return userId && item.owner === userId;
    },
    /* fields: array of keys, ex: ['title', 'body'] */
    /* modifier: raw Mongo modifier, ex: {$set: {'title': "Item 1"}, $inc: {upvotes: 1}}.*/
    update: function (userId, item, fields, modifier) {
        return userId && item.owner === userId;
    },
    remove: function (userId, item) {
        return userId && item.owner === userId;
    }
});
//# sourceMappingURL=items.js.map