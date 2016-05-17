import React, {Component} from 'react';
import CcDefinition from '../api/CcDefinition'
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class InnerDefinitionsPage extends Component {
    render(){
        return (<div>Ceci est une page de définitions!</div>)
    }
}

InnerDefinitionsPage.propTypes={
  definitions:React.PropTypes.arrayOf(React.PropTypes.instanceOf(CcDefinition))
};


const DefinitionsPage=createContainer(() => {
    Meteor.subscribe('cc.definitions');
    return {
        definitions:CcDefinition.find().fetch()
    }
}, InnerDefinitionsPage);

export default DefinitionsPage;