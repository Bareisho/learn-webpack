const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {

  },
  entry: {
    "main": "./src/index.js"
  },
  module: {
    rules: [{
      test: /\.jpg$/,
      use: [{
        loader: "url-loader",
        options: { //loader的配置
          name: "[name].[ext]", //和源文件一样的名字，一样的后缀
          outputPath: "images/", //超过limit后，打包放置的文件夹
          limit: 1024 //以byte为单位
        }
      }]
    }, {
      test: /\.css$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          importLoaders: 2,
          modules: true
        }
      }, {
        loader: "postcss-loader"
      }]
    }, {
      test: /\.js/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader",
        options: {
          presets: [
            ["@babel/preset-env", {
              useBuiltIns: "usage",
              targets: {
                "ie": "10" //最低版本
              }
            }]
          ]
        }
      }]
    }]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./index.html"
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: "index.min.js",
    path: path.resolve(__dirname, "dist") //必须是绝对路径
  }
}