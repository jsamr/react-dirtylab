import { Mongo } from 'meteor/mongo';
// cc stands for collaborative content
const ccTracks = new Mongo.Collection('cc.tracks');
export default ccTracks;