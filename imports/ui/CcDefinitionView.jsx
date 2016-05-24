import React, { Component } from 'react';
import CcDefinition from '../api/CcDefinition';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import RichMarkdownBlock from './utils/RichMarkdownBlock.jsx';
import { ccThemes } from '../conf/themes';

const paddingHorz=16,
      paddingVert=5;

export default class CcDefinitionView extends Component {

    renderIfUndefined(){
        return <div>Aucune définition trouvée...</div>;
    }
    renderIfDefined(){
        const optionalDetailed=this.props.ccDefinition.detailed_md?(
            <CardText expandable={true} >
                <RichMarkdownBlock markdown={this.props.ccDefinition.detailed_md}/>
            </CardText>
        ):null;
        return (
            <Paper style={this.props.style}>
                <article>
                    <Card expanded={this.props.forceExpand||undefined}>
                        <CardTitle
                            title={this.props.ccDefinition.entry}
                            subtitle={`#${this.props.ccDefinition._id}`}
                            showExpandableButton={optionalDetailed!=null&&!this.props.forceExpand}
                            style={Object.assign({padding:`${paddingVert}px ${paddingHorz}px`},{background:ccThemes.def.lightBackground})}
                            titleColor={ccThemes.def.darkColor}
                            subtitleColor={ccThemes.def.darkColor}
                        />
                        <CardText
                            style={{padding:`${paddingVert}px ${paddingHorz}px`}}
                        >
                            <dfn title={this.props.ccDefinition.entry}>
                                <RichMarkdownBlock markdown={this.props.ccDefinition.succinct_md}/>
                            </dfn>
                        </CardText>
                        {optionalDetailed}
                    </Card>
                </article>
            </Paper>
        )
    }

    render(){
        if(this.props.ccDefinition!==undefined) return this.renderIfDefined();
        else return this.renderIfUndefined();
    }
}

CcDefinitionView.propTypes={
    ccDefinition:React.PropTypes.instanceOf(CcDefinition).isRequired,
    forceExpand:React.PropTypes.bool
};

CcDefinitionView.defaultProps={
    forceExpand:false
};