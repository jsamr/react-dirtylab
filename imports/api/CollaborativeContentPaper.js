import { Class } from 'meteor/jagi:astronomy';
const CollaborativeContentPaper = Class.create({
    name:'CollaborativeContentPaper',
    fields:{
        abstract_md:{
            type:String,
            validators:[{
                type:'maxWords',
                param:400
            },{
                type:'minWords',
                param:0
            }]

        },
        article_md:{
            type:String

        },
        title:{
            type:String,
            validators:[{
                type:'minLength',
                param:10
            },{
                type:'maxWords',
                param:50
            }]
        }
    }
});

export default CollaborativeContentPaper;