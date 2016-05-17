import { Meteor } from 'meteor/meteor';
import validate from '../imports/validation/validate';
import comments from '../imports/api/comments.js';
import CcDefinition from '../imports/api/CcDefinition.js';
import CcVision from '../imports/api/CcVision.js';
import CcReference from '../imports/api/CcReference.js';
import CcSection from '../imports/api/CcSection.js';
import CcChapter from '../imports/api/CcChapter.js';
import CcTrack from '../imports/api/CcTrack.js';

Meteor.startup(() => {

    const optique= new CcChapter({
       title:'Optique'
    });
    try {
        optique.save();
    } catch (e){
        console.warn(e.err)
    }
    const def = new CcDefinition({
        chapter:optique,
        entry:"Défi",
        succinct_md:`Question soumise pour l'organisateur de l'événement, ici Léo, et par extension, tous le processus d'élaboration de réponses par les participants.`,
        detailed_md:`Un défi peut être :
* **exploratoire** : la question n'appelle pas de solution, mais seulement l'exploration de chaque branche formée par une problématique. Exemple : *Il y a-t-il de la vie après la mort?* ou encore *Les États-Unis d'Amérique sont-ils encore une superpuissance?*.
* **solutionnable** : la question appelle une ou plusieurs solutions, qui seront offertes par la communauté. Ces solutions, suivant la *vision d'ensemble* choisie, peuvent faire l'object d'une étape de validation par *l'exécutif*. Ces questions commencent typiquement par *Comment...*. Exemple : *Comment envoyer l'humanité dans l'Espace?*. `
    });
    try {
        def.save();
    } catch(e){
        console.warn(e.err)
    }

});
