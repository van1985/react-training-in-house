module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [{ pattern: 'karma.test.bundle.js', watched: false }],
    preprocessors: { 'karma.test.bundle.js': ['webpack'] },
    reporters: ['mocha', 'coverage', 'junit'],
    client: {
      mocha: {
        reporter: 'html',
      },
    },
    mochaReporter: {
      output: 'autowatch',
    },
    coverageReporter: {
      includeAllSources: true,
      dir: './.coverage',
      reporters: [
        { type: 'text-summary' },
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
      ],
      instrumenterOptions: {
        istanbul: { noCompact: true },
      },
    },
    // the default configuration
    junitReporter: {
      outputDir: '.junit', // results will be saved as $outputDir/$browserName.xml
      outputFile: 'test-results.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '', // suite will become the package name attribute in xml testsuite element
      useBrowserName: false, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      properties: {}, // key value pair of properties to add to the <properties> section of the report
    },
    // possible values:
    // logLevel: config.LOG_DISABLE,
    // logLevel: config.LOG_ERROR,
    // logLevel: config.LOG_WARN,
    // logLevel: config.LOG_INFO,
    // logLevel: config.LOG_DEBUG,
    logLevel: config.LOG_INFO,
    singleRun: true,
    browsers: ['PhantomJS'],
    webpack: {
      module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
          { test: /\.html$/, exclude: /node_modules/, loader: 'html' },
          { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },
          { test: /\.json$/, exclude: /node_modules/, loader: 'json' },
        ],
      },
    },
    webpackMiddleware: {
      stats: 'errors-only',
      quiet: true,
      noInfo: true,
    },
  });
};
