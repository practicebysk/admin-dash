const webpack = require('webpack');
const dotenv = require('dotenv');

// Load environment variables
const env = dotenv.config().parsed;

// Format variables for Webpack
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  plugins: [
    new webpack.DefinePlugin(envKeys),
  ],
};
