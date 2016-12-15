'use strict';
var fallback = require('connect-history-api-fallback');
var log = require('connect-logger');
/*
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 */
module.exports = {
    port: 8000,
    injectChanges: false, // workaround for Angular 2 styleUrls loading
    filters: ['./**/*.{html,htm,css,js}'],
    watchOptions: {
        ignored: 'node_modules'
    },
    server: ['./aot'],
    middleware: [
        log({ format: '%date %status %method %url' }),
        fallback({
            index: '/index.html',
            htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] // systemjs workaround
        })
    ]
};
