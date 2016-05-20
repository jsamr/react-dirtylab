import React, { Component } from 'react';


export default class Readable extends Component {
    render(){
        return (
            <div style={{maxWidth:850,marginLeft:'auto',marginRight:'auto'}}>
                {this.props.children}
            </div>
        )
    }
}