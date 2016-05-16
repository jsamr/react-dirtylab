import { Class } from 'meteor/jagi:astronomy';
import CollaborativeContentPaper from './CollaborativeContentPaper';
import { Mongo } from 'meteor/mongo';

// cc stands for collaborative content
const CcVisions = new Mongo.Collection('cc.visions');
const CcVision  = CollaborativeContentPaper.extend({
    name:'CcVision',
    collection:CcVisions
});
export default CcVision;