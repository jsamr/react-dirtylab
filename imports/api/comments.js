import { Mongo } from 'meteor/mongo';
const comments = new Mongo.Collection('comments');
export default comments;
