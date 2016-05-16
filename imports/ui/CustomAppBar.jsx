import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import env from '../helpers/env';

class CustomAppBar extends Component {
  render(){
      return (
          <AppBar
              style={{position:'fixed',top:0}}
              title={env.appName}
              iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
      );
  }
}

export default CustomAppBar;

