/**
 * A factory function to create a markdown extension for showdown following this pattern :
 * {%TAG TEXT %}(#ID) where TAG identifies the type of reference, TEXT is the text that will appear and ID is the reference identifier.
 * @param tag The tag that will be used to mark text
 * @returns {Function} the showdown extension. See {@link https://github.com/showdownjs/showdown/wiki/Extensions#creating-showdown-extensions}
 */
export default function(tag){
    const extension = function(){
        const regex=new RegExp(`{%${tag}[ ]+(.+)[ ]+%}\\([]*#(\\w+)[]*\\)`,'i');
        return {
            type: 'lang',
            regex,
            replace: (regex,text,tagId)=> {
                this.tokens.get(tag).push(tagId);
                return `<span class="react-mark-mount" data-ccType="${tag}" data-id="${tagId}">${text}</span>`;
            }
        };
    };
    extension.tag=tag;
    return extension;
}