import { colorCode, COLORS } from './../resistor-color/resistor-color.js';

export const value = (colorNames) => parseInt(`${colorCode(colorNames[0])}${colorCode(colorNames[1])}`);

