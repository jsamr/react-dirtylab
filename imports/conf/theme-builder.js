import getMuiTheme from 'material-ui/styles/getMuiTheme';

const themeBase = {
    spacing: {
        iconSize: 24,
        desktopGutter: 24,
        desktopGutterMore: 32,
        desktopGutterLess: 16,
        desktopGutterMini: 8,
        desktopKeylineIncrement: 64,
        desktopDropDownMenuItemHeight: 32,
        desktopDropDownMenuFontSize: 15,
        desktopDrawerMenuItemHeight: 48,
        desktopSubheaderHeight: 48,
        desktopToolbarHeight: 56
    },
    fontFamily: 'Montserrat, Roboto, sans-serif'
};
export default function buildTheme(palette){
    return getMuiTheme(Object.assign({},themeBase,{palette}));
}