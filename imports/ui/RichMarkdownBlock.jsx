import React from 'react';
import MDToHTMLConverter from '../markdown/MDToHTMLConverter.js';
import ReactDOM from 'react-dom';
import collaborativeContentsHovers from '../markdown/collaborativeContentsHovers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getTheme from '../helpers/getTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class RichMarkdownBlock extends React.Component {
    /**
     * Mount MarkHover to each marked element in the text.
     */
    componentDidMount(){
        let $this = $(ReactDOM.findDOMNode(this));
        this._mDToHTMLConv.tokens.forEach((ids,ccType)=> {
            let HoverComponent = collaborativeContentsHovers[ccType].markHover;
            ids.forEach((id)=>
                //TODO Benchmark this selector
                $($this).find(`span.react-mark-mount[data-ccType="${ccType}"][data-id="${id}"]`).each((index,el)=> {
                    this.states.elements.push(el);
                    ReactDOM.render(
                        <MuiThemeProvider muiTheme={getMuiTheme()}>
                            <HoverComponent ccType={ccType} id={id}>
                                {$(el).text()}
                            </HoverComponent>
                        </MuiThemeProvider>
                        , el)
                    }
                ))});
    }

    /**
     * Unmount all the marked elements
     */
    componentWillUnmount(){
        this.states.elements.forEach((el)=>ReactDOM.unmountComponentAtNode(el));
    }

    renderMD(){
        return {
            __html:this._mDToHTMLConv.convert(this.props.markdown)
        }
    }

    render(){
        return <div dangerouslySetInnerHTML={this.renderMD()} className='rich-markdown-content'></div>
    }

    constructor(props){
        super(props);
        this._mDToHTMLConv=new MDToHTMLConverter(props.headerPrefix);
        this.states={
            elements:[]
        }
    }
}

RichMarkdownBlock.propTypes={
    markdown:React.PropTypes.string.isRequired,
    headerPrefix:React.PropTypes.string
};

export default RichMarkdownBlock;