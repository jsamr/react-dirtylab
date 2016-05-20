
import React, { Component } from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
import Paper from 'material-ui/Paper';
import comments from '../api/comments.js';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class InnerCommentBox extends Component {
    render(){
        return (
            <Paper>
                <h1>Commentaires</h1>
                <CommentList comments={this.props.comments}/>
                <CommentForm/>
            </Paper>
        );
    }
}

InnerCommentBox.propTypes = {
    data:React.PropTypes.arrayOf(React.PropTypes.object)
};

const CommentBox = createContainer(() => {
    Meteor.subscribe('comments');
    return {
        comments: comments.find({}).fetch()
    };
}, InnerCommentBox );

export default CommentBox;