const HTMLPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    // devServer: {
    //     onBeforeSetupMiddleware: function (devServer) {
    //         devServer.app.get("/dist", function (req, res) {
    //             res.json({ custom: "response" });
    //         });
    //     },
    // },
    devServer: {
        static: {
            directory: path.join(__dirname, '/dist'),
        }
        // contentBase: __dirname + '/dist'
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}