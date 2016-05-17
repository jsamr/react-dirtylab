/**
 * A factory function to create a markdown extension for showdown following this pattern :
 * {%CCTYPE TEXT %}(#ID) where CCTYPE identifies the type of referenced content, TEXT is the text that will be displayed and ID is the referenced content identifier.
 * @param ccType The collaborative content type that will be used to mark text
 * @returns {Function} the showdown extension. See {@link https://github.com/showdownjs/showdown/wiki/Extensions#creating-showdown-extensions}
 */
export default function(ccType){
    const extension = function(){
        const regex=new RegExp(`{%${ccType}[ ]+(.+)[ ]+%}\\([]*#(\\w+)[]*\\)`,'i');
        return {
            type: 'lang',
            regex,
            replace: (regex,text,tagId)=> {
                this.tokens.get(ccType).push(tagId);
                return `<span class="react-mark-mount" data-ccType="${ccType}" data-id="${tagId}">${text}</span>`;
            }
        };
    };
    extension.ccType=ccType;
    return extension;
}