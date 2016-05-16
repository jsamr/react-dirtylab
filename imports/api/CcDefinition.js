import { Class } from 'meteor/jagi:astronomy';
import CollaborativeContentPaper from './CollaborativeContentPaper';
import CcSection from './CcSection';
import { Mongo } from 'meteor/mongo';

// cc stands for collaborative content
const CcDefinitions = new Mongo.Collection('cc.definitions');
const CcDefinition=CollaborativeContentPaper.extend({
    name:'CcDefinition',
    collection:CcDefinitions,
    fields:{
        chapter:{
            type:CcSection,
            optional:true
        }
    }
});
export default CcDefinition;