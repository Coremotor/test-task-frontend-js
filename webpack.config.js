const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new HTMLWebpackPlugin(
			{
			template: './index.html'
			}
		),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				use: ['file-loader']
			},
			{
				test: /\.(html)$/,
				use: ['html-loader']
			},
		]
	}
}