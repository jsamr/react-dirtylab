
import React, { Component } from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';

export default class CommentBox extends Component {
    render(){
        return (
            <div className="commentBox">
                <h1>Commentaires</h1>
                <CommentList data={this.props.data}/>
                <CommentForm/>
            </div>

        );
    }
}