// check here for available colors http://www.material-ui.com/#/customization/colors
import  * as colors  from 'material-ui/styles/colors';
import {fade, darken} from 'material-ui/utils/colorManipulator';
import buildTheme from './theme-builder';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

// taken from http://www.materialui.co/flatuicolors
const turquoise='#1abc9c',
      emerland='#2ecc71',
      peterriver='#3498db',
      amethyst='#9b59b6',
      wetasphalt='#34495e',
      greensea='#16a085',
      nephritis='#27ae60',
      belizehole='#2980b9',
      wisteria='#8e44ad',
      midnightblue='#2c3e50',
      sunflower='#f1c40f',
      carrot='#e67e22',
      alizarin='#e74c3c',
      clouds='#ecf0f1',
      concrete='#95a5a6',
      orange='#f39c12',
      pumpkin='#d35400',
      pomegranate='#c0392b',
      silver='#bdc3c7',
      asbestos='#7f8c8d';



export const applicationTheme = buildTheme({
    primary1Color: colors.blueGrey600,
    primary2Color: colors.brown500,
    primary3Color: colors.grey600,
    accent1Color: colors.lime500,
    accent2Color: colors.green200,
    accent3Color: colors.grey500,
    textColor: colors.darkBlack,
    alternateTextColor: colors.white,
    canvasColor: clouds,
    borderColor: colors.grey300,
    disabledColor: fade(colors.darkBlack, 0.3),
    pickerHeaderColor: colors.cyan500,
    clockCircleColor: fade(colors.darkBlack, 0.07),
    shadowColor: colors.fullBlack,
    windowBackground:colors.amber100
});

export const hoverMarkTheme = buildTheme(darkBaseTheme.palette);

export const formTheme = buildTheme({
    primary1Color: nephritis,
    primary2Color: carrot,
    primary3Color: asbestos,
    accent1Color: pomegranate,
    accent2Color: turquoise,
    accent3Color: wisteria,
    textColor: midnightblue,
    alternateTextColor: clouds,
    canvasColor: '',
    borderColor: concrete,
    disabledColor: fade(colors.darkBlack, 0.3),
    pickerHeaderColor: greensea,
    clockCircleColor: fade(colors.darkBlack, 0.07),
    shadowColor: colors.fullBlack
});

/**
 *
 * @param {String=} background the background color
 * @param {String=} color the font color
 * @returns {{background: (string), color: (string), hoverBackground: (string)}}
 */
function buildCcTheme(background,color){
    return {
        background,
        color,
        hoverBackground:darken(background,0.2)
    }
}

/**
 * An object containing styles for each collaborative content type
 * @type {{def: ({background, color, hoverBackground}|{background: string, color: string, hoverBackground: string}), ref: ({background, color, hoverBackground}|{background: string, color: string, hoverBackground: string}), track: ({background, color, hoverBackground}|{background: string, color: string, hoverBackground: string}), vision: ({background, color, hoverBackground}|{background: string, color: string, hoverBackground: string})}}
 */
export const ccThemes = {
    def:buildCcTheme(colors.lime200,colors.blueGrey600),
    ref:buildCcTheme(colors.greenA100,colors.blueGrey600),
    track:buildCcTheme(colors.indigo900, colors.blueGrey600),
    vision:buildCcTheme(colors.amber50, colors.blueGrey600)
};


