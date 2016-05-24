import React from 'react'
import { Link } from 'react-router'
import Route from 'route-parser';
import NavEl from './NavEl.jsx';

export default class NavLink extends NavEl {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Link to={this.evalRoute.call(this)} {...this.props}>
                {this.props.children}
            </Link>
        )
    }
}

export default NavLink;