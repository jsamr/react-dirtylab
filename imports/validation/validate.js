import { Match } from 'meteor/check';
import isURL from 'validator/lib/isURL';
import { Validator } from 'meteor/jagi:astronomy';
import countWords from '../utils/countWords';

function mustBeNumber(validatorName){
    return function (param){
        if (!Match.test(param, Number)) {
            throw new TypeError(
                `Parameter for the "${validatorName}" validator has to be a number`
            );
        }
    }
}

Validator.create({
    name:'url',
    parseParam(){},
    isValid({value}){
        return isURL(value);
    },
    resolveError({ name }){
        return `${name} must be a valid URL`;
    }
});

Validator.create({
    name:'maxWords',
    parseParam:mustBeNumber('maxWords'),
    isValid({value,param}){
        return countWords(value)<=param;
    },
    resolveError({ name, param }){
        return `${name} must be composed of a maximum of ${param} words`;
    }
});

Validator.create({
    name:'minWords',
    parseParam:mustBeNumber('minWords'),
    isValid({value,param}){
        return countWords(value)>=param;
    },
    resolveError({ name, param }){
        return `${name} must be composed of a minimum of ${param} words`;
    }
});