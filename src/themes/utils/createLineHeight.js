export default function createLineHeight() {
    const toRem = size => `${size}rem`

    // const lineHeights = [0.9, 1, 1.25, 1.375, 1.5, 1.75, 3, 4, 4.75].map(toRem)
    let lineHeights = {};

    lineHeights.standard = '1.375rem'
    lineHeights.h1 = '3.5rem'
    lineHeights.h2 = '2.75rem'
    lineHeights.h3 = '2.25rem'
    lineHeights.h4 = '1.625rem'
    lineHeights.h5 = '1.375rem' //
    lineHeights.h6 = '1.25rem' //
    lineHeights.blockqoute = '2.0rem'

    lineHeights.use = type => {
        if (!lineHeights[type]) throw new Error(`${type} is not a valid fontSize`)
        return lineHeights[type]
    }

    return lineHeights
}
