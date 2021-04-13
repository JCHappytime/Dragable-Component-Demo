module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  parser: 'vue-eslint-parser',
  env: {
    node: true,
    browser: true,
    es6: true,
    commonjs: true
  },
  plugins: ['vue'],
  extends: ['plugin:vue/recommended'],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-unused-vars': 0,
    // 'generator-star-spacing': 'off',
    // 'semi':['error','always'],
    // 'space-before-function-paren': 0,
    // 'semi': 'off',
    // 'space-before-function-paren': 0,
    // 'no-tabs': 'off'
  }
};
