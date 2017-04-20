/**
* webpack 配置
* auther: david
* date  : 20170420
*/
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = { 
	entry:{
		mian : "./src/script/main.js",
		a    : "./src/script/a.js"
	},
	module: {
	    loaders: [
	      {
	        test: /\.vue$/,
	        loader: 'vue'
	      },
	      {
	        // edit this for additional asset file types
	        test: /\.(png|jpg|gif)$/,
	        loader: 'url',
	        query: {
	          // inline files smaller then 10kb as base64 dataURL
	          limit: 10000,
	          // fallback to file-loader with this naming scheme
	          name: '[name].[ext]?[hash]'
	        }
	      }
	    ]
    },
	output:{
		path: __dirname +"/dist/",
		filename : "js/[name]-[chunkhash].js"
	},
	 plugins: [
        new htmlWebpackPlugin({
        	inject:"head",
        	template:"index.html",
        	filename:"index.html",
        	title:"webpack is good"
        })
    ]
}