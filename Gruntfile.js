var path = require('path'),
    webpack = require('webpack');

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    webpack: {

      options: {

        resolve: {
          root: './src',
          alias: {},
        },

        plugins: [
          new webpack.optimize.MinChunkSizePlugin({minChunkSize: 15000}),
          new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/)
        ],

        module: {
          loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|shared)/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015'],
              cacheDirectory: '/tmp/.babel-cache'
            }
          }]
        },

        devtool: 'source-map',
        keepalive: grunt.option('watch'),
        watch: grunt.option('watch'),
        failOnError: !grunt.option('watch')

      },

      dev: {
        entry: 'main',
        output: {
          path: './dist',
          filename: '[name].pack.js',
          library: 'initCourageApp'
        },
      },

    },
  });

  grunt.registerTask('build', ['webpack:dev']);
};
