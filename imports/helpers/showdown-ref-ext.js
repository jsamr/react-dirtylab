export default function(){
    const defRegex=/{%ref[ ]+(.+)[ ]+%}\([]*#(\w+)[]*\)/i;
    return {
        type: 'lang',
        regex: defRegex,
        replace: (regex,text,refId)=> {
            this._tokens.refs.push(refId);
            return `<span class="inner-link ext-ref" data-ref-id="${refId}">${text}</span>`;
        }
    };
}