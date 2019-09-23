module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'standard-react'],
  rules: {
    'comma-dangle': ['warn', 'only-multiline']
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src']]
      }
    }
  }
}
