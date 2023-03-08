const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";

module.exports = {
	mode,
	target: "web",
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
		assetModuleFilename: "assets/[name][ext]",
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
			{
				test: /\.(png|svg|jpe?g|webp|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
		alias: {
			images: path.resolve(__dirname, "src/assets/"),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve(__dirname, "public", "index.html"),
		}),
		new Dotenv(),
	],
};
