export const ACTIVE_COLOR_PICKER = 'ACTIVE_COLOR_PICKER';

export const setActiveColorPicker = (colorProp, active) => ({
	type: ACTIVE_COLOR_PICKER,
	colorProp,
	active,
});
