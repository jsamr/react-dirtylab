import MarkHover from '../ui/marks/MarkHover.jsx';
import DefinitionMarkHover from '../ui/marks/DefinitionMarkHover.jsx';
import {defMarkExtension,refMarkExtension,trackMarkExtension,visionMarkExtension} from './markExtensions';
import CcDefinition from '../api/CcDefinition';
import CcTrack from '../api/CcTrack';
import CcVision from '../api/CcVision';
import CcReference from '../api/CcReference';

export default collaborativeContentsHovers = {
    def:{
        extension:defMarkExtension,
        class:CcDefinition,
        markHover:DefinitionMarkHover
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