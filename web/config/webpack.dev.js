const merge = require("webpack-merge");
const path = require('path');
const apiMocker = require('webpack-api-mocker');
const fs = require('fs');
const resolve_path = require('./path');
const base_config = require('./webpack.base');
// console.log(resolve_path("../main.js"))
const config = {
    entry: {
        main: resolve_path("../main.js"),
    },
    mode: 'development',
    output: {
        // path: '/dist',
        filename: '[name].js',
        chunkFilename: '[name].bundle.js'
    },
    devServer: {
        contentBase: [resolve_path( "../")],
        // hot: true,
        progress: true,
        port: 8100,
        historyApiFallback: true,
        host: "0.0.0.0",
        disableHostCheck: true,
        before(app){
            // mock数据  todo转发到线上
            // apiMocker(app, path.resolve(__dirname,'../mock/index.js'))
         },
         proxy: {
            "*": {
                // target: "http://localhost:8000",
                bypass: function(req, res, proxyOptions) {
                    // console.log(req.path)
                    // if (req.headers.accept.indexOf("html") !== -1) {
                    //     // 请求头accept html，不代理请求,返回index.html
                    //     return "index.html";
                    // }  else {
                    //     return req.path
                        
                    // } 
                }
              }
          }
    },
}
module.exports=merge(base_config,config);