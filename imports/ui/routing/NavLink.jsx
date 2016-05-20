import React from 'react'
import { Link } from 'react-router'
import Route from 'route-parser';

export default class NavLink extends React.Component {
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
                throw Error('NavLink : this.props.route or this.props.route.$root must be a Route instance from package route-parser');
            }
        }
    }
    render() {
        console.info(typeof this.evalRoute.call(this));
        return <Link to={this.evalRoute.call(this)} activeStyle={{ color: 'red' }}>{this.props.children}</Link>
    }
}

NavLink.propTypes={
    route:React.PropTypes.object.isRequired,
    params:React.PropTypes.object

};

NavLink.defaultProps={
    params:{}
};