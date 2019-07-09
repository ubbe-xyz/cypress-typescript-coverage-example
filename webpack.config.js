const path = require('path');
const babelConfig = require('./babelrc');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function webpackConfig() {
  return {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: 'babel-loader',
              options: { ...babelConfig },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
    },
  };
}

module.exports = webpackConfig;
