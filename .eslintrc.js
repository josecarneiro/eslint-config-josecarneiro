module.exports = {
  extends: 'standard',
  env: {
    browser: false,
    es6: true,
    node: true
  },
  parserOptions: {
    sourceType: "script",
    ecmaFeatures: {
      modules: false
    }
  },
  rules: {
    'arrow-parens': [ 1, 'as-needed' ],
    'arrow-spacing': 2,
    'eol-last': [ 1, 'always' ],
    'indent': [ 1, 2, { 'MemberExpression': 0, 'SwitchCase': 1 }],
    'no-console': 0,
    'no-extra-parens': [ 1, 'all' ]
    'no-var': 2,
    'no-undef': 1,
    'no-unused-vars': [ 1, { 'vars': 'all', 'args': 'after-used' } ],
    'no-template-curly-in-string': 2,
    'no-trailing-spaces': 2,
    'object-curly-spacing': [ 2, 'always' ],
    'padded-blocks': 0,
    'prefer-arrow-callback': 2,
    'prefer-rest-params': 2,
    'quotes': [ 2, 'single', 'avoid-escape' ],
    'semi': [ 2, 'always' ],
    'space-before-function-paren': [ 1, 'always' ],
    'space-infix-ops': 2,
    'spaced-comment': 0,
    'strict': [ 2, 'global' ],
    'template-curly-spacing': [ 2, 'always' ]
  }
};
