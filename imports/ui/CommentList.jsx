import React, { Component } from 'react';
import Comment from './Comment.jsx';

export default class CommentList extends Component {
    render(){
        let commentNodes = this.props.data.map((c)=>(<Comment author={c.author} key={c._id} _id={c._id} text={c.text}></Comment>));
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}