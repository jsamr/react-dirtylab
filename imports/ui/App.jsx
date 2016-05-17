import React, { Component } from 'react';
import CustomAppBar from '../ui/CustomAppBar.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getTheme from '../helpers/getTheme';

const theme=getTheme();

export default class App extends Component {
    render(){
        return (
            <MuiThemeProvider muiTheme={theme}>
                <div>
                    <CustomAppBar/>
                    <main style={{marginTop:theme.appBar.height}}>
                        {this.props.children}
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}