
module.exports = {
    module: {
        rules: [{                  //打包规则
           test:   /\.js?$/,       //对所有js文件进行打包
           exclude: /node_modules/,//不打包node_modules中的js文件
           use: {
            loader: 'babel-loader',
            options: {
              presets: [
                'babel-preset-env',
                'babel-preset-react'
              ]
            }
          }
       }]
    }
}