import React, { Component } from 'react';
import comments from '../api/comments.js';

class CommentForm extends Component {

    handleAuthorChange(e) {
        this.setState({'author':e.target.value});
    }
    handleTextChange(e){
        this.setState({'text':e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        let author = this.state.author.trim();
        let text = this.state.text.trim();
        if (!text || !author) {
            console.warn('Submission is empty.');
            return;
        }
        let doc={author,text};
        comments.insert(doc);
        this.setState({author: '', text: ''});
    }

    render(){
        return (
            <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange.bind(this)}/>
                <textarea type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange.bind(this)} />
                <input type="submit" value="Post" />
            </form>
        );
    }

    constructor(props){
        super(props);
        this.state={
            author:'',
            text:''
        }
    }
}



export default CommentForm;