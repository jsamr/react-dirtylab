import MarkHover from './MarkHover.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import RichMarkdownBlock from '../utils/RichMarkdownBlock.jsx';
import CcDefinitionView from '../CcDefinitionView.jsx';
import CcDefinition from '../../api/CcDefinition';
import LazyLoader from '../utils/LazyLoader.jsx';


class DefinitionMarkHover extends Component {

    render(){
        const _id=this.props._id;
        const loader = ()=>{
            const ccDefinition=CcDefinition.findOne({_id});
            return {
                ccDefinition,
                forceExpand:true
            }
        };
        const innerElement =(<LazyLoader loader={loader} lazyChildCtor={CcDefinitionView} shallRender={true}/>);

        return (
            <MarkHover
                _id={this.props._id}
                ccType={this.props.ccType}
                innerElement={innerElement} >
                {this.props.children}
            </MarkHover>
        )
    }
}


export default DefinitionMarkHover;