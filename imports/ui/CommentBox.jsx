
import React, { Component } from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
import Paper from 'material-ui/Paper';

export default class CommentBox extends Component {
    render(){
        return (
            <Paper>
                <h1>Commentaires</h1>
                <CommentList data={this.props.data}/>
                <CommentForm/>
            </Paper>

        );
    }
}