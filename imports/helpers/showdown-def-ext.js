

export default function(){
    const defRegex=/{%def[ ]+(.+)[ ]+%}\([]*#(\w+)[]*\)/i;
    return {
        type: 'lang',
        regex: defRegex,
        replace: (regex,text,defId)=> {
            this._tokens.defs.push(defId);
            return `<span class="inner-link ext-def" data-def-id="${defId}">${text}</span>`;
        }
    };
}