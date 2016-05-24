import React, { Component } from 'react';
import CustomAppBar from '../ui/CustomAppBar.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { applicationTheme, formTheme, hoverMarkTheme, ccThemes } from '../conf/themes';

export default class App extends Component {
    getChildContext() {
        return {
            appTheme:applicationTheme,
            ccThemes:ccThemes
        };
    }
    render(){
        return (
            <MuiThemeProvider muiTheme={applicationTheme}>
                <div style={{background:applicationTheme.palette.windowBackground}}>
                    <CustomAppBar/>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

App.childContextTypes = {
    appTheme: React.PropTypes.object.isRequired,
    ccThemes: React.PropTypes.object.isRequired
};