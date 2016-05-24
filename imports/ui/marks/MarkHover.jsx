import React, { Component } from 'react';
import { ccTypes } from '../../markdown/markExtensions';
import Popover from 'material-ui/Popover';
import { ccThemes } from '../../conf/themes';
import Radium from 'radium';

const markHoverMaxHeight=350;

class MarkHover extends React.Component {
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

        const ccTheme=ccThemes[this.props.ccType],
            domain=`${this.props.ccType}-${this.props._id}`;
            popoverComponentStyle=[{
                color:ccTheme.lightColor,
                background:ccTheme.darkBackground,
                ':hover':{
                    background:ccTheme.lightBackground,
                    color:ccTheme.darkColor
                }
            }];
        return (
            <mark
                key={`mark-${domain}`}
                className={'inner-link'}
                onMouseEnter={this.handleMouseEnter}
                onTouchTap={this.handleTouchTap}
                style={popoverComponentStyle}>
                {this.props.children}
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                    useLayerForClickAway={false}
                    autoCloseWhenOffScreen={false}
                    onRequestClose={this.handleRequestClose.bind(this)}
                    onMouseOut={this.handleRequestClose.bind(this)} >

                    <div className='inner-mark-hover'
                         id={`markcontent${domain}`}
                         style={{maxWidth:markHoverMaxHeight}} >
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
    _id:React.PropTypes.string.isRequired,
    innerElement:React.PropTypes.node
};

MarkHover.defaultProps= {
    innerElement: 'Warning : forgot to include inner Element. Hover is empty'
};

export default Radium(MarkHover);