const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

module.exports = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    process.env.NODE_ENV === 'production' && purgecss({
      content: [
        './src/**/*.vue',
        './src/**/*.pug'
      ],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['vue', 'pug']
        }
      ]
    })
  ]
}
