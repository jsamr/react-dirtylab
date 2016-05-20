import React, {Component} from 'react';
import CcDefinitionForm from './../forms/CcDefinitionForm.jsx';
import CcDefinition from '../../api/CcDefinition';
import history  from '../../conf/history' ;

export default class NewCcDefinitionPage extends Component {

    render(){
        return <CcDefinitionForm
            ccDefinition={new CcDefinition()}
            onSave={()=>history.goBack()}
            onCancel={()=>history.goBack()}
        />
    }
}

