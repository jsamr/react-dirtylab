import React from 'react'
import { Link } from 'react-router'
import Route from 'route-parser';

export default class NavEl extends React.Component {
    evalRoute(){
        return this._route.reverse(this.props.params)
    }
    constructor(props){
        super(props);
        if(props.route instanceof  Route){
            this._route=props.route;
        } else {
            if(props.route.$root instanceof Route){
                this._route=props.route.$root;
            } else {
                throw Error('NavEl : this.props.route or this.props.route.$root must be a Route instance from package route-parser');
            }
        }
    }
}

NavEl.propTypes={
    route:React.PropTypes.object.isRequired,
    params:React.PropTypes.object
};