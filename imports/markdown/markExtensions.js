import markExtensionFactory from './markExtensionFactory';
import values from 'lodash/values';
export const defMarkExtension = markExtensionFactory('def');
export const refMarkExtension = markExtensionFactory('ref');
export const trackMarkExtension = markExtensionFactory('track');
export const visionMarkExtension = markExtensionFactory('vision');

export default markExtensions = {
    defMarkExtension,
    refMarkExtension,
    trackMarkExtension,
    visionMarkExtension
};

export const markExtensionArray = values(markExtensions);
export const ccTypes = markExtensionArray.map((ext)=>ext.ccType);





