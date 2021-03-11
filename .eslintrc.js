module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ['vue', 'prettier'],
  extends: ['plugin:vue/essential', '@vue/airbnb', 'prettier'],
  rules: {
    'max-len': 0,
    camelcase: 0,
    'no-underscore-dangle': 0,
    'import/extensions': 0,
    'consistent-return': 0,
    'class-methods-use-this': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    uni: true,
    ROUTES: true,
    plus: true,
  },
}
