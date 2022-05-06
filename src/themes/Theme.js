import createLineHeight from "./utils/createLineHeight";
import createFontSizes from "./utils/createFontSizes";
import createfontWeights from "./utils/createFontWeights";
import createFonts from "./utils/createFonts";

const fontSizes = createFontSizes();
const fontWeights = createfontWeights();
const lineHeights = createLineHeight();
const fonts = createFonts();

const theme = {
        fonts,
        // fontSizes: {
        //         default: '17px',
        //         small: '15px',
        //         large: '21px',
        //         // small: '1em',
        //         // medium: '2em',
        //         // large: '3em'
        //         call: fontSizes
        // },
        fontSizes,
        fontWeights,
        lineHeights,
        border: {
                radius: '5px',
        },
        screen: {
                sizeXS: '320px',
                sizeS: '481px',
                sizeM: '769px',
                sizeL: '1025px',
                sizeXL: '1201px'
        }
}

export const lightTheme = Object.freeze({
        ...theme,
        colors: {
                // A primary color is the color displayed most frequently
                // across your app's screens and components.
                // primary: '#535dca', // primary 400
                // primaryVariant: '#2c38b5', // primary 600
                // primary: 'rgba(187, 161, 79, 0.8)', // change
                primary: '#AE7ACC',
                primaryDark: '#6D4D80',
                primaryLight: '#F6E5FF',
                invert: '#f9fafb',

                // A secondary color provides more ways to
                // accent and distinguish your product
                // Secondary colors are best for:
                //  - Floating action buttons
                //  - Selection controls, like sliders and switches
                //  - Highlighting selected text
                //  - Progress bars
                //  - Links and headlines
                secondary: '#003333', // teal 900
                secondaryVariant: '#343e3f', // teal 500

                // links
                accent: '#2081e2',

                // background-color
                // background: '#f9fafb',
                background: '#ffffff',
                // surface: '#fcfdfe', // surface components - cards, sheets, section
                surface: '#F7F9FA',
                navbar: '#ffffff',
                sidebar: '#f9fafb',

                // font-color
                fontDefault: '#04111d',
                fontMuted: '#393b52',

                // indicator-color
                error: '#B00020',
                success: '#',
                warning: '#',
                info: '#',

                // border-color
                border: '#e5e8eb',

                // "on" colors
                // refers to the color elements that appear “on” top of
                // surfaces that use the above colors
                onPrimary: '#f9fafb',
                // onInvert: '#535dca',
                // onInvert: 'rgba(187, 161, 79, 0.8)', // change
                onInvert: '#AE7ACC',
                onSecondary: '#f9fafb',
                onNavbar: '#04111d',
                onSurface: '#04111d',
                onError: '#f9fafb'
        }
});

export const darkTheme = Object.freeze({
        ...theme,
        colors: {
                // A primary color is the color displayed most frequently
                // across your app's screens and components.
                // primary: '#535dca', // darkGray 800
                // primary: 'rgba(187, 161, 79, 0.8)', // change
                primary: '#AE7ACC',
                // primaryVariant: '#181b2f', // darkGray 900
                primaryDark: '#6D4D80',
                primaryLight: '#F6E5FF',
                invert: '#0d1117',

                // A secondary color provides more ways to
                // accent and distinguish your product
                // Secondary colors are best for:
                //  - Floating action buttons
                //  - Selection controls, like sliders and switches
                //  - Highlighting selected text
                //  - Progress bars
                //  - Links and headlines
                secondary: '#27333b', // teal 900
                secondaryVariant: '#394852', // teal 800

                // links
                accent: '#2081e2',

                // background-color
                background: '#0d1117',
                surface: '#393b52', // surface components - cards, sheets, section
                navbar: '#161b22',
                sidebar: '#0d1117',

                // font-color
                fontDefault: '#f0f6fc',
                fontMuted: '#fcfdfe',

                // indicator-color
                error: '#B00020',
                success: '#',
                warning: '#',
                info: '#',

                // border-color
                border: '#6b6d6e',

                // "on" colors
                // refers to the color elements that appear “on” top of
                // surfaces that use the above colors
                onPrimary: '#f9fafb',
                onInvert: '#e5e8eb',
                onSecondary: '#f9fafb',
                onNavbar: '#f0f6fc',
                onSurface: '#f0f6fc',
                onError: '#f9fafb'
        }
});