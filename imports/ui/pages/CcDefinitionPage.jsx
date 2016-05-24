import React, { Component } from 'react';
import CcDefinitionView from './../CcDefinitionView.jsx';
import CcDefinition from '../../api/CcDefinition';
import { createContainer } from 'meteor/react-meteor-data';
import Main from '../Main.jsx';

const CcDefinitionWrapper=createContainer((props) => {
    return {
        ccDefinition:CcDefinition.findOne(props.params.defId),
        forceExpand:true
    }
}, CcDefinitionView);
export default class CcDefinitionPage extends Component {
    render(){
        return (
            <Main>
                <CcDefinitionWrapper/>
            </Main>
        );
    }
};