const path = require("path"); //node的path模块
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  target: "node",
  mode: "development", //开发模式
  entry: "./src/server/index.js", //入口
  output: {
    //打包出口
    filename: "bundle.js", //打包后的文件名
    path: path.resolve(__dirname, "build"), //存放到根目录的build文件夹
  },
  externals: [webpackNodeExternals()],
};
module.exports = merge(baseConfig, config);
