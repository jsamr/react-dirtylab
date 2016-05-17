import { Class } from 'meteor/jagi:astronomy';
import CollaborativeContentPaper from './CollaborativeContentPaper';
import { Mongo } from 'meteor/mongo';
import CcSection from './CcSection';
// cc stands for collaborative content
const CcTracks = new Mongo.Collection('cc.tracks');
const CcTrack = CollaborativeContentPaper.inherit({
    name:'CcTrack',
    collection:CcTracks,
    fields:{
        section:{
            type:CcSection,
            optional:true
        }
    },
    indexes:{
        title:{
            fields:{
                title:1
            },
            options:{
                unique:true
            }
        }
    }
});

export default CcTrack;