import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

export default class LazyLoader extends Component {

    constructor(props){
        super(props);
        const LoadedChild=props.lazyChildCtor;
        this.wrapperLazyChildCtor=createContainer(props.loader,LoadedChild)
    }

    render(){
        const LazyChild=this.wrapperLazyChildCtor;
        if(this.props.shallRender) return <LazyChild {...this.props.propsToPass}/>;
        else return null;
    }
}

LazyLoader.propTypes={
    loader:React.PropTypes.func.isRequired,
    propsToPass:React.PropTypes.object,
    lazyChildCtor:React.PropTypes.func.isRequired,
    shallRender:React.PropTypes.bool.isRequired
};

LazyLoader.defaultProps={
    propsToPass:{}
};