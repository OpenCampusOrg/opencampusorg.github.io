/* eslint-disable */
const npm_package = require("./package.json");

process.env = {
  ...process.env,
  VUE_APP_NAME: npm_package.name,
  VUE_APP_VERSION: npm_package.version,
  VUE_APP_DESCRIPTION: npm_package.description,
  VUE_APP_AUTHOR: npm_package.author,
  VUE_APP_URL: npm_package.url,
  VUE_APP_EMAIL: npm_package.email
};

module.exports = {
  devServer: {
    public: "host.docker.internal:8080",
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  transpileDependencies: [/mdb-vue-ui-kit/]
};
