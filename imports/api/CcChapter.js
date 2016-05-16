// Used to gather definitions
import { Class } from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';

// cc stands for collaborative content
const CcChapters = new Mongo.Collection('cc.chapters');
const CcChapter = Class.create({
    name:'CcChapter',
    collection:CcChapters,
    fields:{
        name:{
            type:String,
            validators:[{
                type:'minLength',
                param:5
            },{
                type:'maxWords',
                param:50
            }]
        }
    }
});

export default CcChapter;