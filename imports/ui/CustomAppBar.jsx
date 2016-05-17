import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import env from '../helpers/env';
import { Link } from 'react-router';

class CustomAppBar extends Component {
  render(){
      return (
          <AppBar
              style={{position:'fixed',top:0}}
              title={env.appName}
              iconElementRight={<Link to="/definitions">Définitions</Link>}
          />
      );
  }
}

export default CustomAppBar;

