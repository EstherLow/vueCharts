const path = require("path");
const webpack = require('webpack')
module.exports = {
//   pluginOptions: {
//     "style-resources-loader": {
//       preProcessor: "scss",
//       patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
//     }
//   },
  css: {
    loaderOptions: {
        sass: {
          data: `
            @import "@/styles/_variables.scss";
            @import "@/styles/global.scss";
          `
        }
      }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js'],
      alias: {
        'jquery': 'jquery/dist/jquery.slim.js',
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default'],
        'Util': "exports-loader?Util!bootstrap/js/dist/util"
      }),
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ]
  }
};