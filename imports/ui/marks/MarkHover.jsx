import React, { Component } from 'react';

export default class MarkHover extends React.Component {
    render(){
        return (<mark className={`inner-link ext-${this.props.ccType}`}>{this.props.children}</mark>);
    }
    constructor(props){
        super(props);
        console.info(props);
    }
}