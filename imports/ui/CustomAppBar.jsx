import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import env from '../conf/env';
import { Link } from 'react-router';
import NavLink from './routing/NavLink.jsx';
import { routes } from './routing/AppRouter.jsx';

class CustomAppBar extends Component {
  render(){
      return (
          <AppBar
              style={{position:'fixed',top:0}}
              title={env.appName}
              iconElementRight={<NavLink route={routes.cc.definitions} >Définitions</NavLink>}
          />
      );
  }
}

export default CustomAppBar;

