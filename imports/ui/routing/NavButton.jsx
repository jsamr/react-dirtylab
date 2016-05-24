import React, { Component } from 'react'
import NavLink from './NavLink.jsx';
import FlatButton from 'material-ui/FlatButton';
import { applicationTheme } from '../../conf/themes';

export default class NavButton extends Component {
    render(){
        return (
            <NavLink {...this.props}
                activeStyle={{color:applicationTheme.palette.accent1Color,borderBottom:`3px solid ${applicationTheme.palette.accent1Color}`}}
                style={{color:applicationTheme.palette.accent2Color}}>
                <FlatButton label={this.props.label} style={{color:'inherit'}} />
            </NavLink>
        );
    }
}

NavButton.propTypes={
  label:React.PropTypes.string.isRequired
};

