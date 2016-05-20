import React, { Component } from 'react';
import { ccTypes } from '../../markdown/markExtensions';
import Popover from 'material-ui/Popover';

export default class MarkHover extends React.Component {
    handleEvent(e){
        e.preventDefault();
        this.setState({
            open:true,
            anchorEl:e.currentTarget
        });
    }

    handleRequestClose(){
        this.setState({
            open: false
        });
    };

    render(){
        return (
            <mark
                className={`inner-link ext-${this.props.ccType} ${this.state.open?'hovered':''}`}
                onMouseEnter={this.handleMouseEnter}
                onTouchTap={this.handleTouchTap}>
            {this.props.children}
            <Popover
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                useLayerForClickAway={false}
                autoCloseWhenOffScreen={false}
                onRequestClose={this.handleRequestClose.bind(this)}>
                <div className='inner-mark-hover'>
                    {this.props.innerElement}
                </div>
            </Popover>
        </mark>
        );
    }
    constructor(props){
        super(props);
        this.state={
            open: false
        };
        this.handleMouseEnter=this.handleEvent.bind(this);
        this.handleTouchTap=this.handleEvent.bind(this);
    }
}

MarkHover.propTypes={
    ccType:React.PropTypes.oneOf(ccTypes).isRequired,
    id:React.PropTypes.string.isRequired,
    innerElement:React.PropTypes.node
};

MarkHover.defaultProps= {
    innerElement: 'Warning : forgot to include inner Element. Hover is empty'
};