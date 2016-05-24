import validate from '../imports/validation/validate';
import CcDefinition from '../imports/api/CcDefinition.js';
import CcVision from '../imports/api/CcVision.js';
import CcReference from '../imports/api/CcReference.js';
import CcSection from '../imports/api/CcSection.js';
import CcChapter from '../imports/api/CcChapter.js';
import CcTrack from '../imports/api/CcTrack.js';
import Counters from './Counters';


CcDefinition.extend({
    events:{
        beforeInsert(e){
            e.target._id = `${incrementCounter(Counters, CcDefinition.getName(), 1)}`;
            e.target.entry = e.target.entry.toLowerCase();
        }
    }
});

function tryInsert(doc){
    try{
        doc.save();
    } catch(e){
        console.warn(e.err);
    }
}

Meteor.startup(() => {

    const optique= new CcChapter({
        title:'Optique'
    });
    tryInsert(optique);
    const défi = new CcDefinition({
        chapter:optique,
        entry:"défi",
        succinct_md:`Question soumise pour l'organisateur de l'événement, ici Léo, et par extension, tous le processus d'élaboration de réponses par les participants.`,
        detailed_md:`Un défi peut être :
* **exploratoire** : la question n'appelle pas de solution, mais seulement l'exploration de chaque branche formée par une problématique. Exemple : *Il y a-t-il de la vie après la mort?* ou encore *Les États-Unis d'Amérique sont-ils encore une superpuissance?*.
* **solutionnable** : la question appelle une ou plusieurs solutions, qui seront offertes par la communauté. Ces solutions, suivant la *vision d'ensemble* choisie, peuvent faire l'object d'une étape de validation par *l'exécutif*. Ces questions commencent typiquement par *Comment...*. Exemple : *Comment envoyer l'humanité dans l'Espace?*. `
    });
    tryInsert(défi);
    const communauté = new CcDefinition({
        entry:'communauté',
        succinct_md:`Ensemble des participants à un défi.`
    });
    tryInsert(communauté);
    const qualité=new CcDefinition({
        entry:'qualité',
        succinct_md:`La qualité, c'est dans le contexte d'un défi, notre capacité à

- **Structurer** la réponse offerte par la communauté
- Eviter autant que possible **l'écueil du nombrilisme**, qui consiste à ne pas regarder les interventions des autres participants (parfois pour plein de raisons légitimes)
- **Sourcer** un maximum les faits et théories que nous avançons avec des *références*.`
    });
    tryInsert(qualité);
});
