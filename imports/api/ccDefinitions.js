import { Mongo } from 'meteor/mongo';
// cc stands for collaborative content
const ccDefinitions = new Mongo.Collection('cc.definitions');
export default ccDefinitions;