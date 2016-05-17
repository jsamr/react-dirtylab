import { Class } from 'meteor/jagi:astronomy';
import CollaborativeContentPaper from './CollaborativeContentPaper';
import { Mongo } from 'meteor/mongo';

// cc stands for collaborative content
const CcReferences = new Mongo.Collection('cc.references');
const CcReference = CollaborativeContentPaper.inherit({
    name:'CcReference',
    collection:CcReferences,
    fields:{
        authors:{
            type:[String]
        },
        source:{
            type:String,
            validators:[{
                type:'url'
            }]
        }
    }
});
export default CcReference;