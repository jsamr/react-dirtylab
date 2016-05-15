import { Mongo } from 'meteor/mongo';
// cc stands for collaborative content
const ccVisions = new Mongo.Collection('cc.visions');
export default ccVisions;