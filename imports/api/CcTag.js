
import { Class } from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';

// A tag applies to any CollaborativeContentPaper
const CcTags = Mongo.Collection('cc.tags');
const CcTag = Class.create({
    name:'CcTag',
    collection:CcTags,
    fields:{
        label:{
            type:String,
            validators:[
                {
                    type:'minLength',
                    param:2
                },
                {
                    type:'maxLength',
                    param:40
                }]

        },
        related:{
            type:['CcTag'],
            default:[]
        }
    }
});

export default CcTag;