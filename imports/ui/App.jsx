import React, { Component } from 'react';
import CommentBox from './CommentBox.jsx'
import { createContainer } from 'meteor/react-meteor-data';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import comments from '../api/comments.js';
import CustomAppBar from '../ui/CustomAppBar.jsx';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

class App extends Component {
    render(){
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <CustomAppBar/>
                    <main>
                        <CommentBox data={this.props.data}/>
                    </main>
                </div>
            </MuiThemeProvider>
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