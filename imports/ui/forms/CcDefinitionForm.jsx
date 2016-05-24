import React, { Component } from 'react';
import LivePreviewMDInput from './LivePreviewMdInput.jsx';
import TextField from 'material-ui/TextField';
import CcDefinition from '../../api/CcDefinition';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { formTheme } from '../../conf/themes';
export default class CcDefinitionForm extends Component {
    setEntry(props, val){
        this.props.ccDefinition.entry=val;
    }
    saveDefinition(){
        this.props.ccDefinition.save();
        this.props.onSave();
    }
    cancel(){
        this.props.onCancel();
    }
    render(){
        return (
            <MuiThemeProvider muiTheme={ formTheme }>
                <div className="ccDefinitionForm">
                    <div style={{padding:10}}>
                        <TextField hintText="Max 40 lettres" style={{fontSize:30,textAlign:'center'}} floatingLabelText="Mot à définir" onChange={this.setEntry.bind(this)} fullWidth={true}/>
                    </div>
                    <LivePreviewMDInput numberOfRows={3} inputName='Résumé' onChange={(val)=>this.props.ccDefinition.succinct_md=val}/>
                    <LivePreviewMDInput numberOfRows={5} inputName='Détaillé' onChange={(val)=>this.props.ccDefinition.detailed_md=val}/>
                    <Toolbar >
                        <ToolbarGroup>
                            <RaisedButton label='Sauvegarder' primary={true} onMouseUp={this.saveDefinition.bind(this)} onTouchEnd={this.saveDefinition.bind(this)} />
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <RaisedButton label='Annuler' p onMouseUp={this.cancel.bind(this)} onTouchEnd={this.cancel.bind(this)} />
                        </ToolbarGroup>
                    </Toolbar>
                </div>
            </MuiThemeProvider>
        )
    }
}

CcDefinitionForm.propTypes={
    ccDefinition:React.PropTypes.instanceOf(CcDefinition),
    onSave:React.PropTypes.func,
    onCancel:React.PropTypes.func
};

CcDefinitionForm.defaultTypes={
    onCancel:()=> null,
    onSave:()=> null
};