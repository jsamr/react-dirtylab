import React, { Component } from 'react';
import { applicationTheme } from '../conf/themes';

export default class Main extends Component {
    render(){
        return (
            <main style={{marginTop:applicationTheme.appBar.height+10,marginLeft:10,marginRight:10}}>
                {this.props.children}
            </main>
        );
    }
}