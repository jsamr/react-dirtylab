import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import env from '../conf/env';
import { Link } from 'react-router';
import NavButton from './routing/NavButton.jsx';
import { routes } from './routing/AppRouter.jsx';
import { Tabs } from 'material-ui/Tabs';
import { ToolbarGroup } from 'material-ui/Toolbar';

class CustomAppBar extends Component {
    constructor(props,context){
        super(...arguments);
        console.info(context);
    }
    render(){
        const nav= (
            <ToolbarGroup>
                <NavButton route={routes.cc.definitions} label='Définitions' />
                <NavButton route={routes.comments} label='Commentaires' />
            </ToolbarGroup>
        );
        return (
            <AppBar
                style={{position:'fixed',top:0}}
                title={env.appName}
                iconElementRight={nav}
            />
        );
    }
}

export default CustomAppBar;

