import {Router, Route, IndexRoute, IndexRedirect} from 'react-router';
import CommentBox from '../CommentBox.jsx';
import CcDefinitionsPage from '../pages/CcDefinitionsPage.jsx';
import CcDefinitionPage from '../pages/CcDefinitionPage.jsx';
import NewCcDefinitionPage from '../pages/NewCcDefinitionPage.jsx';
import App from '../App.jsx';
import React, {Component} from 'react';
import history from '../../conf/history';
import RouteP from 'route-parser';

const ccRoot='cc',
    defRoot='defs';
/**
 * Routes shall be only used with NavLink (route param).
 * This is a way to make route refactoring easy
 */
export const routes = {
    comments:new RouteP('/comments'),
    cc:{
        definitions:{
            $root:new RouteP(`/${ccRoot}/${defRoot}`),
            'new':new RouteP(`/${ccRoot}/${defRoot}/new`),
            view:new RouteP(`/${ccRoot}/${defRoot}/view/:defId`)
        }
    }
};

export default class AppRouter extends Component {
    render(){
        return (
            <Router history={history}>
                <Route path='/' component={App}>
                    <IndexRedirect to={routes.comments.spec} />
                    <Route path={routes.cc.definitions.$root.spec} component={CcDefinitionsPage}/>
                    <Route path={routes.cc.definitions.new.spec}   component={NewCcDefinitionPage}/>
                    <Route path={routes.cc.definitions.view.spec}  component={CcDefinitionPage}/>
                    <Route path={routes.comments.spec}             component={CommentBox}/>
                </Route>
            </Router>
        )
    }
}