import React, { Component } from 'react';
import CommentBox from './CommentBox.jsx'
import { createContainer } from 'meteor/react-meteor-data';
import comments from '../api/comments.js';

class App extends Component {
    render(){
        return (
            <CommentBox data={this.props.data}/>
        );
    }
}

App.propTypes = {
    data:React.PropTypes.array
};


const AppContainer = createContainer(() => {
    Meteor.subscribe('comments');
    return {
        data: comments.find({}).fetch()
    };
}, App );

export default AppContainer;