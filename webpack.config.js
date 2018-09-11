const path = require('path');
const webpack = require('webpack');


module.exports = function(env) {
    const isDevelopment = env === "development";
    console.log(`This is a ${env} build` );

    const baseConfig = {
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
            new webpack.DefinePlugin({
                ENV_IS_DEVELOPMENT: isDevelopment,
                ENV_IS: JSON.stringify(env)
        })
        ]
    }

    if (isDevelopment) {
        baseConfig.plugins.push(
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        )
    }

    return baseConfig;
}