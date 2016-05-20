import React, { Component } from 'react';
import CustomAppBar from '../ui/CustomAppBar.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getTheme from '../conf/getTheme';

const theme=getTheme();

export default class App extends Component {
    render(){
        return (
            <MuiThemeProvider muiTheme={theme}>
                <div>
                    <CustomAppBar/>
                    <main style={{marginTop:theme.appBar.height+10,marginLeft:10,marginRight:10}}>
                        {this.props.children}
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}