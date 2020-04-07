export const CHANGE_COLOR = 'CHANGE_COLOR';

export const setColorPicker = (colorProp, hexColor) => ({
    type: CHANGE_COLOR,
    colorProp,
    hexColor,
});
