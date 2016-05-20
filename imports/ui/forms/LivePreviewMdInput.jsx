import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RichMarkdownBlock from '../utils/RichMarkdownBlock';
import {CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
export default class LivePreviewMdInput extends Component{
    constructor(props){
        super(props);
        this.state={
            markdown:''
        }
    }
    updateText(props,value){
        this.props.onChange(value);
        //TODO enhance performance with a debounce
        this.setState({
            markdown:value
        })
    }
    render(){

        return (
            <Paper style={{display:'flex',width:'100%',flexDirection:'row', flexWrap:'nowrap', alignItems:'stretch'}}>
                <div style={{flexBasis:'50%',background:'black',padding:10}}>
                    <TextField
                        hintText="Rédigez en markdown"
                        floatingLabelText={this.props.inputName}
                        multiLine={true}
                        fullWidth={true}
                        rows={this.props.numberOfRows}
                        onChange={this.updateText.bind(this)}
                    />
                </div>
                <div style={{flexBasis:'50%'}}>
                    <CardText>
                        <RichMarkdownBlock markdown={this.state.markdown}/>
                    </CardText>
                </div>
            </Paper>
        )
    }
}

LivePreviewMdInput.propTypes={
    numberOfRows:React.PropTypes.number,
    inputName:React.PropTypes.string,
    markdown:React.PropTypes.string,
    onChange:React.PropTypes.func
};

LivePreviewMdInput.defaultProps={
    numberOfRows:3,
    inputName:'',
    markdown:'',
    onChange:()=> null
};
