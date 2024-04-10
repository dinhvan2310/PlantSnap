module.exports = {
  root: true,
  extends: '@react-native',
  rule: {
    'react-native/no-inline-styles': 1,
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false,
      },
    ],
  },
};
