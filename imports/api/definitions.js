import { Mongo } from 'meteor/mongo';
const comments = new Mongo.Collection('definitions');
export default comments;