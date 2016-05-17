import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import CommentBox from './CommentBox.jsx';
import DefinitionsPage from './DefinitionsPage.jsx';
import App from './App.jsx';
import React, {Component} from 'react';

export default class AppRouter extends Component {
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={CommentBox} />
                    <Route path="definitions" component={DefinitionsPage} />
                </Route>
            </Router>)
    }
}