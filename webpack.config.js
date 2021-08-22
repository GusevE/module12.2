const path = require("path");


module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "./main.js"
  },
  devServer:{
		contentBase: path.join(__dirname, 'dist'),
		//hot: true,
		host: 'localhost',
		open: 'chrome',
		openPage: 'index.html',
		port: 8080
	},
  

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
        
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        
    }, 
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              localIdentName: '[name]-[local]',
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
    
  }
  
};