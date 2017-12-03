module.exports = {
  extends: 'google',
  rules: {
    'no-var': 0,
    'linebreak-style': 0,
    'comma-dangle': [0, 'always-multiline'],
    'max-len': [
      1,
      {
        code: 300,
        tabWidth: 2,
        ignoreUrls: true,
        ignorePattern: '^goog.(module|require)'
      }
    ],
    'object-curly-spacing': 0
  }
};
