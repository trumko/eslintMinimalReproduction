const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  parser: "@babel/eslint-parser",
  extends: [
    'airbnb',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'webpack.config.js')
      }
    },
  },
  parserOptions: {
    requireConfigFile: false,
  },
  globals: {},
  env: {
    browser: true,
    es6: true,
  },
  root: true,
  rules: {
  },
};
