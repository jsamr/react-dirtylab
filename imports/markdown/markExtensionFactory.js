/**
 * A factory function to create a markdown extension for showdown following this pattern :
 * $CCTYPE{TEXT:ID}() where CCTYPE identifies the type of referenced content, TEXT is the text that will be displayed and ID is the referenced content identifier.
 * @param ccType The collaborative content type that will be used to mark text
 * @returns {Function} the showdown extension. See {@link https://github.com/showdownjs/showdown/wiki/Extensions#creating-showdown-extensions}
 */
export default function(ccType){
    const extension = function(){
        // ~D is the pre-converted '$' sign processed by showdown.
        const regex=new RegExp(`~D${ccType}\\{(.+):[ ]*(\\S+?)[ ]*\\}`,'g');
        return {
            type: 'lang',
            regex,
            replace: (regex,text,tagId)=> {
                this.tokens.get(ccType).add(tagId);
                return `<span class="react-mark-mount" data-ccType="${ccType}" data-id="${tagId}">${text}</span>`;
            }
        };
    };
    extension.ccType=ccType;
    return extension;
}