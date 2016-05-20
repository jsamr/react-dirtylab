import { Mongo } from 'meteor/mongo';
const counters = new Mongo.Collection('counters');
export default counters;
