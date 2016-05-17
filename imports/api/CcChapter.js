// Used to gather definitions
import { Class } from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';

// cc stands for collaborative content
const CcChapters = new Mongo.Collection('cc.chapters');
const CcChapter = Class.create({
    name:'CcChapter',
    collection:CcChapters,
    fields:{
        title:{
            type:String,
            validators:[{
                type:'minLength',
                param:3
            },{
                type:'maxWords',
                param:50
            }]
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

export default CcChapter;