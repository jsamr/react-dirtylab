import React from 'react'
import { Link } from 'react-router'
import Route from 'route-parser';
import NavEl from './NavEl.jsx';
import { Tab } from 'material-ui/Tabs';
import { withRouter } from 'react-router';

export default class NavTab extends NavEl {
    constructor(props){
        super(props);
    }
    navigate(){
        console.info('navigating');
        this.props.router.push(this.evalRoute());
    }
    render() {
        return (
            <Tab {...this.props} onActive={this.navigate.bind(this)} >
                {null}
            </Tab>
        )
    }
}

export default withRouter(NavTab);