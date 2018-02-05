const webpack = require('webpack');
const opn = require('opn');
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const webpackFile = require('./webpack.file.conf');

let config = merge(baseWebpackConfig, {
	output: {
		path: path.resolve(webpackFile.devDirectory),
		filename: 'js/[name].js',
		chunkFilename: 'js/[name]-[id].js',
		publicPath: ''
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
			}
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader'],
				include: [path.resolve(__dirname, '../../app'), path.resolve(__dirname, '../../entryBuild')],
				exclude: [path.resolve(__dirname, '../../node_modules')]
			}
		]
	},
	devServer: {
		host: '0.0.0.0',
		port: 3000,
		hot: true,
		inline: true,
		contentBase: path.resolve(webpackFile.devDirectory),
		historyApiFallback: true,
		disableHostCheck: true,
		proxy: [{
			context: ['/api/**', '/u/**'],
			target: 'http://172.24.76.32:3000',
			secure: false
		}],
		after() {
			opn('http://localhost:' + this.port);
		}
	}
});
module.exports = config;