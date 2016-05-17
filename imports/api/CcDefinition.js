import { Class } from 'meteor/jagi:astronomy';
import CollaborativeContentPaper from './CollaborativeContentPaper';
import CcChapter from './CcChapter';
import { Mongo } from 'meteor/mongo';

// cc stands for collaborative content
const CcDefinitions = new Mongo.Collection('cc.definitions');

const CcDefinition=Class.create({
    name:'CcDefinition',
    collection:CcDefinitions,
    fields:{
        entry:{
            type:String,
            validators:[{
                type:'maxWords',
                param:10
            }]
        },
        succinct_md:{
            type:String,
            validators:[{
                type:'maxWords',
                param:100
            },{
                type:'minWords',
                param:3
            }]
        },
        detailed_md:{
            type:String,
            optional:true
        },
        chapter:{
            type:CcChapter,
            optional:true
        }
    },
    indexes:{
        entry:{
            fields:{
                entry:1
            },
            options:{
                unique:true
            }
        }
    }
});

export default CcDefinition;