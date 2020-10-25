import Typography from 'typography'
import typo from './font-sizes'
import 'typeface-lato'

const typography = new Typography({
  baseFontSize: '10px !important',
  baseLineHeight: 1.687,
  headerFontFamily: [`${typo.fontFamilyHeaders}`, 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: [`${typo.fontFamilyBody}`, 'sans-serif'],
  googleFonts: [
    {
      name: `${typo.fontFamilyBody}`,
      styles: [
        '600',
        '500',
        '400',
      ],
    },
    {
      name: `${typo.fontFamilyHeaders}`,
      styles: [
        '600',
        '500',
        '400',
      ],
    },
  ],
  overrideThemeStyles: ({ adjustFontSizeTo, rhythm }) => ({
    h1: {
      ...adjustFontSizeTo(typo.h1Size),
      fontWeight: 600,
      lineHeight: rhythm(2),
      fontFamily: 'Lato'
    },
    h2: {
      ...adjustFontSizeTo(typo.h2Size),
      fontWeight: 600,
      lineHeight: rhythm(1.8),
    },
    h3: {
      ...adjustFontSizeTo(typo.h3Size),
      fontWeight: 600,
      lineHeight: rhythm(1.6),
    },
    h4: {
      ...adjustFontSizeTo(typo.h4Size),
      fontWeight: 600,
      lineHeight: rhythm(1.4),
    },
    h5: {
      ...adjustFontSizeTo(typo.h5Size),
      fontWeight: 600,
      lineHeight: rhythm(1.2),
    },
    h6: {
      ...adjustFontSizeTo(typo.h6Size),
      fontWeight: 600,
      llineHeight: rhythm(1.2),
    },
    'p,li,span': {
      ...adjustFontSizeTo(typo.textBodySize),
      fontWeight: 400,
      lineHeight: rhythm(1.687),
    },
  }),
})
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
