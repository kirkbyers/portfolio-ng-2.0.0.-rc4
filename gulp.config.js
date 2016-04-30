'use strict';

module.exports = function () {
    const client = './src/client/';
    const server = './src/server/';
    const clientApp = client + 'app/';
    const temp = './.tmp/';
    const wiredep = require('wiredep');
    const bowerFiles = wiredep({devDependencies: true})['js','css'];
    const bower = {
        json: require('./bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    };
    const nodeModules = 'node_modules';

    var config = {
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        build: './build/',
        client: client,
        css: temp + 'styles.css',
        fonts: bower.directory + 'font-awesome/fonts/**/*.*',
        html: client + '**/*.html',
        htmltemplates: clientApp + '**/*.html',
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        // app js, with no specs
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        jsOrder: [
            '**/app.module.js',
            '**/*.module.js',
            '**/*.js'
        ],
        scss: client + 'styles/index.scss',
        server: server,
        source: 'src/',
        temp: temp,
        bower: bower,
        packages: [
            './package.json',
            './bower.json'
        ],
        nodeServer: './src/server/app.js',
        defaultPort: '7654'
    }

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;
}
