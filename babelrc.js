const { CODE_COVERAGE } = process.env;
const plugins = ['babel-plugin-styled-components'];

if (CODE_COVERAGE === 'true') plugins.push('istanbul');

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/typescript',
    [
      '@babel/preset-react',
      {
        development: true,
      },
    ],
  ],
  plugins,
  babelrc: false,
};
