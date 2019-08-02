 const path=require('path');
 var HtmlWebpackPlugin=require('html-webpack-plugin');

 module.exports={
 	entry:'./src/index.js',
 	output:{
 		filename:'app.js'
 	},
 	module:{
 		rules:[
 			{
 				test:/\.scss$/,
 				exclude:/node_modules/,
 				use:[
 					'style-loader',
 					'css-loader',
 					'sass-loader'
 				]
 			}
 		]
 	},
 	devServer:{
		contentBase:path.join(__dirname,"dist"),
		compress:true,
		port:3000,
		before:function(app,server){
			app.get('/api/mydata',function(req,res){
				res.json(["red","green","blue","yellow","orange"]);
			})
		}
	},
 	plugins:[
 		new HtmlWebpackPlugin({
 			template:'./index.html'
 		})
 	]
 }