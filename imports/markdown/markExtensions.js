import markExtensionFactory from './markExtensionFactory';

export const defMarkExtension = markExtensionFactory('def');
export const refMarkExtension = markExtensionFactory('ref');
export const trackMarkExtension = markExtensionFactory('track');
export const visionMarkExtension = markExtensionFactory('vision');

export default markExtensions = [defMarkExtension, refMarkExtension, trackMarkExtension, visionMarkExtension];
export const ccTypes = markExtensions.map((ext)=>ext.ccType);




