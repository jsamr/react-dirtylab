// Exporting this function so that words counting is consistent accross the app
// We might add some more accurate features like punctuation cropping, etc...
export default function(string){
    return string.split(/\s+/).length;
}