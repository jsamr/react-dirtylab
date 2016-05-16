import { Class } from 'meteor/jagi:astronomy';
import CollaborativeContentPaper from './CollaborativeContentPaper';
import { Mongo } from 'meteor/mongo';
import CcSection from './CcSection';
// cc stands for collaborative content
const CcTracks = new Mongo.Collection('cc.tracks');
const CcTrack = CollaborativeContentPaper.extend({
    name:'CcTrack',
    collection:CcTracks,
    fields:{
        section:{
            type:CcSection,
            optional:true
        }
    }
});

export default CcTrack;