// import from npm causes following bug :
// 'console is not defined' when meteor loads it
import showdown from './../lib/showdown';
import {markExtensions} from './markExtensions'

const showdownOpts={
    omitExtraWLInCodeBlocks:false,
    noHeaderId:false,
    prefixHeaderId:true, // can set String to prefix id
    parseImgDimensions:true,
    headerLevelStart:1,
    simplifiedAutoLink:false,
    literalMidWordUnderscores:false,
    strikethrough:true,
    tables:true,
    tablesHeaderId:false,
    ghCodeBlocks:true,
    tasklists:false,
    smoothLivePreview:true
};

class MDToHTMLConverter {
    convert(text){
        return this._converter.makeHtml(text);
    }
    constructor(prefix){
        const extensions = markExtensions.map((ext)=>ext.bind(this));
        const prefixHeaderId=prefix?`${prefix}~`:true;
        const options=Object.assign({},showdownOpts,{
            prefixHeaderId,
            extensions
        });
        this._converter=new showdown.Converter(options);
        this.tokens=new Map(markExtensions.map((ext)=>[ext.tag,[]]));
    }
}

export default MDToHTMLConverter;