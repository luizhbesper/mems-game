import { colors } from './src/constants/colors';
import { fonts } from './src/constants/fonts';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        colors,
        fontFamily: fonts,
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [],
};
