const merge = require("webpack-merge");
const path = require('path');
const apiMocker = require('webpack-api-mocker');
const fs = require('fs');
const resolve_path = require('./path');
const base_config = require('./webpack.base');
// console.log(resolve_path("../main.js"))
const config = {
    mode: 'development',
    output: {
        // path: '/dist',
        filename: '[name].js',
        chunkFilename: '[name].bundle.js'
    },
    devServer: {
        contentBase: [resolve_path( "../src/")],
        // hot: true,
        progress: true,
        port: 8100,
        historyApiFallback: true,
        host: "0.0.0.0",
        disableHostCheck: true,
        // before(app){
        //     // mock数据  todo转发到线上
        //     // apiMocker(app, path.resolve(__dirname,'../mock/index.js'))
        //  },
         proxy: {
            "*": {
                target: "http://127.0.0.1:8110",
                bypass: function(req, res, proxyOptions) {
                    // 拦截不需要转发的请求
                    if (req.headers.accept.indexOf("html") !== -1) {
                        // 请求头accept html，不代理请求,返回index.html
                        return "index.html";
                    }  else if(req.headers.accept.indexOf("application/json") == -1) {
                        return req.path
                        
                    } 
                }
              }
          }
    },
}
module.exports=merge(base_config,config);