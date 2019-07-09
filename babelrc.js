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
  plugins: ['babel-plugin-styled-components'],
  babelrc: false,
};
