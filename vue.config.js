const path = require("path");

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
  }
};