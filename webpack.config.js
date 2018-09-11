const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app/app.js',
    mode: "none",
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: "app.bundle.js",
        publicPath: '/dist/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'app'),
        publicPath: '/dist/',
        watchContentBase: true,
        hotOnly: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}