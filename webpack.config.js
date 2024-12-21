const webpack = require('webpack');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  // Ensure the correct mode (development or production) is set
  mode: 'production',  // can also be passed during build

  plugins: [
    new webpack.DefinePlugin(envKeys),
  ],
};
