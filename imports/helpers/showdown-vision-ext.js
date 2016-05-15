export default function(){
    const defRegex=/{%vision[ ]+(.+)[ ]+%}\([]*#(\w+)[]*\)/i;
    return {
        type: 'lang',
        regex: defRegex,
        replace: (regex,text,visionId)=> {
            this._tokens.visions.push(visionId);
            return `<span class="inner-link ext-vision" data-vision-id="${visionId}">${text}</span>`;
        }
    };
}