const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// можно сборку сделать еще более навороченной
// с HMR мапами функциями и переменными для дева и разработки,
// но в этом задании не вижу смысла

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: '[hash].js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new HTMLWebpackPlugin(
            {
                template: './index.html'
            }
        ),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[hash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                },
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts',
                },
            },
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
        ]
    }
}