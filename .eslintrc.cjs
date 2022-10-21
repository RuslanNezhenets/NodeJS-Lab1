module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: [
      'standard',
      'plugin:sonarjs/recommended',
      'some-other-config-you-use',
      'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  'plugins': ['sonarjs'],
  rules: {
  }
}
