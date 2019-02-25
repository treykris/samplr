const path = require('path');

module.exports = {
    entry: './src/app.ts',
    devtool: 'source-map',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/scripts')
    },
    target: 'web',
    mode: 'production',
};