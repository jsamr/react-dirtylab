import React, { Component } from 'react';
import RichMarkdownBlock from './RichMarkdownBlock.jsx';

export default class Comment extends Component {

    render(){
        return (
            <div className='comment'>
                <h2 className='commentAuthor'>
                    {this.props.author}
                </h2>
                <RichMarkdownBlock stream={this.props.text.toString()} headerPrefix={this.props._id}/>
            </div>
        );
    }

}

