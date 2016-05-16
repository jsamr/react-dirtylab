import { Meteor } from 'meteor/meteor';
import validate from '../imports/validation/validate';
import comments from '../imports/api/comments.js';
import CcDefinition from '../imports/api/CcDefinition.js';
import CcVision from '../imports/api/CcVision.js';
import CcReference from '../imports/api/CcReference.js';
import CcSection from '../imports/api/CcSection.js';
import CcChapter from '../imports/api/CcChapter.js';
import CcTrack from '../imports/api/CcTrack.js';

Meteor.startup(() => {
  // code to run on server at startup
});
