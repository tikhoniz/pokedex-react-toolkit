const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";

module.exports = {
	mode,
	entry: {
		bundle: path.resolve(__dirname, "src", "index.js"),
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	output: {
		filename: devMode ? "[name].[contenthash].js" : "[name].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},

	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(js|jsx)$/i,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve(__dirname, "public", "index.html"),
		}),
		new Dotenv(),
	],
};
