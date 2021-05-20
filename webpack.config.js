const path = require('path');

const pathResolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
    mode: 'development',
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            pathResolve('src'),
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': pathResolve('src'),
        }
    },
    externals: ['react'],
    entry: pathResolve('src/index.ts'),
    output: {
        path: pathResolve('build'),
        library: {
            type: 'commonjs2',
        },
        filename: 'index.js'
    }
};
