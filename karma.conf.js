// Karma configuration
// Generated on Sun Feb 04 2024 19:45:38 GMT+0000 (Greenwich Mean Time)

module.exports = function(config) {
  config.set({
    // Karma will require() these plugins
    // If you omit the plugins property, it'll try to load all the plugins that are:
    // 1. Prefixed with karma-.
    // 2. A sibling to the karma npm module
    //- node_modules
    //   - karma
    //   - karma-chrome-launcher
    //   - karma-firefox-launcher
    // ...since karma-chrome-launcher and karma-firefox-launcher are siblings to the karma module that is in use,
    // and since they both start with karma- they'll be loaded automatically
    plugins: [
        "karma-chrome-launcher",
        "karma-jasmine"
        // "karma-ng-html2js-preprocessor"
    ],

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ["jasmine"],




    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
    preprocessors: {
      // "app/**/*.html": ["ng-html2js"]
    },

    // ngHtml2JsPreprocessor: {
    //   moduleName: "templates"
    // },

    // list of files / patterns to load in the browser
    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-resource/angular-resource.js',
      'app/**/*.js',
      'app/**/*.html',
      'test/**/*.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ["progress"],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ["Chrome"],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity
  })
}
