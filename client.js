module.exports = {
  extends: './.eslintrc.js',
  env: {
    browser: true,
    es6: true,
    node: false
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },
  rules: {}
};
