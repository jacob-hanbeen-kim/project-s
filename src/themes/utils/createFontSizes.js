// https://www.impactplus.com/blog/best-font-size-for-website#:~:text=Although%20there's%20no%20official%20ADA,font%20for%20the%20body%20text.
export default function createFontSizes() {
    const toRem = size => `${size}rem`
    // const fontSizes = [0.75, 0.8125, 0.875, 1.0, 2.25, 2.75, 3.75, 4.5].map(toRem)
    let fontSizes = {};

    fontSizes.standard = '1rem' // (16px) always have standrad to be 1rem
    fontSizes.h1 = '3rem' // 48px
    fontSizes.h2 = '2.25rem' // 36px
    fontSizes.h3 = '1.75rem' // 28px
    fontSizes.h4 = '1.125rem' // 22px
    fontSizes.h5 = '0.875rem' //
    fontSizes.h6 = '0.75rem' //
    fontSizes.blockqoute = '1.5rem' // 22px

    /* eslint-enable prefer-destructuring */
    fontSizes.use = type => {
        if (!fontSizes[type]) throw new Error(`${type} is not a valid fontSize`)
        return fontSizes[type]
    }

    return fontSizes
}
