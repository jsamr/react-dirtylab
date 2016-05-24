import React, {Component} from 'react';
import CcDefinitionForm from './../forms/CcDefinitionForm.jsx';
import CcDefinition from '../../api/CcDefinition';
import history  from '../../conf/history' ;
import Main from '../Main.jsx';

export default class NewCcDefinitionPage extends Component {

    render(){
        return (
            <Main>
                <CcDefinitionForm
                    ccDefinition={new CcDefinition()}
                    onSave={()=>history.goBack()}
                    onCancel={()=>history.goBack()}
                />
            </Main>
        );
    }
}

