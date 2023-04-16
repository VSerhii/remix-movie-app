module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  root: true,
  extends: ['./config/eslint-config-typescript.js'],
};
