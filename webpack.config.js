const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// let FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = (env) => {

  return{
    entry: [
      '@babel/polyfill', 
      './src/index.js'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',  // https://webpack.js.org/guides/public-path/
      filename: '[name].bundle.[hash:4].js',
      chunkFilename: '[name].bundle.[hash:4].js',
    },
    module: {
      rules:[{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },{
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false }
          }
        ]
      },{
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },{
        test: /\.(png|jpe?g|ico|svg|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              limit: 25000
            }
          },
          {
            loader: 'img-loader'
          }
        ]
      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
        favicon: "./src/images/favicon.png"
      }),
      new MiniCssExtractPlugin({
        filename: '[name].bundle.[hash:4].css',
        chunkFilename: '[name].bundle.[hash:4].css',
      }),
      new Dotenv({
        path: env.ENV_FILE_PATH, // load this now instead of the ones in '.env'
        safe: false, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
        systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
        silent: false, // hide any errors
        defaults: false // load '.env.defaults' as the default values if empty.
      }),
      new webpack.EnvironmentPlugin({}),
      new CopyPlugin([
        { from: './src/robots.txt', to: './' },
      ]),
      /* new FaviconsWebpackPlugin({
        // Your source logo
        logo: './src/images/favicon.png',
        // The prefix for all image files (might be a folder or a name)
        prefix: 'icons-[hash]/',
        // Emit all stats of the generated icons
        emitStats: false,
        // The name of the json containing all favicon information
        statsFilename: 'iconstats-[hash].json',
        // Generate a cache file with control hashes and
        // don't rebuild the favicons until those hashes change
        persistentCache: true,
        // Inject the html into the html-webpack-plugin
        inject: true,
        // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
        background: '#fff',
        // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
        title: 'Webpack App',
     
        // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      })*/
    ],
    devServer: {
      port: 5000,
      host: '0.0.0.0',
      historyApiFallback: true
    }
  };
}
