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
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                useLayerForClickAway={false}
                onRequestClose={this.handleRequestClose.bind(this)}>
                TROLOLOLOLOLOLOLOLO
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
    ccType:React.PropTypes.oneOf(ccTypes).isRequired
};