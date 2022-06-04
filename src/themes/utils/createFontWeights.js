export default function createfontWeights() {
    // const fontWeights = [400, 500, 700]
    let fontWeights = {};

    /* eslint-disable prefer-destructuring */
    // Size aliases
    fontWeights.standard = 400
    fontWeights.bolder = 500
    fontWeights.boldest = 700
    /* eslint-enable prefer-destructuring */

    fontWeights.use = type => {
        if (!fontWeights[type]) throw new Error(`${type} is not a valid fontWeight`)
        return fontWeights[type]
    }

    return fontWeights
}
