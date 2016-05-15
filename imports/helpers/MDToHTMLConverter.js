import defExt from './showdown-def-ext.js'
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
    smoothLivePreview:true,
    extensions:[defExt]
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
        return this._converter.makeHtml(text);
    }
    constructor(prefix){
        const boundDefExt=defExt.bind(this);
        const impliedPrefix=prefix?`${prefix}_`:true;
        const options=Object.assign({},showdownOpts,{prefixHeaderId:impliedPrefix,extensions:[boundDefExt]});
        this._converter=new showdown.Converter(options);
        this._tokens={
            def:[]
        }
    }
}

export default MDToHTMLConverter;