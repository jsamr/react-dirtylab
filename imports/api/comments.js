import { Mongo } from 'meteor/mongo';
const comments = new Mongo.Collection('comments');
if(Meteor.isClient) window.comments=comments;
export default comments;
