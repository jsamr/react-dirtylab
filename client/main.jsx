import React from 'react';
import validate from '../imports/validation/validate';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppRouter from '../imports/ui/routing/AppRouter.jsx';

Meteor.startup(() => {
  injectTapEventPlugin();
  ReactDOM.render(<AppRouter></AppRouter>, document.getElementById('application'));

});

