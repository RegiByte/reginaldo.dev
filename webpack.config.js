const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (args, env) => {
    const { mode = 'development' } = env

    return {
        entry: './src/index.js',
        output: {
            filename: 'app.js',
            path: path.resolve(__dirname, 'dist'),
            chunkFilename: '[name].app.js',
        },
        devServer: {
            port: '3000',
            compress: true,
            contentBase: path.resolve(__dirname, 'dist'),
            sockHost: '3000-ffef0315-3d8f-47b9-beee-88eacdfa7f74.ws-us02.gitpod.io',
            sockPort: 443,
            historyApiFallback: true,
            allowedHosts: [
                'localhost',
                '3000-ffef0315-3d8f-47b9-beee-88eacdfa7f74.ws-us02.gitpod.io'
            ]
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        resolve: {
            alias: {
                svelte: path.resolve('node_modules', 'svelte')
            },
            extensions: ['.mjs', '.js', '.svelte'],
            mainFields: ['svelte', 'browser', 'module', 'main']
        },
        performance: {
            hints: 'warning',
            maxAssetSize: 200000,
            maxEntrypointSize: 400000
        },
        devtool: 'source-map',
        target: 'web',
        module: {
            rules: [
                {
                    test: /\.(html|svelte)$/,
                    use: {
                        loader: 'svelte-loader',
                        options: {
                            emitCss: true
                        }
                    },
                },
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images'
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff2?|ttf|otf|eot)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "app.css"
            }),
            new HtmlWebpackPlugin({
                title: 'reginaldo.dev',
                favicon: path.resolve(__dirname, 'favicon.jpg')
            })
        ]
    }
}