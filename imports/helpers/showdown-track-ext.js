export default function(){
    const defRegex=/{%track[ ]+(.+)[ ]+%}\([]*#(\w+)[]*\)/i;
    return {
        type: 'lang',
        regex: defRegex,
        replace: (regex,text,trackId)=> {
            this._tokens.tracks.push(trackId);
            return `<span class="inner-link ext-track" data-track-id="${trackId}">${text}</span>`;
        }
    };
}