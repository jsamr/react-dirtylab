// import from npm causes following bug :
// 'console is not defined' when meteor loads it
import showdown from './../lib/showdown';
import markExtensions from './markExtensions'

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

export default class MDToHTMLConverter {
    /**
     * Converts markdown to html
     * @param markdown {String}  of markdown input
     * @returns {String} html formatted text
     */
    convert(markdown){
        return this._converter.makeHtml(markdown);
    }

    /**
     *
     * @param {String} [prefix] A string all header ids will be prefixed with.
     */
    constructor(prefix){
        const extensions = markExtensions.map((ext)=>ext.bind(this));
        const prefixHeaderId=prefix?`${prefix}~`:true;
        const options=Object.assign({},showdownOpts,{
            prefixHeaderId,
            extensions
        });
        this._converter=new showdown.Converter(options);
        this.tokens=new Map(markExtensions.map((ext)=>[ext.ccType,[]]));
    }
}

