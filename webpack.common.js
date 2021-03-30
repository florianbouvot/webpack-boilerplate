const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const WebpackBar = require('webpackbar');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: { app: './src/index.js' },

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist/'),
  },

  module: {
    rules: [
      //{
      //  test: /\.(?:ico|gif|jpg|png|svg)$/i,
      //  type: 'asset/resource',
      //},
      //{
      //  test: /\.(?:ico|gif|jpg|png|svg)$/i,
      //  use: [
      //    {
      //      loader: 'file-loader',
      //      options: {
      //        name: '[name].[ext]',
      //        outputPath: "img",
      //      }
      //    }
      //  ]
      //},
      //{
      //  test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
      //  use: [
      //    {
      //      loader: 'file-loader',
      //      options: {
      //        name: '[name].[ext]',
      //        outputPath: "fonts",
      //      }
      //    }
      //  ]
      //},
      //
      // test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
      // type: 'asset/resource',
      // generator: {
      //   filename: 'fonts/[name][ext][query]'
      // }
      //,
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "src/img/",
          to: "img",
        },
        {
          from: "src/fonts/",
          to: "fonts",
        },
      ],
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle'],
          ['mozjpeg', { quality: 50 }],
          ['pngquant', { quality: [0.5, 0.5] }],
          ['svgo'],
        ],
      },
    }),
    new WebpackBar(),
    new WebpackNotifierPlugin({ minimal: true }),
  ],

  stats: 'errors-only',
};
