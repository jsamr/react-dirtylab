import React, { Component } from 'react';
import RichMarkdownBlock from './RichMarkdownBlock.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class Comment extends Component {

    render(){
        return (
            <Card >
                <CardHeader title={this.props.author}  />
                <CardText>
                    <RichMarkdownBlock stream={this.props.text.toString()} headerPrefix={this.props._id}/>
                </CardText>
            </Card>
        );
    }

}

