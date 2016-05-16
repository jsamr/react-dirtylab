// Used to gather tracks
import { Class } from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';

// cc stands for collaborative content
const CcSections = new Mongo.Collection('cc.sections');
const CcSection = Class.create({
    name:'CcSection',
    collection:CcSections,
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
    },
    indexes:{
        name:{
            fields:{
                name:1
            },
            options:{
                unique:true
            }
        }
    }
});

//if(Meteor.isServer){
//    let defaultSection=new CcSection();
//    console.info(defaultSection);
//    console.info(defaultSection.__proto__);
//    defaultSection.name="L'Autorité Des Experts";
//    try {
//        defaultSection.save();
//    } catch(e){
//        console.info(e);
//    }
//}

export default CcSection;