// Karma configuration
// Generated on Mon Aug 29 2016 17:19:38 GMT+0800 (CST)
var process = require('process');

module.exports = function(config) {
    // debug时，去掉覆盖率报表
    var preprocess = {};
    if (!(process.argv.join(',').indexOf('--debug') > -1)) {
        preprocess['output/*.js'] = 'coverage';
    }

    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
           'requirejs',
            'mocha',
            'chai'
        ],
        // list of files / patterns to load in the browser
        files: [
            'lib/dep.js',
            'lib/jquery.min.js',
            'test/mocha/test-main.js', {
                pattern: 'output/*.js',
                included: false
            }, {
                pattern: 'output/spec.js',
                included: false
            }
        ],
        // list of files to exclude
        exclude: [],
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
//        preprocessors: preprocess,
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // reporters: ['progress'],
        reporters: [
            'mocha',
            'coverage'
        ],
        // htmlReporter: {
        // outputDir: 'build/test'
        // },
        // coverageReporter: {
        //     dir: 'coverage/'
        // },
        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher

        // usePolling: true,
        // transports: ['xhr-polling', 'jsonp-polling'],

        browsers: [
            // 'PhantomJS_custom'
            // 'PhantomJS'
            'Chrome'
        ],
        customLaunchers: {
            'PhantomJS_custom': {
                base: 'PhantomJS',
                options: {
                    windowName: 'my-window',
                    settings: {
                        webSecurityEnabled: false
                    },
                },
                flags: ['--load-images=false'],
                debug: false
            }
        },
        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        },
        //customLaunchers: {
        //AlmostHiddenChrome: {
        //base: 'Chrome',
        //// Chrome命令行参数
        //// Document: http://peter.sh/experiments/chromium-command-line-switches/
        //// Note: 隐藏窗口和后台运行都不会载入DOM，只能调整窗口大小和位置
        //flags: ['--window-position=0,0', '--window-size=0,0']
        //}
        //},

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,
        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
