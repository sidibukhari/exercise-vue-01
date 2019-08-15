const path = require('path')

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, 'src/styles/imports.styl')
      ]
    }
  }
}
