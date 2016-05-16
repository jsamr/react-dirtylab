import React from 'react';
import MDToHTMLConverter from '../markdown/MDToHTMLConverter.js';
import { findDOMNode } from 'react-dom';
import collaborativeContentsHovers from '../markdown/markExtensions';
import { render } from 'react-dom';

export default class RichMarkdownBlock extends React.Component {
    /**
     * Mount MarkHover to each marked element in the text.
     */
    componentDidMount(){
        let $this = $(findDOMNode(this));
        this._mDToHTMLConv.tokens.forEach((ids,ccType)=> {
            let HoverComponent = collaborativeContentsHovers[ccType].markHover;
            ids.forEach((id)=>
                $($this).find(`span.react-mark-mount[data-ccType="${ccType}"][data-id="${id}"]`).each((index,$el)=>render(<HoverComponent ccType={ccType} id={id}>{$($el).text()}</HoverComponent>,$el))

            )
        });
    }

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