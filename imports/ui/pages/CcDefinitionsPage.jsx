import React, {Component} from 'react';
import CcDefinition from '../../api/CcDefinition'
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import CcDefinitionView from './../CcDefinitionView.jsx';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Readable from './../utils/Readable.jsx';
import NavLink from './../routing/NavLink.jsx';
import { routes } from '../routing/AppRouter.jsx';

class InnerDefinitionsPage extends Component {

    render(){
        const definitions=this.props.definitions.map((def)=><CcDefinitionView style={{margin:'10px 0px'}} id={def._id} key={def._id} ccDefinition={def}/>);
        return (
            <div>
                <Toolbar>
                    <ToolbarGroup firstChild={true}>
                        <ToolbarTitle text="Définitions" />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <NavLink route={routes.cc.definitions.new}>
                            <FloatingActionButton mini={true}
                                                  primary={true}
                            >
                                <ContentAdd  primary={true} />
                            </FloatingActionButton>
                        </NavLink>
                    </ToolbarGroup>
                </Toolbar>
                <Readable>
                    <div>
                        {definitions}
                    </div>
                </Readable>
            </div>
        )
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