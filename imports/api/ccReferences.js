import { Mongo } from 'meteor/mongo';
// cc stands for collaborative content
const ccReferences = new Mongo.Collection('cc.references');
export default ccReferences;