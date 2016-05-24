import MarkHover from '../ui/marks/MarkHover.jsx';
import DefinitionMarkHover from '../ui/marks/DefinitionMarkHover.jsx';
import ccClasses from '../api/ccClasses';
import markExtensions from './markExtensions';
import ccNames from '../api/ccNames';
import ccMarks from '../ui/marks/ccMarks';
import { check } from 'meteor/check';

const collaborativeContentsHovers = new Map();

ccNames.forEach((name)=> {
    check(name,{ short:String, full:String });
    const extensionName=`${name.short}MarkExtension`,
          className=`Cc${name.full}`,
          markHoverName=`${name.full}MarkHover`;
    const extension=markExtensions[extensionName],
          clazz=ccClasses[className],
          markHover=ccMarks[markHoverName];
    if(extension === undefined) {
        throw TypeError(`Could not find ${extensionName} extension. Check it is exported properly`)
    }
    if(className === undefined) {
        throw TypeError(`Could not find ${className} class. Check it is exported properly`)
    }
    if(markHover === undefined) {
        throw TypeError(`Could not find ${markHover} React component. Check it is exported properly`)
    }
    collaborativeContentsHovers.set(name.short,{
        extension,
        class:clazz,
        markHover
    });
});
export default collaborativeContentsHovers;