export default function createLineHeight() {
    const toRem = size => `${size}rem`

    const lineHeights = [1, 1.25, 1.5, 1.75, 3, 4, 4.75].map(toRem)

    /* eslint-disable prefer-destructuring */
    // Display aliases
    lineHeights.display1 = lineHeights[6]
    lineHeights.display2 = lineHeights[5]
    lineHeights.display3 = lineHeights[4]
    lineHeights.heading1 = lineHeights[3]
    lineHeights.heading2 = lineHeights[2]

    // Text aliases
    lineHeights.largest = lineHeights[3]
    lineHeights.larger = lineHeights[2]
    lineHeights.standard = lineHeights[1]
    lineHeights.smaller = lineHeights[1]
    lineHeights.smallest = lineHeights[0]
    /* eslint-enable prefer-destructuring */

    lineHeights.use = type => {
        if (!lineHeights[type]) throw new Error(`${type} is not a valid fontSize`)
        return lineHeights[type]
    }

    return lineHeights
}
