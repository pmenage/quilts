module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "vue/max-attributes-per-line": [4,
      {
        "singleline": 4,
        "multiline": {
          "max": 1,
          "allowFirstLine": true
        }
      }
    ],
  }
}
