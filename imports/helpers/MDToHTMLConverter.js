import defExt from './showdown-def-ext.js'
import refExt from './showdown-ref-ext.js'
import visionExt from './showdown-vision-ext.js'
import trackExt from './showdown-track-ext.js'
// import from npm causes following bug :
// 'console is not defined' when meteor loads it
import showdown from './../lib/showdown';



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

function highlight(str, lang) {
    if (lang && Highlight.getLanguage(lang)) {
        try {
            return Highlight.highlight(lang, str).value;
        } catch (err) {}
    }
    try {
        return Highlight.highlightAuto(str).value;
    } catch (err) {}
    return ''; // use external default escaping
}

class MDToHTMLConverter {
    convert(text){
        let html= this._converter.makeHtml(text);
        return html;
    }
    constructor(prefix){
        const boundDefExt=defExt.bind(this),
              boundRefExt=refExt.bind(this),
              boundVisionExt=visionExt.bind(this),
              boundTrackExt=trackExt.bind(this);

        const impliedPrefix=prefix?`${prefix}_`:true;
        const options=Object.assign({},showdownOpts,{prefixHeaderId:impliedPrefix,extensions:[boundDefExt,boundRefExt,boundTrackExt,boundVisionExt]});
        this._converter=new showdown.Converter(options);
        this._tokens={
            defs:[],
            refs:[],
            tracks:[],
            visions:[]
        }
    }
}

export default MDToHTMLConverter;