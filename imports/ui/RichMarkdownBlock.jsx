import React from 'react';
import MDToHTMLConverter from '../helpers/MDToHTMLConverter.js';

export default class RichMarkdownBlock extends React.Component {
    renderMD(){
        return {
            __html:this._mDToHTMLConv.convert(this.props.stream)
        }
    }

    render(){
        return <div dangerouslySetInnerHTML={this.renderMD()} className='rich-markdown-content'></div>
    }

    constructor(props){
        super(props);
        this._mDToHTMLConv=new MDToHTMLConverter(props.headerPrefix);
    }
}