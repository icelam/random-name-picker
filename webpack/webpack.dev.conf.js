const path = require('path');
const fs = require('fs');
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const dotenv = require('dotenv');
const autoprefixer = require('autoprefixer');
const baseWebpackConfig = require('./webpack.base.conf');
const getClientEnvironment = require('./utils/env');

// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
const dotenvFiles = [
  path.resolve(__dirname, '../.env.development.local'),
  path.resolve(__dirname, '../.env.test.local'),
  path.resolve(__dirname, '../.env.local'),
  path.resolve(__dirname, '../.env.development'),
  path.resolve(__dirname, '../.env.test'),
  path.resolve(__dirname, '../.env')
].filter((dotenvFile) => fs.existsSync(dotenvFile));

console.log(`${dotenvFiles[0]} will be used.\n`);

// Load env variables
dotenv.config({
  path: dotenvFiles[0]
});

const clientEnv = getClientEnvironment('development');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    chunkFilename: 'assets/js/[name].chunk.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    watchFiles: ['src/**/*'],
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    }
  },
  plugins: [
    new Webpack.DefinePlugin(clientEnv.stringified)
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: (file) => /node_modules\//.test(file),
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                noEmit: false
              }
            }
          }
        ]
      },
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  autoprefixer()
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
});
