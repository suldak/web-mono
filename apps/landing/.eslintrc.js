module.exports = {
  extends: ['@repo/eslint-config/next.js'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@components', './src/components'],
          ['@assets', './src/assets'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
};
