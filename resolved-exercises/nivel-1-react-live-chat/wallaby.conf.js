module.exports = function(wallaby) {
  return {
    testFramework: 'mocha',
    files: [
      // test libraries (chai, sinon, sinon-chai)
      // NOTE that with npm >=3 the file structure may be different
      { pattern: 'node_modules/chai/chai.js', instrument: false },
      // { pattern: './client/*.js' },
      // { pattern: './server/*.js' },
      { pattern: 'imports/**/*.js', load: true },
      { pattern: 'imports/**/*.test.js', ignore: true },
    ],
    tests: [
      // './client/*.test.js',
      // './server/*.test.js',
      'imports/**/*.test.js',
    ],
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
    setup: function() {
      window.expect = chai.expect;
    },
    debug: true,
  };
};
