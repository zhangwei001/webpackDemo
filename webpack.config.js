/**
* webpack 配置
* auther: david
* date  : 20170420
*/
var htmlWebpackPlugin = require("html-webpack-plugin");
var CommonsChunkPlugin = require("./lib/js/CommonsChunkPlugin");
var path  = require("path");
module.exports = { 
	entry:{
		mian : "./src/script/main.js",
		a    : "./src/script/a.js"
	},
	output:{
		path: __dirname +"/dist/",
		filename : "js/[name]-[chunkhash].js"
		 
	},
	module: {
	    loaders: [
	      {
	        test: /\.vue$/,
	        loader: 'vue'
	      },
	      {
	      	test: /\.js$/, 
	      	exclude: path.resolve( __dirname, "node_modules") , 
	      	include: path.resolve( __dirname, "src") , 
	      	loader: "babel-loader"
	      },
	      {
	        test: /\.(png|jpg|gif)$/,
	        loader: 'url',
	        query: {
	          limit: 10000,
	          name: '[name].[ext]?[hash]'
	        }
	      }
	    ]
    },
	 plugins: [
        new htmlWebpackPlugin({
        	inject:"head",
        	template:"index.html",
        	filename:"index.html",
        	title:"webpack is good",
        	chunk:["main"]
        }),
        new CommonsChunkPlugin({
			// process all children of the main chunk
			// if omitted it would process all chunks
			name: "main",
			// create a additional async chunk for the common modules
			// which is loaded in parallel to the requested chunks
			async: true
		})
    ]
}