import React, { Component } from 'react';
import CcDefinitionView from './../CcDefinitionView.jsx';
import CcDefinition from '../../api/CcDefinition';
import { createContainer } from 'meteor/react-meteor-data';

const CcDefinitionPage=createContainer((props) => {
    return {
        ccDefinition:CcDefinition.findOne(props.params.defId),
        forceExpand:true
    }
}, CcDefinitionView);
export default CcDefinitionPage;