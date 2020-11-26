module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ['vue'],
  extends: ['plugin:vue/essential', '@vue/standard'],
  globals:{
    "uni":true
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
