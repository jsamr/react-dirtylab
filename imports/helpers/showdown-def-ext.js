

export default function(){
    const defRegex=/{%def[ ]+(.+)[ ]+%}\([]*#(\w+)[]*\)/i;
    return {
        type: 'lang',
        regex: defRegex,
        replace: (regex,text,defId)=> {
            this._tokens.def.push(defId);
            return `<span class="ext-definition" data-definition-id="${defId}">${text}</span>`;
        }
    };
}