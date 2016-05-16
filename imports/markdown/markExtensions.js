import markExtensionFactory from './markExtensionFactory';

import MarkHover from '../ui/marks/MarkHover.jsx';

import CcDefinition from '../api/CcDefinition';
import CcTrack from '../api/CcTrack';
import CcVision from '../api/CcVision';
import CcReference from '../api/CcReference';

export const defMarkExtension = markExtensionFactory('def');
export const refMarkExtension = markExtensionFactory('ref');
export const trackMarkExtension = markExtensionFactory('track');
export const visionMarkExtension = markExtensionFactory('vision');

export const markExtensions = [defMarkExtension, refMarkExtension, trackMarkExtension, visionMarkExtension];


export default collaborativeContentsHovers = {
    def:{
        extension:defMarkExtension,
        class:CcDefinition,
        markHover:MarkHover
    },
    ref:{
        extension:refMarkExtension,
        class:CcReference,
        markHover:MarkHover
    },
    track:{
        extension:trackMarkExtension,
        class:CcTrack,
        markHover:MarkHover
    },
    vision:{
        extension:visionMarkExtension,
        class:CcVision,
        markHover:MarkHover
    }
}


